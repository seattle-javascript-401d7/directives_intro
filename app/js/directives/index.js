module.exports = function(app) {
  require('./dummy_directive.js')(app);
  require('./make_item_directive.js')(app);
  require('./make_list_directive.js')(app);
};
