const { gql } = require('apollo-server')

const typeDefs = gql`
    type Student {
        name: String!
        email: String!
        document: String!
    }

    type Query {
        students: [Student]
    }
`

module.exports = typeDefs