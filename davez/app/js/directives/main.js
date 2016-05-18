module.exports = function(app) {
  require('./item')(app);
  require('./list')(app);
  require('./todo')(app);
};
