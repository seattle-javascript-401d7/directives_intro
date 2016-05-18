module.exports = function(app) {
  require('./player_directive')(app);
  require('./team_directive')(app);
};
