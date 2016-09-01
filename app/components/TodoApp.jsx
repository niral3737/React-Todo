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
          text : 'Walk dog',
          completed : false
        },
        {
          id : uuid(),
          text : 'Clean room',
          completed : true
        },
        {
          id : uuid(),
          text : 'Read Book',
          completed : false
        },
        {
          id : uuid(),
          text : 'Go to Market',
          completed : false
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
          text : text,
          completed : false
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
  handleToggle : function (id) {
    var updatedTodos = this.state.todos.map( (todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    });

    this.setState({
      todos : updatedTodos
    });
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <h1>Todo App</h1>
        <TodoSearch onSearch={this.handleSearch} />
        <TodoList todos={todos} onToggle={this.handleToggle}/>
        <AddTodo onAddTodo={this.handleAddTodo} />
      </div>
    );
  }
});

module.exports = TodoApp;
