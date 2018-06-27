import React, { Component } from 'react';
import Ex from './Example';
import './centered.css';
import First from './FirstComponent';
import cookie from 'react-cookies'

class Authentication extends Component
{

  constructor()
  {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
        value: null,
        data: null,
        len: null,
        valid: false,
        x: 0
    };
  }

  handleChange(event) {

 this.setState({value: event.target.value});

  }

  componentDidMount()
  {
    fetch('http://203.17.194.45/eventApp/users/all')
    .then(results =>
      results.json()
    )
    .then(data => this.setState({data: data, len: data.length}));
    console.log(this.state.data);
  }

  handleSubmit(event) {
     //alert('A name was submitted: ' + this.state.value);

     this.state.data.map((dd) =>
       dd.name === this.state.value ? this.setState({valid: true, x: 1}) : this.setState({x: 2, value: null}));
       //x=2 if invalid user, x=1 for valid, x=0 default


       }






  render()
  {

    console.log("in auth");

    //Default Button
    if(this.state.data !== null && this.state.x===0)
    {


    console.log(this.state.x);
    console.log(this.state.value);

    return(
      <form onSubmit={this.handleSubmit} className = "centered_div">
         <label>
           Name:
           <input type="text" value={this.state.value} onChange={this.handleChange}/>
         </label>

         <input type="submit" value="Submit" />

       </form>
    );
  }

  //Button after invalid input
  if(this.state.x === 2)
  {
    return(
      <div className = "centered_div">
      <form onSubmit={this.handleSubmit}>
         <label>
           Name:
           <input type="text" value={this.state.value} onChange={this.handleChange} />

         </label>
         <input type="submit" value="Submit" />
       </form>
       <p><font color="red">Not an authorized user !!</font></p>
      </div>
    );
  }

  if(this.state.data !== null && this.state.valid === true)
  {

    return(<Valid />);
  }



  return(<div>Loading</div>);
  }
}

function Valid()
{
  return(
    <div className = "centered_div"><First /></div>
  );
}




export default Authentication;
