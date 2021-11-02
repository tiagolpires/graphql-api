const StudentResolver = require('./Student.js')

module.exports = {
    Query: {
        students: StudentResolver.getStudents,
        student: StudentResolver.getStudent
    },

    Mutation: {
        createStudent: StudentResolver.createStudent
    }
}