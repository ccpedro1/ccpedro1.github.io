const todoInput = document.getElementById('todoInput');
const todoForm = document.getElementById('todoForm');
const addItem = document.getElementById('add');
const list = document.getElementById('list');
const listItem = document.getElementById('list-item');
const items = document.getElementById('items');


const todoData = JSON.parse(localStorage.getItem('todos')) || [];


//Iterate over each element of todolist from localStorage and show the list 
function render(){
    todoData.forEach((todo) =>{
        //Create a element li to insert the item
        const li = document.createElement('li');
    
        //Insert the value passed by the user 
        li.classList.add("list-item");
        li.setAttribute('id', todo.id);
        li.innerHTML = `<input class="completed" type="checkbox"><label>${todo.description}</label><i class="fas fa-times-circle"></i>`;
    
        //Insert the new element in the list
        list.appendChild(li);
    })
    items.innerHTML = todoData.length;

}
render();

const removeButtons = document.querySelectorAll('i');
const completed = document.querySelectorAll('.completed');
const itemsTotal = todoData.length;


todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    add(todoInput.value);
    //Clear the value passed by the user
    todoInput.value = "";
});

function add(item) {
    //Insert the new element in the todos array
    let obj = {
        id: todoData.length > 0 ? todoData[todoData.length - 1].id + 1 : 1,
        description: item,
        completed: false
    };
    todoData.push(obj);

    //Create a element li to insert the item
    const li = document.createElement('li');

    //Insert the value passed by the user 
    li.classList.add("list-item");
    li.setAttribute('id', obj.id);
    li.innerHTML = `<input class="completed" type="checkbox"><label>${item}</label><i class="fas fa-times-circle"></i>`;

    //Insert the new element in the list
    list.appendChild(li);
    
    //Update the list in localStorage
    localStorage.setItem('todos', JSON.stringify(todoData));

    items.innerHTML = todoData.length;
}
//Function to remove items from DOM and to localStorage
 removeButtons.forEach( element =>{
        element.addEventListener('click', e => {

            //Identify the item and remove from the array todoData
            itemToRemove = e.target.parentElement.id;
            todoData.splice(itemToRemove, 1);

            //Remove the item from the DOM
            e.target.parentElement.remove();


            //Update the todolist(todos) in localStorage
            localStorage.setItem('todos', JSON.stringify(todoData));

            items.innerHTML = todoData.length;
        })
    })
