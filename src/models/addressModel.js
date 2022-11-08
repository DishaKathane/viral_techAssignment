const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;

const addressSchema = mongoose.Schema({
    person_id:{
        type: ObjectId,
        ref: 'person'
    },
    street: {
        name: {
            type: String
        },
        city: {
            type: String
        }
    }
}, {timestamps: true})

module.exports = mongoose.model('address', addressSchema)