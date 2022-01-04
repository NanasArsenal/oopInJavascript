//strings

const name1 ='Jeff';

const name2 = new String('jeff');

console.log(typeof(names));

if(name2 == 'jeff'){
    console.log('yes')
}else{
    console.log('No')
}

// const people = ['Ben','Dave','Sheriff'];
// const int = Math.floor(Math.random()*3);


// if(people[int]=== 'Ben'){
//     console.log(`Hi ${people[int]}`);
// }else{
//     console.log('Ow')
// }


//number 
const num1 = 5;
const num2 = new Number(5);

console.log(num2);


//boolean
const bool1 = true;
const bool2 = new Boolean(false);

console.log(typeof bool2);


//function

const getSum1 = function(x,y){
    return x+y;
}//normal way

const getSum2 = new Function('x','y','return 1+1'); //wierd way 

console.log(typeof getSum1())

///object

const john1 = {names:'John'};
const john2 = new Object({names: 'John'});

console.log(typeof john2);

//arrays

const arr1 = [1,2,3,4];
const arr2 = new Array(1,2,3,4);
console.log(arr2);

//regular expressions

