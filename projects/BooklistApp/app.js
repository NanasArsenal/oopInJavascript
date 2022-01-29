//create a book constructor 

function Book(title,author,isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn ;
}

//UI CONSTRUCTOR MANAGES THE OBJECTS RESPONSIBLE FOR UI CHANGES

function UI(){}

UI.prototype.addBooktoList = function(book){
    //get booklist
    const booklist = document.getElementById('book-list');

    //create a row for abook
    const tablerow = document.createElement('tr');

    tablerow.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
    `

    booklist.appendChild(tablerow);


}



document.getElementById('book-form').addEventListener('submit',
    function(e){

        //get formfields

        const title = document.getElementById('title').value,
              author = document.getElementById('author').value,
              isbn = document.getElementById('isbn').value;


        //create an instance of the book constructor
        const book =new Book(title,author,isbn);   
        
        //create an instance of the UI constructor
        const ui = new UI;

        ui.addBooktoList(book);


        e.preventDefault();
    }
)