var redux = require('redux');

console.log('Starting redux example');

var nameReducer = (state = 'Anonymous', action) => {
  switch(action.type){
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state
  }
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};

var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state
  }
};

var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};

var nextMovieId = 1;
var moviesReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_MOVIE':
      return[
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id)
    default:
      return state
  }
};

var addMovie = (title, genre) => {
  return{
    type: 'ADD_MOVIE',
    title,
    genre
  }
};

var removeMovie = (id) => {
  return{
    type: 'REMOVE_HOBBY',
    id
  }
};

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

var store = redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;

  console.log('New state', state)
});
// unsubscribe();

store.dispatch(changeName('Shuhei'));
store.dispatch(addHobby("Running"));
store.dispatch(addHobby("Walking"));
store.dispatch(removeHobby(1));
store.dispatch(changeName('Emily'));
store.dispatch(addMovie("Star Wars","Action"));
store.dispatch(addMovie("The big bang theory", "Action"));
store.dispatch(removeMovie(2));

