var expect = require('expect');
import configureMockStore  from 'redux-mock-store';
import thunk from 'redux-thunk';

var actions = require('actions');


var createMockStore = configureMockStore([thunk]);
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
      todo : {
        id : 1,
        text : 'Somthing',
        completed : false,
        createdAt : 1334
      }
    };

    var response = actions.addTodo(action.todo);

    expect(response).toEqual(action);
  });

  it('should create todo and dispatch addTodo action', (done) => {
    const store = createMockStore({});
    const text = 'somey';

    store.dispatch(actions.startAddTodo(text)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toInclude({
        type : 'ADD_TODO'
      });
      expect(actions[0].todo).toInclude({
        text : text
      });
      done();
    }).catch(done);
  });

  it('should generate add todos action', () => {
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
