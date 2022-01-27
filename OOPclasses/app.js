class Person{
    constructor(firstName, lastName,dob){
        this.fname= firstName;
        this.lname= lastName;
        this.birthday= new Date(dob);


    }


    greeting(){
        return `Hello there ${this.fname} ${this.lname}` ;
    }

    calculateAge(){
        const diff = Date.now()-this.birthday.getFullYear();
        const ageDate = new Date(diff);
        const year = ageDate.getUTCFullYear()-this.birthday.getFullYear();
        return Math.abs(year)
  
    }

    getsMarried(lastName){
        this.lname = lastName;
    }


    //satic methods are not normal methods of a class. they cannot be called on an object rather they can be called by only the class
    static multiplyNumbers(x,y){
        return x * y ;
    }
};


const peter = new Person('peter', 'williams','11-09-1999');


console.log(peter.calculateAge());


peter.getsMarried('Oppong');


console.log(peter)

console.log(Person.multiplyNumbers(1,2))