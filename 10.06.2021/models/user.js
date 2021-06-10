const mongoose = require('mongoose')

const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    age: Number
})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2, 
        maxlength: 30
    },
    gender: {
        type: String, 
        enum: ['м', 'ж', 'другой'] // гендер может содержать одно из трех значений
    },
    about: String,
    hobbies: [{
        type: String,
        minlength: 2, 
        maxlength: 30
    }],
    age: { // у пользователя есть возраст
        type: Number, // возраст - число
        validate: { // опишем свойство validate
            validator(v) { // validator - функция проверки данных. v - значение свойства age
                return v >= 18; // если возраст меньше 18, вернётся false
            },
            message: 'Вам должно быть больше 18 лет!', // когда validator вернёт false, будет использовано это сообщение
        }
    },
    pet: petSchema
})

module.exports = mongoose.model('user', userSchema)