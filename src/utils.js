console.log('utils.js is running');

const square = (x) => x*x;

const add = (a,b) => a+b;

const sub = (a,b) => a-b;
 
// export default (a,b) => a-b;   default  inline
// default export can have any name in app.js

// or
// const sub = (a,b) => a-b;
// export default sub; 


//named export
export { square /*,  add*/ , sub as default};