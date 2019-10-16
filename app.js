var todoList = {
  todos: [],
  displayTodos: function () {
    
    if (this.todos.length === 0) {
      console.log('My todos are empty');
    }
    else {
      console.log('My todos:');
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
        console.log('(x)', this.todos[i].todoText)
        }
        else{
          console.log('()', this.todos[i].todoText)
        }
      }
    }
  },

  addTodo: function (todoText) {
    
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();

  },
  changeTodo: function (postion, todoText) {
    this.todos[postion].todoText = todotext;
    this.displayTodos;
  },
  deleteTodo: function (postion) {
    this.todos.splice(postion, 1);
    this.displayTodos();
  },
  toggleCompleted: function (postion) {
    var todo = this.todos[postion];
    todo.completed = !todo.completed
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    // Get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    // Case 1: om allt är ture, gör allt false.
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++){
        this.todos[i].completed = false;
      }
    }
    // Case 2: gör allt sann
    else{
      for(var i = 0; i < totalTodos; i++){
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }


};

var displayTodosButton = document.getElementById('displayTodosButton');


displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos();
});

var toggleAllButton = document.getElementById('toggleAllButton')


toggleAllButton.addEventListener('click', function(){
  todoList.toggleAll();
});
