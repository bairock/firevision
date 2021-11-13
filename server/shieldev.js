const { resolvers } = require('./src/graphql/resolvers')
const fs = require('fs')

// const Query = Object.entries(resolvers[0].Query)
// const Mutation = Object.entries(resolvers[0].Mutation)

const reEndpoint = (endpoints, isLast) => {
    let str = ""
    const Objects = Object.entries(endpoints)
    Objects.forEach(([name], index) => { 
        str += `\t\t${name}: _default,\n`
    })
    return str
}

const multiEndpoint = (arrayName) => {
    str = ""
    resolvers.forEach(( Object , index ) => { 
        // console.log(resolvers.length - 1 === index)
        if (Object[arrayName])
            str += reEndpoint( 
                Object[arrayName], 
                resolvers.length === index 
            ) 
    })
    str = str.substring(0,str.length - 2)
    return str
}
fs.writeFileSync(`permissions.js`,
`const { rule, shield, and, or, not } = require('graphql-shield')    

const _default = rule({ cache: 'contextual' })(
\tasync (parent, args, {}, info) => {
\t\treturn true
\t}
)

const rules = require('./rules')

const permissions = shield({
\tQuery: {
${multiEndpoint("Query")}
\t},
\tMutation: {
${multiEndpoint("Mutation")}
\t}
},
{
\tallowExternalErrors: true,
\tfallbackError: 'No permission'
})

module.exports = { permissions }`)

console.log('JS file is generated')