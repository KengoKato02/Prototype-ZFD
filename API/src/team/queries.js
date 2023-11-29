const getTeamMembers =
  'SELECT * FROM holiday.user_infos ui inner join holiday.holidays h on ui.user_id = h.user_id  where team_id = $1';
const getAllMembers = 'SELECT * FROM holiday.user_infos';

module.exports = {
  getTeamMembers,
  getAllMembers,
};
