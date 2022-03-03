//create book constructor
function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}


//create a constructor for UI changes
function UI(){}

//Add book to List
UI.prototype.addBooktoList = function(book){
    //get list
    const list = document.getElementById('book-list')

    //create table row
    const tablerow = document.createElement('tr');

    tablerow.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>
    
    `;

    list.appendChild(tablerow);
        
}


UI.prototype.clearFields = function (){
     document.getElementById('title').value ='';
     document.getElementById('author').value= '';
     document.getElementById('isbn').value = '';

}

// Show Alert
UI.prototype.showAlert = function(message , className){
    //Create div
    const div = document.createElement('div');
    

    //Add classes
    div.className = `alert ${className}`;

    //add text
    div.appendChild(document.createTextNode(message));
   

    //Get the parent which is the container to display inside of it 
    const container = document.querySelector('.container');
    const form = document.getElementById('book-form');

    container.insertBefore(div,form);
    // Time out 
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 2000);
}






// Delete book from list method

UI.prototype.deleteBook= function(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
}

//Event listeners for submit

    document.getElementById('book-form').addEventListener('submit',
        function(e){
            //get values from the form by creating variables

            const title = document.getElementById('title').value;
            const author = document.getElementById('author').value;
            const isbn = document.getElementById('isbn').value;

            //create book instance and put the values from the table init
            const book = new Book(title,author,isbn);

            //create instabce of Ui
            const ui = new UI();

            //Validate
            if(title === ' ' || author === '' || isbn === ''){
            ui.showAlert('Please fill in all fields' , 'error');
            } else{
                //Add book to List
                ui.addBooktoList(book);

                //clear fields
                ui.clearFields(); 

                ui.showAlert('Success', 'success')
            }

            //remove book from list


            e.preventDefault();
        });

        //Event listner for delete

        document.getElementById('book-list').addEventListener('click',
        function(e){
            //instantiate Ui
            const ui = new UI();


            //deleting book
            ui.deleteBook(e.target);


            ui.showAlert('Successfully deleted', 'success')

            e.preventDefault(); 
        })
       