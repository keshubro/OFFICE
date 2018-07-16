import React, { Component } from 'react';
import './centered.css';
import Cookies from 'universal-cookie';
import First from './FirstComponent';

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

    componentDidMount()
    {
        console.log("Did Mount");
        console.log("Name : " + this.state.name);
        // this.setState({name: this.state.name, email: this.state.email, sevlevel: this.state.sevlevel});
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
        var milliseconds = (new Date).getTime();
        
        const name = this.state.name;
        this.state.cookies.set('name', this.state.name, { path: '/' });
        fetch('http://203.17.194.45/eventApp/users', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "name": this.state.name,
                "email": this.state.email,
                "createdAt": milliseconds,
                "severityAccessLevel": this.state.sevlevel,
            })
        })
        .then(results =>
            // results.json()
            console.log(results.json())
          );
         
        this.setState({done: true});
       
    }

    render()
    {
        if(this.state.done === true)
        {
            return(
                <First />
            );
        }
        
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