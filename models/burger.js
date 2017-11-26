// Requires the ORM so we can use it in the model
var orm = require("../config/orm.js");

// Code that makes the ORM burger-specific for use in our app
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(columns, values, cb) {
    orm.create("burgers", columns, values, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Exports the model for use in the controller
module.exports = burger;
