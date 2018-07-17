import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class Try extends React.Component {

  constructor()
  {
    super();
    this.state = {
      data: null
    }
  }

    
  componentDidMount()
	{
		// console.log("componentDidMount");
		  fetch('http://203.17.194.45/eventApp/events/all')
	    .then(results =>
	      results.json()
	    )
    .then(data => this.setState({data: data, len: data.length}))
  }

   

  render() {

    var val, dd, keys;
    if(this.state.data !== null)
		{
           dd = this.state.data.map((d) => {
              val = Object.values(d);
              keys = Object.keys(d);

      // var products = [{id:"1", name: "Keshav", price: "200"},
      //                   {id:"2", name: "Madhav", price: "205"}
      //                  ];

      return (
        <BootstrapTable data={ val[0] } selectRow={ selectRowProp }>
            <TableHeaderColumn dataField='name' isKey>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
            
        </BootstrapTable>
      );
    });
    return <div>{dd}</div>;

  }//If closing
  
return <div>Loading</div>

  }//render closing
}   //class closing

    function onRowSelect(row, isSelected, e) {
      let rowStr = '';
      for (const prop in row) {
        rowStr += prop + ': "' + row[prop] + '"';
      }
      console.log(e);
      alert(`is selected: ${isSelected}, ${rowStr}`);
    }
    
    function onSelectAll(isSelected, rows) {
      alert(`is select all: ${isSelected}`);
      if (isSelected) {
        alert('Current display and selected data: ');
      } else {
        alert('unselect rows: ');
      }
      for (let i = 0; i < rows.length; i++) {
        alert(rows[i].id);
      }
    }
    
    const selectRowProp = {
      mode: 'checkbox',
      clickToSelect: true,
      onSelect: onRowSelect,
      onSelectAll: onSelectAll
    };
    
    
  
export default Try;