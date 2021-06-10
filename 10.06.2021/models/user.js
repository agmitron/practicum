const mongoose = require('mongoose')

/*
    User {
        name
        gender
        about
        hobbies
        age
        car
        pet
    }
*/

const carSchema = new mongoose.Schema({
    brand: String,
    engine_capacity: Number,
    model: String
})

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: Number
})

// Enumerate

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2, 
        maxlength: 30,
    },
    gender: {
        type: String,
        enum: ['м', 'ж', 'другой'], 
    },
    about: String,
    hobbies: [{
        type: String, 
        minlength: 2,
        maxlength: 30,
    }],
    age: Number,
    car: carSchema,
    pet: petSchema
})

module.exports = mongoose.model('user', userSchema)