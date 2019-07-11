// // // import './utils.js'
// // import subt,{ square, add } from './utils.js';
// // import { isAdult, canDrink } from './person.js';

// // console.log('app.js is running!!!!!!!!!!!!!!!!!!!!!!!!!!');
// // console.log(square(4));
// // // console.log(add(4,6));
// // console.log(subt(6,2));
// // console.log(isAdult(20));
// // console.log(canDrink(20));

// import validator from 'validator';

// console.log(validator.isEmail('test@gmail.com'));

import React from 'react';
import ReactDOM from 'react-dom';

import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));

//  class OldSyntax {
//      constructor(){
//          this.name = 'Mike';
//          this.getGreeting = this.getGreeting.bind(this);
//      }
//      getGreeting()
//      {
//          return `Hi. Im ${this.name}`;
//      }
//  }

//  const oldSyntax = new OldSyntax();
//  const getGreeting = oldSyntax.getGreeting;

// console.log(getGreeting());

// class NewSyntax {
//     name = 'Jen';
//     getGreeting = () =>{
//         return `Hi. Im ${this.name}`;
//     }
// }

// const newSyntax = new NewSyntax();
// const getGreeting1 = newSyntax.getGreeting;
// console.log(getGreeting1());