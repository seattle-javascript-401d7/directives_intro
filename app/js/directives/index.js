module.exports = function(app) {
  require('./dummy_directive')(app);
  require('./make_item_directive')(app);
  require('./make_list_directive')(app);
};
