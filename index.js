const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type Student {
        name: String!
    }

    type Query {
        students: [Student]
    }
`

const resolvers = {
    Query: {
        students: () => ([{ name: 'Fulano' }]),
    },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(3000).then(({ url }) => {
    console.log(`🚀 Server running at ${url}`)
})