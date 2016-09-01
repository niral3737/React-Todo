var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');
var uuid = require('node-uuid');

var TodoApp = React.createClass({
  getInitialState : function () {
    return {
      todos : [
        {
          id : uuid(),
          text : 'Walk dog'
        },
        {
          id : uuid(),
          text : 'Clean room'
        },
        {
          id : uuid(),
          text : 'Read Book'
        },
        {
          id : uuid(),
          text : 'Go to Market'
        }
      ],
      showCompleted : false,
      searchText : ''
    };
  },
  handleAddTodo : function (text) {
    this.setState({
      todos : [
        ...this.state.todos,
        {
          id : uuid(),
          text : text
        }
      ]
    });
  },
  handleSearch : function (showCompleted, searchText) {
    this.setState({
      showCompleted : showCompleted,
      searchText : searchText.toLowerCase()
    });
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <h1>Todo App</h1>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} />
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
