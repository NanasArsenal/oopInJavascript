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

const customer1 = new Customer('Douglas','Thompson','555-555-5555','Premium')

console.log(customer1);

//constructor for student

function Student(firstName,lastName,studentId,studentProgram){
    Person.call(this,firstName,lastName);

    this.studentId = studentId;
    this.studentProgram = studentProgram;

}

const sheriff = new Student('Abdul', 'Sheriff', 10661598, 'Computer Science');

console.log(sheriff);