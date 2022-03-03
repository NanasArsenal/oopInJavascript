//event listener
document.getElementById('nameform').addEventListener('submit', function(e){
    const name=  document.getElementById('name').value;
    const age = document.getElementById('age').value ;

    const person = new Person(name,age);



    //ui update 
    const ui = new UI();
    ui.addPersontobody(person);


    e.preventDefault();

})


class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    
       
    }


    
}


class UI{
    addPersontobody(person){
        const body = document.body;

        //create h1 element
        const describePerson = document.createElement('h1');
        describePerson.innerText = `${person.name}  ${person.age}`;

        console.log(describePerson)

        body.appendChild(describePerson);
    }
}
