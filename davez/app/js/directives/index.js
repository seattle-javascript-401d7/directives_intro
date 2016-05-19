module.exports = function(app) {
  require('./stuff_directive')(app);
  require('./stuff_item_directive')(app);
  require('./stuff_list_directive')(app);
};
