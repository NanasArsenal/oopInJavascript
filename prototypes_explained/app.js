//object prototype
//person prototype


//person constructor

function Person(firstname,lastName, dob){
    this.firstname= firstname;
    this.lastName= lastName;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
      const diff = Date.now()-this.birthday.getFullYear();
      const ageDate = new Date(diff);
      const year = ageDate.getUTCFullYear()-this.birthday.getFullYear();
      return Math.abs(year)
    }
}


const john = new Person('john','doe','8-12-1990')

console.log(john.calculateAge());