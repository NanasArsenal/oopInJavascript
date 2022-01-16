//person constructor

function Person(firstName,lastName){
    this.myfirstName = firstName;
    this.mylastName  = lastName;
}

//greeting prototype

Person.prototype.greeting = function(){
    return `Hi ${this.myfirstName}`
};

const pete = new Person('Pete','Davidson');


console.log(pete.greeting());


//contructor for a customer

function Customer(firstName,lastName, phone , membership ){
    Person.call(this,firstName,lastName);

    this.phone =phone;
    this.membership = membership;
}