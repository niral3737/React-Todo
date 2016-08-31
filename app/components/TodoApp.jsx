var React = require('react');
var TodoList = require('TodoList');

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
      ]
    };
  },
  render: function() {
    var {todos} = this.state;
    return (
      <div>
        <h1>Todo App</h1>
        <TodoList todos={todos} />
      </div>
    );
  }
});

module.exports = TodoApp;
