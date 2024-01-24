const { query } = require('express');
const pool = require('../../db');
const queries = require('./queries');
const res = require('express/lib/response');

const getEmployees = (req, res) => {
 console.log('called');
  pool.query(queries.getEmployees, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getEmployees,
};
