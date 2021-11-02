const StudentResolver = require('./Student.js')

module.exports = {
    Query: {
        students: StudentResolver.getStudents,
    },

    Mutation: {
        createStudent: StudentResolver.createStudent
    }
}