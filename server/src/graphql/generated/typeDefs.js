const { Camera } = require('./Camera/typeDefs')
const { mergeTypeDefs } = require('@graphql-tools/merge')
const { sdlInputs } = require('@paljs/plugins')

const typeDefs = mergeTypeDefs([sdlInputs(), Camera])

module.exports = { typeDefs }
