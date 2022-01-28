//Book Constructor
function  Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn ;
}


//UI Constructor
function UI(){}

// ADD BOOK TO LIST  
UI.prototype.addBookList = function(thebook){
    console.log(thebook);
}



//Events listeners
document.getElementById('book-form').addEventListener('submit',

 function(e){
   //get form fields
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;  

    //Creating a instance of the Book constructor 
    const a_book = new Book(title,author,isbn);

    //Creating an instance of the UI constructor
    const ui = new UI();

    //adding book to the list
    ui.addBookList(a_book)



    e.preventDefault();
})