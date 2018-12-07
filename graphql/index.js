const graphqlHTTP = require('express-graphql')
const schema = require('./schema')

const handler = graphqlHTTP({
  schema: buildSchema(schema.types),
  rootValue: schema.resolvers,
  graphiql: true
})

module.exports = handler
