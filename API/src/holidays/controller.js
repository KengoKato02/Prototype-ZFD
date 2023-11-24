const { query } = require('express');
const pool = require('../../db');
const queries = require('./queries');
const res = require('express/lib/response');


const getHolidays = (req, res) => {
  pool.query(queries.getHolidays, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getHolidayById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getHolidayById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addHolidays = (req, res) => {
  const { holiday_type_id, holiday_name } = req.body;

  //check if holiday_name exists
  pool.query(queries.checkHoliday, [holiday_name], (error, results) => {
    if (results.rows.length) {
      res.send('holiday already exists');
    }
    //add holiday
    pool.query(
      queries.addHolidays,
      [holiday_type_id, holiday_name],
      (error, results) => {
        if (error) throw error;
        res.status(201).send('Holiday successfully created');
      }
    );
  });
};

const removeHoliday = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getHolidayById, [id], (error, results) => {
    const noHolidayFound = !results.rows.length;
    if (noHolidayFound) {
      res.send('Holiday type with such id does not exist in database');
    }

    pool.query(queries.removeHoliday, [id], (error, results) => {
      if (error) throw error;
      res.status(200).send('Holiday type removed successfully');
    });
  });
};

const updateHolidayType = (req, res) => {
  const id = parseInt(req.params.id);
  const { holiday_name } = req.body; //update only name of holiday not his id

  pool.query(queries.getHolidayById, [id], (error, results) => {
    const noHolidayFound = !results.rows.length;
    if (noHolidayFound) {
      res.send('Holiday type with such id does not exist in database');
    }

    pool.query(
      queries.updateHolidayType,
      [holiday_name, id],
      (error, results) => {
        if (error) throw error;
        res.status(200).send('Holiday type updated successfully');
      }
    );
  });
};

module.exports = {
  getHolidays,
  getHolidayById,
  addHolidays,
  removeHoliday,
  updateHolidayType,
};
