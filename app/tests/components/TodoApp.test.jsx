var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo item to the todos state handleAddTodo', () => {
    var text = 'test text';

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({
      todos : []
    });

    todoApp.handleAddTodo(text);

    expect(todoApp.state.todos.length).toBe(1);
    expect(todoApp.state.todos[0].text).toBe(text);
  });

  it('should toggle completed value when handleToggle called', () => {
    var todo = {
      id :1,
      text : 'test',
      completed : false
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({
      todos : [todo]
    });

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(1);
    expect(todoApp.state.todos[0].completed).toBe(true);

  });
});
