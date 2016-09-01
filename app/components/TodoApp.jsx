var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
  getInitialState : function () {
    return {
      todos : [
        {
          id : 1,
          text : 'Walk dog'
        },
        {
          id : 2,
          text : 'Clean room'
        },
        {
          id : 3,
          text : 'Read Book'
        },
        {
          id : 4,
          text : 'Go to Market'
        }
      ],
      showCompleted : false,
      searchText : ''
    };
  },
  handleAddTodo : function (text) {
    alert(`new todo ${text}`);
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
