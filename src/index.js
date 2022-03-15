// Required Module
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
require('dotenv').config()

// Local Module Imports
const db = require('./db')
const models = require('./models')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')

// Defined the express app
const app = express()

// Port Options
const port = process.env.PORT || 4000;
const DB_HOST = process.env.DB_HOST

// connect to mongodb database
db.connect(DB_HOST)

// Set the GraphQL Playground
async function apolloServer(typeDefs, resolvers){
  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: () => {
      return {models}
    }
  })
  await server.start()
  server.applyMiddleware({ app, path: '/api'})
  console.log(`Graph QL Playground is running at http://localhost:${port}${server.graphqlPath}`)
}

app.get('/', (req, res) => res.send(`
<h1>
Hello Backend
</h1>
`))

apolloServer(typeDefs, resolvers)

app.listen(4000, () => 
console.log(`Server is running at http://localhost:${port}`)
)
