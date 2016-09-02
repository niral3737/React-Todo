var expect = require('expect');

var actions = require('actions');

describe('actions', () => {

  it('should generate set text action', () => {
    var action = {
      type : 'SET_SEARCH_TEXT',
      searchText : 'some search text'
    };

    var response = actions.setSearchText(action.searchText);

    expect(response).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type : 'ADD_TODO',
      text : 'some text'
    };

    var response = actions.addTodo(action.text);

    expect(response).toEqual(action);
  });

  it('should generate add todo action', () => {
    var todos= [
      {
        id : 1,
        text : 'any',
        completed : false,
        completedAt : undefined,
        createdAt : 123
      }
    ];
    var action = {
      type : 'ADD_TODOS',
      todos : todos
    };

    var response = actions.addTodos(action.todos);

    expect(response).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type : 'TOGGLE_SHOW_COMPLETED'
    };

    var response = actions.toggleShowCompleted();

    expect(response).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = {
      type : 'TOGGLE_TODO',
      id : 1
    };

    var response = actions.toggleTodo(action.id);

    expect(response).toEqual(action);
  });
});
