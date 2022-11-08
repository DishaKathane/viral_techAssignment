const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const phoneSchema = mongoose.Schema({
    person_id:{
        type: ObjectId,
        ref: 'person'
    },
    phone: String
       
}, {timestamps: true})

module.exports = mongoose.model('phone', phoneSchema)