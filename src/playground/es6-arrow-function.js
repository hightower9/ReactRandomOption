const square = function(x) {  //es5 function
   return x*x;
};

//es6 arrow function

// const squareArrow = (x) =>{
//     return x * x;
// };

// const squareArrow = (x) => x * x;

// console.log(squareArrow(8));

//challenge
const name = 'mike smith';

// const getFirstName = (name) => {
//     return name.split(" ")[0];
// };

const getFirstName = (name) => name.split(" ")[0];
;

console.log(getFirstName(name));