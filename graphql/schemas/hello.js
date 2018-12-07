const types = `
  type Query {
    hello: String
  }
`

const resolvers = {
  hello: () => 'Hello world!'
}

module.exports = { types, resolvers }
