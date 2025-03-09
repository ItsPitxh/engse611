//define everything from the document
const form = document.querySelector('form');
const todoInput = document.querySelector('#todo-input');
const addButton = document.querySelector('#add-button');
const todoList = document.querySelector('#todo-list');

let todos = [];

function addTodo() {
    

    const todoText = todoInput.value.trim();
    //check if there's value or not
    if(todoText.length > 0) {
        //define object named todo to get value from todoText
        const todo = {
            id: Date.now(), //get current time
            text: todoText,
            completed: false
        };
        //push object values into array named "todos"
        todos.push(todo);
        //remove input value
        todoInput.value = '';
        //check todos value
        console.log(todos);
        //call function
        renderTodos();
    }
    
}
//render function
function renderTodos() {
    todoList.innerHTML = '';

    //forEach array is to loop item from array without condition until the last item
    todos.forEach(todo => {
        //create html element
        const todoItem = document.createElement('li');
        todoItem.setAttribute("id", todo.id);
        const div = document.createElement('div');
        const checkBox = document.createElement('input');
        checkBox.setAttribute("type", "checkbox");
        const todoText = document.createElement('span');
        const todoDelButton = document.createElement('button');
        todoText.textContent = todo.text;
        todoDelButton.textContent = 'Delete';
        checkBox.addEventListener('click', () => toggleCompleted(todo.id))
        //call function from click event with id parameter
        todoDelButton.addEventListener('click', () => deleteTodo(todo.id));
        div.appendChild(checkBox);
        div.appendChild(todoText);
        todoItem.appendChild(div);
        todoItem.appendChild(todoDelButton);
        todoList.appendChild(todoItem);
        
    });

}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    
    renderTodos();
}

function toggleCompleted(id) {
    todoItem = document.getElementById(id);
    console.log(id);
    todos = todos.map(todo => {
        if(todo.id === id) {
            //toggle T/F back and forth
            todo.completed = !todo.completed;
        }
        
        if(todo.completed === true) {
            todoItem.classList.add('checked');
        } else {
            todoItem.classList.remove('checked');
        }
        return todo;
    });
    
}



//set default after submit
form.addEventListener('submit', event => {
    event.preventDefault(); //prevent default events such as refresh etcc.
    addTodo(); //call function
});
