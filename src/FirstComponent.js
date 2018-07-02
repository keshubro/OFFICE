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

class First extends Component
{


	constructor()
	{
		
		super();
		this.state = {
			data: null,
			len: null,
			cookies: new Cookies
		};
	}
	
	handleCellClick (rowNumber, columnNumber, evt) {
	console.log("activityId", evt.target.dataset.myRowIdentifier);
	}
	  
    
    componentDidMount()
	{
		console.log("componentDidMount");
		  fetch('http://203.17.194.45/eventApp/events/all')
	    .then(results =>
	      results.json()
	    )
	    .then(data => this.setState({data: data, len: data.length}));
    }
    
    render()
	{
        var name =this.state.cookies.get('name');
        
        //Variables declaration
        var keys;var extraKeys; var extraValues; var val;
        var extraDatakeys; var extraDatavalues; var extraAsskeys; var extraAssvalues;
		var valuesMapped; var ob; var ob1;
		


        if(this.state.data != null)
		{
            var dd = this.state.data.map((d) => {

                val = Object.values(d);
                keys = Object.keys(d);
                extraKeys = keys.splice(4,2);
				extraValues = val.splice(4,2);
				console.log("values" +extraValues);

				if(extraValues[0] !== null && typeof extraValues[0] === 'object'){
					console.log("object");
					ob = <ExtractData values = {extraValues[0]} />
				}

				else{
					ob = extraValues[0];
				}

				if(extraValues[1] !== null && typeof extraValues[1] === 'object'){
					console.log("object");
					ob1 = <ExtractAss values = {extraValues[1]} />
				}

				else{
					ob1 = extraValues[1];
				}
              let valuesMapped = val.map((v) => <Convert value = {v} keys = {keys} />);
				
                return(
					
					<TableRow>
						
						{valuesMapped}
						
						<TableCell> 
							{ob}
						</TableCell>
						
						<TableCell>
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

            else if(this.state.cookies.get('name') != 'null'){
                    
                return(
					
                    <Paper>
						<Table onCellClick={this.handleCellClick}> 
						<TableHead>
							<TableRow>
								<TableCell>ID</TableCell>
								<TableCell>TYPE</TableCell>
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
					</Paper>
					

                );
            }
        }

        return(<div>Loading...</div>);
    }



}

const Convert = (props, x) => {
	
    return(
        
		<TableCell>
			{props.value}
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
				<h5>{keys[x]}	:	{value}</h5>


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
				<h5>{keys[x]}	:	{value}</h5>


			</div>

		);

	{x++}
	}

	);

	return(<div>{items}</div>);
}

export default First;