'use strict';

var mongoose = require('mongoose'),
    Bug = mongoose.model('Bugs');

exports.list_all_bugs = function (req, res) {
    bug.find({}, function (err, bug) {
        if (err)
            res.send(err);
        res.json(bug);
    });
};

exports.create_a_bug = function (req, res) {
    var new_bug = new bug(req.body);
    new_bug.save(function (err, bug) {
        if (err)
            res.send(err);
        res.json(bug);
    });
};


exports.read_a_bug = function (req, res) {
    bug.findById(req.params.bugId, function (err, bug) {
        if (err)
            res.send(err);
        res.json(bug);
    });
};


exports.update_a_bug = function (req, res) {
    bug.findOneAndUpdate({
        _id: req.params.bugId
    }, req.body, {
        new: true
    }, function (err, bug) {
        if (err)
            res.send(err);
        res.json(bug);
    });
};


exports.delete_a_bug = function (req, res) {


    bug.remove({
        _id: req.params.bugId
    }, function (err, bug) {
        if (err)
            res.send(err);
        res.json({
            message: 'bug successfully deleted'
        });
    });
};