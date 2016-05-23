module.exports = exports = function(app) {
  require('./bookListDirective')(app);
  require('./bookDirective')(app);
};
