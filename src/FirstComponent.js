//Have to implement show less for data and assigned to
//PATH = '/details'

import React, { Component } from 'react';
import Second from './SecondComponent';
import './centered.css';
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom';

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
        var valuesMapped;
        if(this.state.data != null)
		{
            var dd = this.state.data.map((d) => {

                val = Object.values(d);
                keys = Object.keys(d);
                extraKeys = keys.splice(4,2);
				extraValues = val.splice(4,2);
				

              let valuesMapped = val.map((v) => <Convert value = {v} keys = {keys} />);
				
                return(
					
					<tr>
						
						{valuesMapped}
						<Link to = "/login">
						<td> 
							Click here
						</td>
						</Link>
						<td>
							Click here
						</td>
					</tr>
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

                    <div>
						<table>
							<th>
								ID
							</th>
							<th>
								Type
							</th>
							<th>
								Severity
							</th>
							<th>
								Event Time
							</th>
							<th>
								Data
							</th>
							<th>
								Assigned To
							</th>
							<tbody>
								{dd}
							</tbody>
						</table>
					</div>

                );
            }
        }

        return(<div>Loading...</div>);
    }



}

const Convert = (props, x) => {
	
    return(
        
		<td>
			{props.value}
		</td>
       
    );
}

export default First;