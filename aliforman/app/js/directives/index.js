module.exports = function(app) {
  require('./todo_directive')(app);
  require('./todo_item_directive')(app);
  require('./todo_list_directive')(app);
};
