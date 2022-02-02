//TodoTask  constructor
function TodoTask(todoinput,deadline){
    this.todoinput= todoinput;
    this.deadline = new Date(deadline);
}


//UI constructor
function UI(){}

UI.prototype.addTodoTask = function(todotask){
    //get tablebody
    const todolist = document.getElementById('todo-list');
    ///
    const tablerow = document.createElement('tr');

    tablerow.innerHTML = `
        <td>${todotask.todoinput}</td>
        <td>${todotask.deadline}</td>
         <td><a href="#" class="delete">X</a></td>
        
    `;

    todolist.appendChild(tablerow);
}





//event Listener
document.getElementById('todo-form').addEventListener('submit',function(e){
    //get form field 
    const atodoinput = document.getElementById('todo-input').value;
    const deadline = document.getElementById('deadline').value;

    //create instance of TodoTask
    const todotask =new TodoTask(atodoinput,deadline);

    console.log(todotask);

    //create instance of UI cinstructor 
    const ui = new UI();

    ui.addTodoTask(todotask);


    e.preventDefault()
})