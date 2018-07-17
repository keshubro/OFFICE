//Have to implement show less for data and assigned to
//PATH = '/details'

import React, { Component } from 'react';
import Second from './SecondComponent';
import './centered.css';
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import EventsFilter from './EventsFilterComponent';
import Checkbox from '@material-ui/core/Checkbox';
import { easing } from '@material-ui/core/styles/transitions';


class First extends Component
{


	constructor()
	{
		
		super();
		this.state = {
			data: null,
			len: null,
			cookies: new Cookies,
			events: null,
			evlen: null,
			myevents: null,
			sev: null,
			isSelected: false,
			selectedRowIds: []
		};
	}
	
	handleClick(event, id)
	{
		this.setState = ({isSelected: !this.state.isSelected});
		const key = id;
		console.log(key);
	}
	
    
    componentDidMount()
	{
		console.log("componentDidMount");
		  fetch('http://203.17.194.45/eventApp/events/all')
	    .then(results =>
	      results.json()
	    )
		.then(data => this.setState({data: data, len: data.length}));
		
		

		fetch('http://203.17.194.45/eventApp/events/typeAgg')
	    .then(results =>
	      results.json()
	    )
		.then(data => this.setState({events: data, evlen: data.length}));
		
		console.log("componentDidMount");
		  fetch('http://203.17.194.45/eventApp/events/userAgg')
	    .then(results =>
	      results.json()
	    )
		.then(data => this.setState({myevents: data}));

		
		fetch('http://203.17.194.45/eventApp/events/sevAgg')
	    .then(results =>
	      results.json()
	    )
		.then(data => this.setState({sev: data}));
    }
    
