module.exports.types = `
    type Student {
        name: String!
        email: String!
        document: String!
    }
`

module.exports.queries = `
    students: [Student]
`