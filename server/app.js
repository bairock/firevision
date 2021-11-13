require('dotenv').config()

const { ApolloServer } = require('apollo-server')
const { ApolloServerPluginLandingPageGraphQLPlayground,
    ApolloServerPluginLandingPageDisabled } = require('apollo-server-core');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { applyMiddleware } = require('graphql-middleware')
const { PrismaClient } = require('@prisma/client')
const { PrismaSelect } = require('@paljs/plugins')
const { typeDefs, resolvers } = require('./src/graphql')

const { permissions, checkRole } = require('utils')

const prisma = new PrismaClient()

const middleware = async (resolve, root, args, context, info) => {
    const result = new PrismaSelect(info).value
    if (Object.keys(result.select).length > 0) {
        args = {
            ...args,
            ...result
        }
    }
    return resolve(root, args, context, info)
}

const schema = applyMiddleware(
    makeExecutableSchema({
        typeDefs,
        resolvers
    }),
    permissions,
    middleware
)

const server = new ApolloServer({
    schema,
    plugins: [
        process.env.NODE_ENV === 'PROD'
            ?   ApolloServerPluginLandingPageDisabled()
            :   ApolloServerPluginLandingPageGraphQLPlayground()
    ],
    context: (req) => {
        const { authorization } = req.req.headers

        const checkToken = async () => {
            const roles = ['USER', 'ADMIN']
            const checks = await Promise.all(
                roles.map(async (role) => {
                    return await checkRole(authorization, role, prisma, false)
                })
            )
            const find = checks.find((object) => object)
            if (!find) throw new Error('Token timeout')
            return find
        }
        
        return {
            prisma,
            authorization,
            checkToken
        }
    }
})

const port = process.env["APOLLO_PORT"] || 8000

server.listen({ 
    port, 
}, () => {
    console.log(`Server start playground http://localhost:${port}/`)
})