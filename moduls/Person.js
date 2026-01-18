const mongoose = require("mongoose");
//Define the person schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        requried: true
    },
    age: {
        type: Number,

    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manger'],
        requried: true
    },
    mobile: {
        type: String,
        requried: true      
    },
    email: {
        type: String, 
        requried: true,
        unique: true,
    },
    address: {
        type: String,
    },
    salary: {
        type: Number,
        requried: true
    },

});

//create person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;  