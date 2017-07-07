'use strict';

var mongoose = require('mongoose'),
    Bug = mongoose.model('MyBugs');

exports.list_all_bugs = function (req, res) {
    //res.append('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    //header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
    Bug.find({}, function (err, bug) {
        if (err)
            res.send(err);
        var a = res.json(bug);
        console.log(a);
    });

};

exports.create_a_bug = function (req, res) {
    var new_bug = new Bug(req.body);
    console.log(new_bug);
    new_bug.save(function (err) {
        if (err)
            res.send(err);
        res.json(new_bug);
    });
};


exports.read_a_bug = function (req, res) {
    Bug.findById(req.params.bugId, function (err, bug) {
        if (err)
            res.send(err);
        res.json(bug);
    });
};


exports.update_a_bug = function (req, res) {
    Bug.findOneAndUpdate({
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
    console.log(req.body);

    Bug.remove({
        _id: req.params.bugId
    }, function (err, bug) {
        if (err) {
            console.log("there has been an issue while deleting the bug");
            res.send(err);
        } else {
            res.json({
                message: 'bug successfully deleted'
            });
        }
    });
};