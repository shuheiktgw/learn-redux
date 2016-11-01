var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
  searchText: '',
  showCompleted: false,
  todos: []};

var reducer = (state = stateDefault, action) => {
  switch (action.type){
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'CHANGE_SEARCH_TEXT':
      return{
        ...state,
        searchText: action.searchText
      };
    default:
      return state
  }
};

var store = redux.createStore(reducer);

console.log('Current State ', store.getState());

var action = {
  type: 'CHANGE_NAME',
  name: 'Shuhei'
};
store.dispatch(action);

var seatchTextAction = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Why do we live?'
};
store.dispatch(seatchTextAction);

console.log('Name should be andrew', store.getState());
console.log('Search Text should be Why do we live?', store.getState());