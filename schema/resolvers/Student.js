const Student = require('../../model/Student')

module.exports = {
    async getStudents() {
        return Student.find()
    },
}
