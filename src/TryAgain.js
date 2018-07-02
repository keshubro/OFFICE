import React,{ Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


class SimpleTable extends Component{

    cellClicked()
    {
      console.log("clicked");
    }

    render()
    {
        return(
            <Paper>
            <Table onCellClick={this.cellClicked}>
                <TableHead>
                    <TableRow onCellClick={this.cellClicked}>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell numeric>Calories</TableCell>
                        <TableCell numeric>Fat (g)</TableCell>
                        <TableCell numeric>Carbs (g)</TableCell>
                        <TableCell numeric>Protein (g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                  
                        <TableRow onCellClick={this.cellClicked}>
                          <TableCell component="th" scope="row">
                            Keshav
                          </TableCell>
                          <TableCell >Sharma</TableCell>
                          <TableCell >Sradha</TableCell>
                          <TableCell >Suman</TableCell>
                          <TableCell >Sarangi</TableCell>
                        </TableRow>
                      
                    
        </TableBody>
            </Table>
        </Paper>
        );
    }

}
export default SimpleTable;
