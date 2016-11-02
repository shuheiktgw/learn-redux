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

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
  var state = store.getState();

  console.log('searchText is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

console.log('Current State ', store.getState());

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Why do we live?'
});

store.dispatch({
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Why do we die?'
});
