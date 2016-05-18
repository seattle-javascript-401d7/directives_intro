module.exports = function(app) {
  require('./shopping_item_directive.js')(app);
  require('./shopping_list_directive.js')(app);
};

// order matters
