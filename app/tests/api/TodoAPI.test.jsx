var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });
  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {

    it('should set valid todos array', () => {
      var todos = [
        {
          id : 1,
          text : 'test',
          completed : false
        }
      ];

      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var todos = { a : 'b'};

      TodoAPI.setTodos(todos);

      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      expect(TodoAPI.getTodos()).toEqual([]);
    });

    it('should return todos if valid array in localStorage', () => {
      var todos = [
        {
          id : 1,
          text : 'test',
          completed : false
        }];
      localStorage.setItem('todos', JSON.stringify(todos));

      expect(TodoAPI.getTodos()).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [{
      id : 1,
      text : 'test1',
      completed : true
    },
    {
      id : 2,
      text : 'test2',
      completed : false
    },
    {
      id : 3,
      text : 'test3',
      completed : true
    }];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos.length).toBe(3);
    });
    it('should return incomplete items if showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');

      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');

      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should search by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '2');

      expect(filteredTodos[0].text).toBe('test2');
    });
  });

});
