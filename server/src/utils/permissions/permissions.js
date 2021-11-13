const { rule, shield, and, or, not } = require('graphql-shield')    

const _default = rule({ cache: 'contextual' })(
	async (parent, args, {}, info) => {
		return true
	}
)

const rules = require('./rules')

const permissions = shield({
	Query: {
	},
	Mutation: {
	}
},
{
	allowExternalErrors: true,
	fallbackError: 'No permission'
})

module.exports = { permissions }