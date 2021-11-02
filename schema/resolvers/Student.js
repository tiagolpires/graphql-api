const Student = require('../../model/Student')

module.exports = {
    async getStudents() {
        return Student.find()
    },

    async getStudent(_, { id }) {
        return Student.findById(id)
    },

    async createStudent(_, { name, email, document }) {
        return Student.create({ name, email, document })
    },

    async removeStudent(_, { id }) {
        return Student.findByIdAndRemove(id)
    },
}
