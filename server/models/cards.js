'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CardSchema = Schema({
    url : {
        type : String,
    },
    type : {
        type : String,
    },
    number : {
        type : String,
    },
    active : {
        type : Boolean,
        default : true
    }
},
{ usePushEach: true })

module.exports = mongoose.model('cards', CardSchema)