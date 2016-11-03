var redux = require('redux');

console.log('Starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', state);

  if(state.map.isFetching){
    document.getElementById('app').innerHTML = 'Loading...';
  }else if (state.map.url){
    document.getElementById('app').innerHTML = '<a href="' + state.map.url + '"target="_blank">View Your Loxation</a>';
  }
});

store.dispatch(actions.fetchLocation())

store.dispatch(actions.changeName('Shuhei'));
store.dispatch(actions.addHobby("Running"));
store.dispatch(actions.addHobby("Walking"));
store.dispatch(actions.removeHobby(1));
store.dispatch(actions.changeName('Emily'));
store.dispatch(actions.addMovie("Star Wars", "Action"));
store.dispatch(actions.addMovie("The big bang theory", "Action"));
store.dispatch(actions.removeMovie(2));

