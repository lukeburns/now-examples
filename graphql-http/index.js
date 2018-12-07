const graphqlHTTP = require('express-graphql')
const { buildSchema } = require('graphql')

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => 'Hello world!'
}

var handler = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
})

module.exports = handler
