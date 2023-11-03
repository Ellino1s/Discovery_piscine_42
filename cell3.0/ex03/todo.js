// Function to create a new TO-DO
function createToDo() {
    const todoText = prompt("Enter a new TO-DO:");
    if (todoText) {
      const todoDiv = document.createElement("div");
      todoDiv.textContent = todoText;
      todoDiv.addEventListener("click", removeToDo);
      document.getElementById("ft_list").prepend(todoDiv);
      saveToCookie();
    }
  }
  
  // Function to remove a TO-DO
  function removeToDo() {
    const shouldRemove = confirm("Do you want to remove this TO-DO?");
    if (shouldRemove) {
      this.remove();
      saveToCookie();
    }
  }
  
  // Function to save the TO-DOs as cookies
  function saveToCookie() {
    const todos = [];
    const todoElements = document.querySelectorAll("#ft_list > div");
    for (const todo of todoElements) {
      todos.push(todo.textContent);
    }
    const todoListString = JSON.stringify(todos);
    document.cookie = `todoList=${todoListString}`;
  }
  
  // Function to load TO-DOs from cookies
  function loadFromCookie() {
    const cookieValue = document.cookie.replace(
      /(?:(?:^|.*;\s*)todoList\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    if (cookieValue) {
      const todos = JSON.parse(cookieValue);
      for (const todoText of todos) {
        const todoDiv = document.createElement("div");
        todoDiv.textContent = todoText;
        todoDiv.addEventListener("click", removeToDo);
        document.getElementById("ft_list").prepend(todoDiv);
      }
    }
  }
  
  // Attach event listeners
  document.getElementById("newButton").addEventListener("click", createToDo);
  
  // Load TO-DOs from cookies when the page loads
  loadFromCookie();