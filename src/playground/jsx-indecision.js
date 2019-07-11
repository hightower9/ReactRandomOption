console.log('App.js is running!');

// JSX - Javascript XML


const app = {
    title:'Indecision App',
    subtitle:'Random',
    options: []
};

const onFormSubmit = (e) => {
  e.preventDefault(); // this stops the full page reload
//   console.log("hello");
  const option = e.target.elements.option.value;

  if(option)
  {
      app.options.push(option);
      e.target.elements.option.value = '';
      render();
  }
};

const onRemoveAll =() => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
         <h1>{app.title}</h1>
          {app.subtitle && <p>{app.subtitle}</p>}
          <p>{app.options.length>0 ? 'here are the options' : 'no options'}</p>
          
          <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
          <button onClick={onRemoveAll}>Remove All</button>
          {
              numbers.map((number) => {
                  return <p key={number}>Number:{number}</p>;
              })
          }
          <ol>
          {
              app.options.map((option) => {
                 return <li key={option}>{option}</li>;
              })
          }
          </ol>
          <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add Option</button>
          </form>
        </div>
        );

        ReactDOM.render(template, appRoot);
};

render();

//user object
// const user ={
//     name:'Alister',
//     age:22,
//     location:'goa'
// };

// function getLocation(location) {
//     if(location)
//     {
//         return <p>location: {location}</p>;
//     }else{
//     return 'Unkonown';
//     }
// }

// let templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'anonymous'}</h1>
//         {(user.age && user.age >= 18) && <p>age: {user.age}</p>}
        
//         {getLocation(user.location)}
//     </div>
// );
