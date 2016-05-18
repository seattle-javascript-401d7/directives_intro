module.exports = function(app) {
  require('./directive_one')(app);
  require('./item_directive')(app);
  require('./list_directive')(app);
};
