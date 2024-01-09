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

const addTeamMember = (req, res) => {
  const id = parseInt(req.params.id); // this is team id
  const { user_id } = req.query; //we take user id from here
  for (let i = 0; i < req.length; i++) {
    console.log(`Object ${i + 1}:`, req[i]);
  }

  pool.query(queries.addTeamMember, [id, user_id], (error, results) => {
    if (error) throw error;
    res.status(200).send('User team updated successfully');
  });
};

module.exports = {
  getTeamMembers,
  getAllMembers,
  addTeamMember,
};
