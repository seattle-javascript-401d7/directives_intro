module.exports = function(app) {
  require('./todo_directive')(app);
  require('./todo_item_directive')(app);
  require('./todo_list_directive')(app);
  require('./todo_edit_directive')(app);
  require('./checkbox_directive')(app);
};
