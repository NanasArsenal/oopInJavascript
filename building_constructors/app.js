//strings

const name1 ='Jeff';

const names = new String('jeff');

names.foo ='bar';  

console.log(typeof(names));

if(name1=== 'Jeff'){
    console.log('yes')
}else{
    console.log('No')
}

const people = ['Ben','Dave','Sheriff'];
const int = Math.floor(Math.random()*3);


if(people[int]=== 'Ben'){
    console.log(`Hi ${people[int]}`);
}else{
    console.log('Ow')
}
