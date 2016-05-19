module.exports = function(app) {
  require('./task_item_directive')(app);
  require('./task_create_directive')(app);
  require('./task_list_directive')(app);
};
