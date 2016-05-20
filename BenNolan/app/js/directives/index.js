module.exports = function(app) {
  require('./grocery_item_directive')(app);
  require('./grocery_list_directive')(app);
};
