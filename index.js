const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema/typeDefs')
const resolvers = require('./schema/resolvers')
const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo:27017/graphqlapi', {
  useNewUrlParser: true
},
  console.log('🚀 MongoDB Connected')
)

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(3000).then(({ url }) => {
    console.log(`🚀 Server running at ${url}`)
})