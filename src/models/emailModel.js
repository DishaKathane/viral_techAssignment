const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const emailSchema = mongoose.Schema({
    person_id:{
        type: ObjectId,
        ref: 'person'
    },
    email: String
}, {timestamps: true})

module.exports = mongoose.model('email', emailSchema)