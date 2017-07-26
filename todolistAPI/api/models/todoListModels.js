'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var BugSchema = new Schema({
    name: {
        type: String,
        Required: 'Kindly enter the name of the bug'
    },
    status: {
        type: [{
            type: String,
            enum: ['new', 'in_analysis', 'in_qualification', 'closed']
        }],
        default: ['new']
    },
    source: {
        type: [{
            type: String,
            enum: ['AM', 'E1', 'CONCEPTION', 'PROD', 'PREPROD']
        }],
        default: ['AM']
    }
});
/*,
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
}
);*/

module.exports = mongoose.model('MyBugs', BugSchema);