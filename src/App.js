import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todos = [
    
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos
    };
  }

  addItem = item => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: item,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    });
  };

  removeCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(item => !item.completed)
    });
  };  
  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addItem={this.addItem} />          
        </div>
        <TodoList
          todos={this.state.todos}
          toggleComplete={this.toggleComplete}
        />
        <button className="clear-btn" onClick={this.removeCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
