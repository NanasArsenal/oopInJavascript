//object prototype
//person.prototype


//person constructor

function Person(firstname,lastname,dob){
  this.fname = firstname;
  this.lname = lastname ;
  this.dateOfBirth = new  Date(dob);
}

const kobby=  new Person('Ransford','Sasu', '6-3-1998')
//Calculate age 
 Person.prototype.calculateAge= function(){
  const diff = Date.now()-this.dateOfBirth.getFullYear();
    const ageDate = new Date(diff);
   const year = ageDate.getUTCFullYear()-this.dateOfBirth.getFullYear();
   return Math.abs(year)
 };


console.log(kobby.calculateAge());
