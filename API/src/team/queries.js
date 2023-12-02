const getTeamMembers =
  'SELECT * FROM holiday.user_infos ui inner join holiday.holidays h on ui.user_id = h.user_id  where team_id = $1';
const getAllMembers = 'SELECT * FROM holiday.user_infos';
const addTeamMember = 'UPDATE holiday.user_infos set team_id = $1 where user_id = $2'


module.exports ={
    getTeamMembers,
    getAllMembers,
    addTeamMember
};
