const getHolidays = 'SELECT * FROM holiday_types';
const getHolidayById = 'SELECT * FROM holiday_types WHERE holiday_type_id = $1';
const checkHoliday = 'SELECT s FROM holiday_types s WHERE s.holiday_name = $1';
const addHolidays =
  'INSERT INTO holiday_types (holiday_type_id, holiday_name) VALUES ($1, $2)';
const removeHoliday = 'DELETE FROM holiday_types WHERE holiday_type_id = $1';
const updateHolidayType =
  'UPDATE holiday_types SET holiday_name = $1 WHERE holiday_type_id = $2';

module.exports = {
  getHolidays,
  getHolidayById,
  checkHoliday,
  addHolidays,
  removeHoliday,
  updateHolidayType,
};
