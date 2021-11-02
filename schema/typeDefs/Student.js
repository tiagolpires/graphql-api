module.exports.types = `
    type Student {
        id: ID!
        name: String!
        email: String!
        document: String!
    }
`

module.exports.queries = `
    students: [Student]!
    student(id: ID!): Student
`

module.exports.mutations = `
    createStudent(name: String!, email: String!, document: String!): Student 
`