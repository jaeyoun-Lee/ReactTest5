import React, { Component } from 'react'
import './App.css';
export default class App extends Component {
  state = {
    testbody : "",
  }

  handleChange =(e)=>{
    this.setState({
      [e.target.name] : e.target.value,
    });
  }

  submitId = ()=>{
    const post ={
      test : this.state.testbody,
    };
   
    fetch("http://52.78.29.221:3001/idplz", {
      method : "post", // 통신방법
      headers : {
        "content-type" : "application/json",
      },
      body : JSON.stringify(post),
    })
    .then((res)=>res.json())
    .then((json)=>{
      this.setState({
        testbody : json.text,
      });
    });
  };

  render() {
    return (
      <div>
        <input onChange={this.handleChange} name ="testbody"/>
        <button onClick = {this.submitId}>Submit 2</button>
        <h1>{this.state.testbody}</h1>
      </div>
    )
  }
}