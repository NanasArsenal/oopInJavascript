


//agecalculator constructor

function getAge(dob){
  this.birthday = new Date(dob);

  this.calculateAge= function(){
      const diff = Date.now()-this.birthday.getFullYear();
      const ageDate = new Date(diff);
      const year = ageDate.getUTCFullYear()-this.birthday.getFullYear();
      return Math.abs(year)

    }
}

 const kwekusAge= new getAge('09-12-2004')

 console.log(kwekusAge.calculateAge());


 //getting ui values

 const form = document.querySelector('.age-form'),
       dateofbirth = document.querySelector('.dateofbirth'),
       checkageBtn = document.querySelector('.check-age'),
       ageUi= document.querySelector('.age');

form.addEventListener('submit',function(e){

  const userage=new getAge(dateofbirth.value);
  ageUi.value= userage.calculateAge();
  e.preventDefault();
});


       

