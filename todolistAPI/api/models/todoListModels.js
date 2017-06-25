'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BugSchema = new Schema({
    name: {
        type: String,
        Required: 'Kindly enter the name of the bug'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['new', 'in_analysis', 'in_qualification', 'closed']
        }],
        default: ['new']
    }
});

module.exports = mongoose.model('Bugs', BugSchema);