var expect = require('expect');
var deepFreeze = require('deep-freeze-strict');

var reducers = require('reducers');

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
        type : 'SET_SEARCH_TEXT',
        searchText : 'text'
      };

      var res = reducers.searchTextReducer(deepFreeze(''), deepFreeze(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should toggle showCompleted', () => {
      var action = {
        type : 'TOGGLE_SHOW_COMPLETED',
      };

      var res = reducers.showCompletedReducer(deepFreeze(false), deepFreeze(action));

      expect(res).toBe(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var todo = {
        id : 1,
        text : 'any',
        completed : false,
        completedAt : undefined,
        createdAt : 123
      };
      var action = {
        type : 'ADD_TODO',
        todo
      };

      var res = reducers.todosReducer(deepFreeze([]), deepFreeze(action));

      expect(res.length).toBe(1);
      expect(res[0].text).toEqual(action.todo.text);
    });

    it('should add existing todos', () => {
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

      var res = reducers.todosReducer(deepFreeze([]), deepFreeze(action));

      expect(res.length).toBe(1);
      expect(res[0]).toEqual(todos[0]);
    });

    it('should toggle todo', () => {
      var todos = [
        {
          id : 1,
          text : 'Walk',
          completed : true,
          createdAt : 123,
          completedAt : 125
        }
      ];

      var action = {
        type : 'TOGGLE_TODO',
        id : 1
      };

      var res = reducers.todosReducer(deepFreeze(todos), deepFreeze(action));

      expect(res[0].completed).toBe(false);
      expect(res[0].completedAt).toNotExist();
    });
  });
});
