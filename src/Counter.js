import React from 'react';
import './counter.css'

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increase(){
    if(this.state.count<100){
        this.setState({
            count:this.state.count+1   
        },()=>{
            console.log(this.state.count);
        });
    }
}
decrease(){
    if(this.state.count>1){
        this.setState({
            count:this.state.count-1   
        },()=>{
            console.log(this.state.count);
        });
    }
}
render(){
  return(
      <>
          <h1>Interactive Counter</h1>
          <p id='counter'>{this.state.count}</p>
          <div className='container'>
            <br/>
              <button onClick={()=>this.increase()}>+</button>
              <button onClick={()=>this.decrease()}>-</button>
          </div>
      </>
  );
}
}

export default Counter;