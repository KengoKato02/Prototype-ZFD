const { query } = require('express');
const pool = require('../../db');
const queries = require('./queries');
const res = require('express/lib/response');

const getTeamMembers = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getTeamMembers, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getAllMembers = (req, res) => {
  pool.query(queries.getAllMembers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

module.exports = {
  getTeamMembers,
  getAllMembers,
};
