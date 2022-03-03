class TodoTask{
    constructor(todoinput,deadline){
        this.todoinput= todoinput;
        this.deadline = new Date(deadline);
        };

}  


class UI{
        addTodoTask(todotask){
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

        clearFields(){
            document.getElementById('todo-input').value = '';
            document.getElementById('deadline').value = '';
        }

        deleteTasks(target){
            if(target.className === 'delete'){
                target.parentElement.parentElement.remove();
            }
        }



        showAlert(message , className){

            const alert = document.createElement('div');
        
            alert.className = `alert ${className}`;
        
        
            alert.appendChild(document.createTextNode(message));
        
        
            //Get the parent which is the container to display inside of it 
            const container = document.querySelector('.container');
            const form = document.getElementById('todo-form');
        
            container.insertBefore(alert,form);
            // Time out 
            setTimeout(function(){
                document.querySelector('.alert').remove();
            }, 2000);
        
        }




    
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

///validate
    if(atodoinput=== '' || deadline === ''){
        ui.showAlert('fill all fields', 'error')
    }else{

    ui.addTodoTask(todotask);

    ui.clearFields();

    ui.showAlert('task has been added successfully' , 'success');

    }

    e.preventDefault();
})



///delete task event listener
document.getElementById('todo-list').addEventListener('click',
function(e){
    //instantiate the UI CONTRUCTOR
    const delUI = new UI();

    delUI.deleteTasks(e.target)
    e.preventDefault()
})


