const getHolidays = 'SELECT * FROM holidays';
const getHolidayById = 'SELECT * FROM holidays WHERE user_id = $1';
const getHolidayTypeByID =
  'SELECT * FROM holiday_types WHERE holiday_type_id = $1';
const checkHoliday = 'SELECT s FROM holiday_types s WHERE s.holiday_name = $1';
const addHolidays =
  'INSERT INTO holidays (start_date, end_date, description, employee_id) VALUES ($1, $2, $3, $4)';
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
