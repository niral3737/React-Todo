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
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todo = {
      id :1,
      text : 'test',
      completed : false,
      createdAt : 0,
      completedAt : undefined
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({
      todos : [todo]
    });

    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(1);
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should remove completedAt value toggled from completed to incomplete', () => {
    var todo = {
      id :1,
      text : 'test',
      completed : true,
      createdAt : 0,
      completedAt : 9
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState({
      todos : [todo]
    });

    todoApp.handleToggle(1);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotExist();

  });
});
