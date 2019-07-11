class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne=this.handleAddOne.bind(this);
        this.handleMinusOne=this.handleMinusOne.bind(this);
        this.handleReset=this.handleReset.bind(this);
        this.state = {
            count: 0,
        };
    }

    componentDidMount(){
        try{
          const json = localStorage.getItem('count');
          const count = parseInt(json,10);
    
          if(!isNaN(count)){
            this.setState(() => ({ count }));
          }
        }
        catch(e){
    //do nothing at all
        }
        
      }
      
      componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
          localStorage.setItem('count',this.state.count);
          console.log("Saving Data");
        }
      }

    handleAddOne(){
        this.setState((prevState) => {
            return{
                count:prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return{
                count:prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState(() => {   //setState is asynchronous
            return{
                count:0
            };
        });
    }
    render()
    {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

// Counter.defaultProps = {
//     count:0,
// };

ReactDOM.render(<Counter />,document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderConterApp();
// };

// const minusOne = () => {
//     count--;
//     renderConterApp();
// };

// const reset = () => {
//     count = 0;
//     renderConterApp();
// };

// const appRoot = document.getElementById('app');

// const renderConterApp = () => {
//     const templateTwo = (
//         <div>
//         <h1>Count :{count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//         </div>
//      );

//      ReactDOM.render(templateTwo, appRoot);
// };

// renderConterApp();