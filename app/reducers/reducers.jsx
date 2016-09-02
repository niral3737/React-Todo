var uuid = require('node-uuid');
var moment = require('moment');

export var searchTextReducer = (state = '', action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return action.searchText;

    default:
      return state;
  }
};

export var showCompletedReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_SHOW_COMPLETED':
      return !state

    default:
      return state;
  }
};

export var todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id : uuid(),
        text : action.text,
        completed : false,
        createdAt : moment().unix(),
        completedAt : undefined
      }];

    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if(action.id === todo.id){

          return {
            ...todo,
            completed : !todo.completed,
            completedAt : !todo.completed ? moment().unix() : undefined
          };
          // todo.completed : !todo.completed;
          // if(todo.completed){
          //   todo.completedAt = moment().unix();
          // }else{
          //   todo.completedAt = undefined;
          // }
        }
      });
    default:
      return state;
  }
}
