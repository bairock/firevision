const { mergeTypeDefs } = require('@graphql-tools/merge')
const { default: gql } = require('graphql-tag')

// const { sdlInputs } = require('@paljs/plugins')
const { typeDefs: PalJS } = require('./generated/typeDefs')

const Initial = gql`
    scalar Upload
    scalar Json
`

const typeDefs = mergeTypeDefs([
    // sdlInputs(),
    PalJS,
    Initial, 
])

module.exports = { typeDefs }