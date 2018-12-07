const { buildSchema } = require('graphql')
const { mergeTypes, mergeResolvers } = require('merge-graphql-schemas')

const path = require('path').join(__dirname, 'schemas')
const schemas = require('fs').readdirSync(path).map(file => require('./schemas/' + file))
const schema = mergeSchemas(schemas)

module.exports = schema

function mergeSchemas (schemas) {
  let types = mergeTypes(schemas.map(schema => schema.types), { all: true })
  let resolvers = mergeResolvers(schemas.map(schema => schema.resolvers))

  return {
    types,
    resolvers
  }
}
