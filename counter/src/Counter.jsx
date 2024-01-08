//class components
import React, { Component } from 'react'

export default class Counter extends Component {
  constructor(props) {
    super(props)
  
    this.state = {count:0}
  }
  
  handleClick=(val)=>{
    this.setState({count:this.state.count+val})
  }
  
  
    render() {
    return (
      <div>
        <h1>COUNTER APP</h1>
        <h1>{this.state.count}</h1>
        <button onClick={()=>{this.handleClick(1)}}> + </button>
        <button onClick={()=>{this.handleClick(-1)}}> - </button>
        <button onClick={()=>{this.handleClick(-this.state.count)}}> Reset </button>
      </div>
    )
  }
}
