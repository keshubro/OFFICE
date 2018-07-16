import React, { Component } from 'react';
import './centered.css';
import Cookies from 'universal-cookie';

class SignUp extends Component
{

    constructor()
    {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            name: '',
            email: '',
            sevlevel: 0,
            cookies: new Cookies
        }
    }

    

    handleChange(event)
    {
        console.log("NAME: " + this.state.name);
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
        
    }

    handleSubmit(event)
    {
        console.log(this.state.name);
        console.log("in submit");

        var url = 'http://203.17.194.45/eventApp/users';
        var data = {"name": 'keshav'};
        
        fetch(url, {
          method: 'PUT', // or 'POST'
          body: JSON.stringify(data), // data can be `string` or {object}!
          headers:{
            'Content-Type': 'application/json'
          }
        }).then(res => console.log(res.json()))
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
       
    }

    render()
    {
        
        return(
            
            <form onSubmit={this.handleSubmit} className = "centered_div">
                <label>
                    Name:
                    <input type="text" value={this.state.value} name = "name" onChange={this.handleChange}/>
                </label>
                <br/>
                <label>
                    Email:
                    <input type="email" value={this.state.email} name = "email" onChange={this.handleChange}/>
                </label>
                <br/>
                <div  className = "sev_div">
                <label>
                    Severity Access Level:
                    <input type="number" value={this.state.value} name = "sevlevel" onChange={this.handleChange}/>
                </label>
                </div>
                <br/>
                    <input type="submit" value="Submit" />
        
            </form>

          );
          
    }
}

export default SignUp;