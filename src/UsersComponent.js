import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Cookies from 'universal-cookie';

class Users extends Component
{
    constructor()
    {
        super();
        this.state = {
            data: null,
            cookies: new Cookies
        }
    }

    componentDidMount()
	{
		console.log("componentDidMount");
		  fetch('http://203.17.194.45/eventApp/users/all')
	    .then(results =>
	      results.json()
	    )
	    .then(data => this.setState({data: data, len: data.length}));
    }

    render()
    {
        if(this.state.data != null)
        {

       var dd = this.state.data.map((d) => {
        const name =this.state.cookies.get('name');
           if(d.name !== name){
                return(
                    <TableRow>
                        <TableCell> 
                            {d.name}
                        </TableCell>
                        
                        <TableCell>
                            {d.email}
                        </TableCell>
                        <TableCell>
                            {d.severityAccessLevel}
                        </TableCell>
                    </TableRow>
                );
            }

            
                return(
                    <TableRow>
                        <TableCell> 
                           <b> {d.name}</b>
                        </TableCell>
                        
                        <TableCell>
                            <b>{d.email}</b>
                        </TableCell>
                        <TableCell>
                            <b>{d.severityAccessLevel}</b>
                        </TableCell>
                        
                    </TableRow>
                );
            
       });
    }

    if(this.state.data == null)
    {
        
    }

        return(
            <Table > 
                <TableHead>
                    <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell>EMAIL</TableCell>
                        <TableCell >SEVERITY</TableCell>
                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dd}
                </TableBody>
            </Table>
        );
    }
}

export default Users;