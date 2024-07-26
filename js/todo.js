let todo_list=[];
const todoLists = document.getElementById("todo_lists");
const handleAddClick=()=>{
    const addInput= document.getElementById("todo_input");
    const todo= addInput.value;
    todo_list.push(todo);
    todoLists.innerHTML = "";
    todo_list.map((todo,index)=> todoDisplay(todo, index));
    // todoDisplay()
}

const handleRemoveClick = (index) => {
    todo_list.splice(index, 1);
    todoLists.innerHTML = "";
    todo_list.map((todo,index)=> todoDisplay(todo, index));
    // todoDisplay();
}

const todoDisplay=(todo, index)=>{

    todoLists.innerHTML +=`<div class="todo_item">${todo} </div>
                        <button class="remove_todo" onclick="handleRemoveClick(${index})">Remove</button> `;

    //const todoLists = document.getElementById("todo_lists");                    
    // todoLists.innerHTML = "";
    // todo_list.forEach((todo, index) => {
    //     const todoItem = document.createElement("div");
    //     todoItem.className = "todo_item";
    //     todoItem.innerText = todo;

    //     const removeBtn = document.createElement("button");
    //     removeBtn.className = "remove_todo";
    //     removeBtn.innerText = "Remove";
    //     removeBtn.addEventListener("click", () => handleRemoveClick(index));

    //     todoItem.appendChild(removeBtn);
    //     todoLists.appendChild(todoItem);
    // });

}
const addBtn= document.getElementById("add_todo");
addBtn.addEventListener("click",handleAddClick);

