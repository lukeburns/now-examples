const schema = require('./schema')
const { graphql, buildSchema } = require('graphql')
module.exports = function (req, res) {
  const qs = require('url').parse(req.url, true).query
  graphql(buildSchema(schema.types), qs.query, schema.resolvers).then(result => {
    res.end(JSON.stringify(result))
  })
}
