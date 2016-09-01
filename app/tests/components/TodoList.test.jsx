var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render 1 todo component for each todo item', () => {
    var todos = [{
      id : 1,
      text : 'abc'
    },
    {
      id : 2,
      text : 'asd'
    }];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo)

    expect(todosComponents.length).toBe(todos.length);
  });

  it('should render empty message if no todos', () => {
    var todos = [];

    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos} />);
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container_message').length).toBe(1);
  });
});
