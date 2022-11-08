const mongoose = require('mongoose')

const personSchema = new mongoose.Schema({
    person: {
        uuid: {
            type: String
        },
        name: {
            first: String,
            last: String
        },
        dob: {
            date: String
        }
    }
},{timestamps: true})

module.exports = mongoose.model('person', personSchema)