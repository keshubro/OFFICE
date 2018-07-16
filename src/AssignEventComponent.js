import React, { Component } from 'react';

class AssignEvent extends Component
{

    
    constructor()
    {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: null
        }
    }

    componentDidMount()
    {
        fetch('http://203.17.194.45/eventApp/events/all')
        .then(results =>
        results.json()
        )
        .then(data => this.setState({data: data, len: data.length}));
        console.log("TOOO");
        console.log(this.state.data);
    } 

    
    handleChange(event) {

        this.setState({value: event.target.value});
       
    }

    handleSubmit(event)
    {

    }


    render()
    {
        return(
        
            <form onSubmit={this.handleSubmit} className = "centered_div">
                <label>
                    Assign To:
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
                    <input type="submit" value="Submit" />
        
            </form>
             
        );
    }
}

export default AssignEvent;