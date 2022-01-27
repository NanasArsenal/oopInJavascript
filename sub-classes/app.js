class Person{
    constructor(fname,lname){
        this.firstName = fname;
        this.surName = lname ;

    }


    greeting(){
        return `Hello there ${this.firstName} ${this.surName}`
    }


}


class Customer extends Person{
    constructor(fname,lname, phone, membership){
        super(fname,lname);

        this.phone = phone;
        this.membership = membership;


  
    }

    getMembershipCost(){
        if(this.membership === 'premium'){
            return 'Membership cost is $550';
        }else{
            return 'Membership cost is $450'; 
        }
    }

    
}

const customer1 = new Customer('Jacob',' ELijah', '555-555-5555', 'standard');

console.log(customer1.greeting());

console.log(customer1.getMembershipCost());