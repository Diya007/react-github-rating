var redux = require('redux');
var createStore = redux.createStore;

var reducers = require('./reducers/index');

var store = createStore(reducers.repositoryReducer);

module.exports = store;

//在哪执行dispatch ??？ 

//store.dispatch(actions.addRepository('joe'));