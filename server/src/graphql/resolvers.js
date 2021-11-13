const { resolvers: PalJS } = require('./generated/resolvers')

const resolvers = [
    ...PalJS,
]

module.exports = { resolvers }