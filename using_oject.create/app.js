
const personPrototypes = {
    greeting: function(){
        return `Hello ${this.firstName}`;
    }
}


//create an object from the person prototype

const mary1 = Object.create(personPrototypes);

mary1.firstName= 'Mary';


console.log(mary1.greeting())