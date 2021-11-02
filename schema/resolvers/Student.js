const Student = require('../../model/Student')

module.exports = {
    async getStudents() {
        return Student.find()
    },

    async createStudent(_, { name, email, document }) {
        return Student.create({ name, email, document })
    },
}
