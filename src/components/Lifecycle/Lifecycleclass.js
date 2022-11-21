import React, { Component } from 'react'

export default class Lifecycleclass extends Component {
  constructor(){
    super();
    this.state={
      name:"",
      input:""
    }
    
  }
  //Lifecycle observation
  //Three lifecycle phases
  //Mounting,unmounting and updation
  componentDidMount(){
    console.log("The component mounted......")
  }      //gets called only once
  componentDidUpdate(){
    console.log("The component updated......")
  }
  componentWillUnmount(){
    console.log("Component will unmount......")
  }
  handleclick=()=>{
    this.setState({...this.state.name,name:"johnny"})
  }
  handlechange=(event)=>{
    this.setState({...this.state,input:event.target.value})
  }
  render() {
    return (
      <div>
        <h1>Lifecycleclass</h1>
        <button onClick={this.handleclick}>
          Click Me
        </button>
        <input onChange={this.handlechange}></input>
        {this.state.name};
        {this.state.input}
      </div>
    )
  }
}
