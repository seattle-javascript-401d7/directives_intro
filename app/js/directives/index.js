module.exports = function(app){
    require('./myItem.js')(app);
    require('./myList.js')(app);
};
