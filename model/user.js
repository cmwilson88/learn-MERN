'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    local           : {
        email       : String,
        password    : String
    }
})