const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({
    name: String,
    email: String,
    document: String,
})

module.exports = mongoose.model('Student', StudentSchema)