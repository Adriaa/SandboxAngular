'use strict';
module.exports = function (app) {
    var todoList = require('../controllers/todoListControllers');


    // todoList Routes
    app.route('/bugs')
        .get(todoList.list_all_bugs)
        .post(todoList.create_a_bug);


    app.route('/bugss/:bugId')
        .get(todoList.read_a_bug)
        .put(todoList.update_a_bug)
        .delete(todoList.delete_a_bug);
};