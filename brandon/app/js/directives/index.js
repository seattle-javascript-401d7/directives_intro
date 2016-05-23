module.exports = function(app) {
  require('./task_item_directive.js')(app);
  require('./task_list_directive.js')(app);
};
