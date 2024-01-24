const { query } = require('express');
const pool = require('../../db');
const queries = require('./queries');
const res = require('express/lib/response');

const getEmployees = (req, res) => {
  pool.query(queries.getEmployees, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addEmployee = (req, res) => {
  const { team_id, name, role } = req.body;

  pool.query(
    queries.addEmployee,
    [team_id, name, role],
    (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      const newEmployee = {
        id: results.rows[0].id,
        team_id: results.rows[0].team_id,
        name: results.rows[0].name,
        role: results.rows[0].role,
      };

      console.log(newEmployee)

      res.status(201).json({
        id: results.rows[0].id,
        status: 'success',
        message: 'Employee successfully created',
        employee: newEmployee,
      });
    }
  );
};

module.exports = {
  getEmployees,
  addEmployee,
};