    render()
	{
		var x = -1;

		
        var name = this.state.cookies.get('name');
		
        //Variables declaration
        var keys;var extraKeys; var extraValues; var val;
        var extraDatakeys; var extraDatavalues; var extraAsskeys; var extraAssvalues;
		var valuesMapped; var ob; var ob1; var myeventscount = 0; var sevcount = 0;

		if(this.state.sev !== null){
			for(var i = 0; i<this.state.sev.length; i++)
			{
				if(this.state.sev[i].id <= this.state.cookies.get('sevlevel'))
				{
					sevcount += this.state.sev[i].count;
				}
			}
		}

		if(this.state.myevents !== null){
			for(var i = 0; i<this.state.myevents.length; i++)
			{
				if(this.state.myevents[i].id === this.state.cookies.get('name'))
				{
					console.log('yy');
					console.log(this.state.myevents[i].count);
					myeventscount = this.state.myevents[i].count;
				}
			}
		}

		
		
		if(this.state.events !== null)
        {
            console.log("Events Filter");
            console.log(this.state.events[0].id);
        }

        if(this.state.data !== null)
		{
            var dd = this.state.data.map((d) => {

				{x++};
				
                val = Object.values(d);
                keys = Object.keys(d);
                extraKeys = keys.splice(4,2);
				extraValues = val.splice(4,2);
				
				console.log("Key" + keys[0]);
				if(extraValues[0] !== null && typeof extraValues[0] === 'object'){
					
					ob = <ExtractData values = {extraValues[0]} />
				}

				else{
					ob = <div>{extraValues[0]}</div>;
				}

				if(extraValues[1] !== null && typeof extraValues[1] === 'object'){
					
					ob1 = <ExtractAss values = {extraValues[1]} />
				}

				else{
					if(extraValues[1] == null)
					{
						
							ob1 = "Assign This Event Now";
						
					}
					else
					{
					ob1 = extraValues[1];
					}
				}
              	let valuesMapped = val.map((v) =>
					
					<Convert value = {v} kk = {keys[0]} />
		
			
				);

				//If the event hasn't been assigned yet
				if(ob1 == "Assign This Event Now")
				{
					return(
						
						<TableRow  
											>
							
							{valuesMapped}
							
							<TableCell > 
								{ob}
							</TableCell>
							
							<TableCell >
								<Link to = "/assignevent">
									{ob1}
								</Link>
							</TableCell>
							<TableCell>
							<Checkbox checked={this.state.antoine}
									  onChange={this.handleChange}
									  value={x}/>
						</TableCell>
						</TableRow>
					);
				}

				//If the event has already been assigned, no need to hyperlink to "assignevent" component
				return(
						
					<TableRow  >
							  
						
						{valuesMapped}
						
						<TableCell> 
							{ob}
						</TableCell>
						
						<TableCell >
							
							{ob1}
							
						</TableCell>
						<TableCell key = {x}>
							<Checkbox checked={this.state.antoine}
									  onChange={this.handleChange}
									  value={x}/>
						</TableCell>
					</TableRow>
				);
            });
        
			{x++};

            if(this.state.cookies.get('name') == 'null')
            {
                
                return(

                    <div>You arent logged in</div>

                );

            }

            else if(this.state.cookies.get('name') != 'null' && this.state.events !== null){
				
									
				var yo = this.state.events.map((ev) => <DropdownItem tag="a" href={`/details/${ev.id}`}>{ev.id}({ev.count})</DropdownItem>);
				if(this.state.myevents !== null){
				
					}
					console.log("Yes");
					console.log(myeventscount);
                return(
					<div>

						


						<Navbar color="light" light expand="md">
							<div className="container">
							<Nav navbar>
							
							<div className = "center_div">
							<Link to = "/myevents">
								<a>Assigned To Me({myeventscount})</a>
							</Link>
							</div>
							<div className = "left_div">
							<Link to = "/severityevents">
								<a>Filter By Severity ({sevcount})</a>
							</Link>
							</div>
							
							
								<UncontrolledDropdown setActiveFromChild direction = "left" className = "right_div">
								<DropdownToggle tag="a" className="nav-link" caret>
									Filter By Events
								</DropdownToggle>
								<DropdownMenu>
									
									
									{yo}
								
								</DropdownMenu>
								</UncontrolledDropdown>
							</Nav>
							</div>
						</Navbar>

						<Table  multiSelectable={true} onRowSelection={this.onRowSelection}> 
							<TableHead>
								<TableRow>
									<TableCell>ID</TableCell>
									<TableCell>TYPE 
										
									</TableCell>
									<TableCell >SEVERITY</TableCell>
									<TableCell >EVENT TIME</TableCell>
									<TableCell >DATA</TableCell>
									<TableCell >ASSIGNED TO</TableCell>
									<TableCell >Assign Selected Events</TableCell> 
								</TableRow>
							</TableHead>
							<TableBody>
								
								{dd}
								
							</TableBody>
						</Table>
					</div>
					

                );
            }
        }

        return(<div>Loading...</div>);
    }

	onRowSelection(rows)
	{
		console.log(rows);
	}

}

const Convert = ({value}, {kk}) => {

	
	

	if(!isNaN(value) && value.toString().length>=10)
	{
		
		if(value.toString().length<13)
		{
			value = value * 1000;
		}
		return(

			<TableCell>
				{new Date(value).toString().substring(0, 24)}
			</TableCell>
		);
	}

	else if(value.charAt(0) == '5')
	{
		<TableCell onClick={event => this.handleClick(event, {value})}>
			{value}
		</TableCell>
	}
	
	
    return(
        
		<TableCell>
			{value}
		</TableCell>
       
    );
}


function ExtractData(props)
{
	
	const val = Object.values(props.values);
	const keys = Object.keys(props.values);

	
	var items = val.map((value, x = 0) => {
		return(

			<div>
				<div><b>{keys[x]}	:	</b> {value}</div>


			</div>

		);

	{x++}
	}

	);

	return(<div>{items}</div>);

}

function ExtractAss(props)
{
	
	
	const val = Object.values(props.values);
	const keys = Object.keys(props.values);

	
	var items = val.map((value, x = 0) => {
		return(

			<div>
				<div><b>{keys[x]}	:	</b>{value}</div>


			</div>

		);

	{x++}
	}

	);

	return(<div>{items}</div>);
}

export default First;