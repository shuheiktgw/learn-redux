var redux = require('redux');

console.log('Starting redux example');

var reducer = (state = {name: 'Anonymous'}, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state
  }
};

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElement('app').innerHTML = stateName();
});
// unsubscribe();

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Shuhei'
});

store.dispatch({
  type: 'CHANGE_NAME',
  name: 'Emily'
});


