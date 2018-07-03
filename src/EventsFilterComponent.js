import React, { Component } from 'react';

class EventsFilter extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            events: null,
        }
    }

    componentDidMount()
	{
        console.log("componentDidMount");
		  fetch('http://203.17.194.45/eventApp/events/all')
	    .then(results =>
	      results.json()
	    )
		.then(data => this.setState({data: data, len: data.length}));

		console.log("componentDidMount");
		fetch('http://203.17.194.45/eventApp/events/typeAgg')
	    .then(results =>
	      results.json()
	    )
	    .then(data => this.setState({events: data}));
    }

    render()
    {
        var keys;var extraKeys; var extraValues; var val;
        var extraDatakeys; var extraDatavalues; var extraAsskeys; var extraAssvalues;
        var valuesMapped; var ob; var ob1;
        var str = this.props.location.pathname.substring(9);

        if(this.state.data !== null)
        {

                        var dd = this.state.data.map((d) => {

                            if(str === d.type)
                            {
                                val = Object.values(d);
                                keys = Object.keys(d);
                                extraKeys = keys.splice(4,2);
                                extraValues = val.splice(4,2);
                                
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
                                
                                let valuesMapped = val.map((v) => <Convert value = {v} keys = {keys} />);
                                
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
                        

                            if(this.state.cookies.get('name') == 'null')
                            {
                                
                                return(

                                    <div>You arent logged in</div>

                                );

                            }

                            else if(this.state.cookies.get('name') != 'null' && this.state.events !== null){
                                
                                
                                return(
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
                                );
                            }
                        }
                        
                    }
                }
            return(<div>Loading...</div>);
      
       
                
        

        console.log(str);
       if(this.state.events !== null && this.state.data !== null)
        {
            console.log("Events FIlter");
            console.log(this.state.events[0].id);
            const x = this.state.events.map((d) => d.id === str ? d.count : null)
            return(
                <div>{x}</div>
            );
        }

       return(<div>Loading</div>);
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

export default EventsFilter;