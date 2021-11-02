const { ApolloServer } = require('apollo-server')
const typeDefs = require('./schema/typeDefs')

const resolvers = {
    Query: {
        students: () => ([{ name: 'Fulano' }]),
    },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(3000).then(({ url }) => {
    console.log(`🚀 Server running at ${url}`)
})