
module.exports = function(app) {
  require('./cookie_directive')(app);
  require('./cookie_item_directive')(app);
};
