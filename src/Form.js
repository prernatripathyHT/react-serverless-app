import React, { Component } from 'react';
import axios from 'axios';

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const inputValue = event.target.value;
    const stateField = event.target.name;
    this.setState({
      [stateField]: inputValue,
    });
    console.log(this.state);
  }
  async handleSubmit(event) {
    event.preventDefault();
    const { name, message } = this.state;
    await axios.post(
      'https://r04tpk7ag5.execute-api.ap-south-1.amazonaws.com/default/',
      { key1: `${name}, ${message}` }
    ).then(function(res){
      console.log("response: ", res);
      if(res.status == 200){
        alert("Thankyou! Your data is submitted.")
      }
    });
  }

  render() {
    return (
      <div>
        <h4>Hello from github</h4>
        <form onSubmit={this.handleSubmit} className="form">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />

          <label>Message:</label>
          <input
            type="text"
            name="message"
            onChange={this.handleChange}
            value={this.state.message}
          />

          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
