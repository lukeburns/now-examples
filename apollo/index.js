const { ApolloServer, gql } = require('apollo-server-micro')

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world from ApolloServer on Now 2.0!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers, introspection: true })

module.exports = server.createHandler()
