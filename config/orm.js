// Requires MySQL connection config
var connection = require("../config/connection.js");

// Sets up the ORM for use in the models
var orm = {
    selectAll: function (table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, columns, values, cb) {
        var queryString = "INSERT INTO " + table;

        // Creates the query string
        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += values.map(x => "?").toString();
        queryString += ") ";

        connection.query(queryString, function(err, result) {
            if (err) {
              throw err;
            }
            cb(result);
        });
    },
    updateOne: function (table, columns, values, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        // START HERE
    }
};