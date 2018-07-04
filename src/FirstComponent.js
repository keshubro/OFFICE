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
			evlen: null
		};
	}
	
	handleClick(e)
	{
		console.log("clicked");
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
    }
    
    render()
	{

//		console.log(new Date(1234567890000));

        var name =this.state.cookies.get('name');
        
        //Variables declaration
        var keys;var extraKeys; var extraValues; var val;
        var extraDatakeys; var extraDatavalues; var extraAsskeys; var extraAssvalues;
		var valuesMapped; var ob; var ob1;
		
		if(this.state.events !== null)
        {
            console.log("Events Filter");
            console.log(this.state.events[0].id);
        }

        if(this.state.data !== null)
		{
            var dd = this.state.data.map((d) => {

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
					ob1 = extraValues[1];
				}
              	let valuesMapped = val.map((v) =>
					
					<Convert value = {v} kk = {keys[0]} />
					
					
				
			
				);
				
                return(
					
					<TableRow>
						
						{valuesMapped}
						
						<TableCell> 
							{ob}
						</TableCell>
						
						<TableCell >
							{ob1}
						</TableCell>
					</TableRow>
				);
            });
        

            if(this.state.cookies.get('name') == 'null')
            {
                
                return(

                    <div>You arent logged in</div>

                );

            }

            else if(this.state.cookies.get('name') != 'null' && this.state.events !== null){
				
									
				var yo = this.state.events.map((ev) => <DropdownItem tag="a" href={`/details/${ev.id}`}>{ev.id}({ev.count})</DropdownItem>);
                return(
					<div>
						<Navbar color="light" light expand="sm">
							<Nav className="ml-auto" navbar>
								
								<UncontrolledDropdown setActiveFromChild direction = "left">
								<DropdownToggle tag="a" className="nav-link" caret>
									Filter By Events
								</DropdownToggle>
								<DropdownMenu>
									
									
									{yo}
								
								</DropdownMenu>
								</UncontrolledDropdown>
							</Nav>
						</Navbar>

						<Table > 
							<TableHead>
								<TableRow>
									<TableCell>ID</TableCell>
									<TableCell>TYPE 
										
									</TableCell>
									<TableCell >SEVERITY</TableCell>
									<TableCell >EVENT TIME</TableCell>
									<TableCell >DATA</TableCell>
									<TableCell >ASSIGNED TO</TableCell>
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



}

const Convert = ({value}, {kk}) => {

	
	

	if(!isNaN(value))
	{
		
		if(value.toString().length)
		{
			value = value * 1000;
		}
		return(

			<TableCell>
				{new Date(value).toString().substring(0, 24)}
			</TableCell>
		);
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