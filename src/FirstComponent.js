//Have to implement show less for data and assigned to


import React, { Component } from 'react';
import Second from './SecondComponent';
import './centered.css';

class First extends Component
{


	constructor()
	{
		super();
		this.state = {
			values: [],
			keys: [],
			dataKeys: [],
			dataValues: [],
			onceEntered: false,
			data: [],
			len: null,
			dataClicked: true,
			assClicked: true,
			dataButtonText: "Show More",
			assButtonText: "Show More"
		};
	}

	handleDataClick(){
		this.state.dataClicked ?   this.setState({dataClicked: !this.state.dataClicked, dataButtonText: "Show Less"}) :   this.setState({dataClicked: !this.state.dataClicked, dataButtonText: "Show More"})

  }

	handleAssClick()
	{
		this.state.assClicked ?   this.setState({assClicked: !this.state.assClicked, assButtonText: "Show Less"}) :   this.setState({assClicked: !this.state.assClicked, assButtonText: "Show More"})

	}


	// fun()
	// {
	// 	console.log("in fun");
	// 	//console.log(this.state.values);

	// 	//this.setState({dataKeys: Object.keys(this.state.values[4]), onceEntered: true, dataValues: Object.values(this.state.values[4])});

	// 	for(var i = 0; i< this.state.len; i++)
	// 	{
	// 		const values = Object.values(this.state.data[i]);
	// 		const keys = Object.keys(this.state.data[i]);

	// 		for(var j = 0; j< 3; j++)
	// 		{
	// 			console.log(keys[j]);
	// 			<li>{keys[j]}</li>
	// 			// console.log(values[j]);

	// 		}
	// 	}


	// }




	componentDidMount()
	{
		  fetch('http://203.17.194.45/eventApp/events/all')
	    .then(results =>
	      results.json()
	    )
	    .then(data => this.setState({data: data, len: data.length}));
	}

	render()
	{
				var listItems, listValues; var keys;var extraKeys; var extraValues;
				var val; var text; var ll;


				if(this.state.data[0] != null)
				{
					console.log(this.state.data);

						val = Object.values(this.state.data[0]);
					  keys = Object.keys(this.state.data[0]);
						extraKeys = keys.splice(4,2);
						extraValues = val.splice(4,2);
						console.log(keys);
						console.log(val);

						var dd = this.state.data.map((d) => {

							val = Object.values(d);
						  keys = Object.keys(d);
							extraKeys = keys.splice(4,2);
							extraValues = val.splice(4,2);

							return(

							<div>
									<Test values={val} keys = {keys}/>
									<button onClick = {this.handleDataClick.bind(this)}>{this.state.dataButtonText}</button>
									<div><h1>Data :::</h1></div>
									{this.state.dataClicked === false && <ExtractData extraData={extraValues[0]} extraKeys = {extraKeys[0]} />}
									<button onClick = {this.handleAssClick.bind(this)}>{this.state.assButtonText}</button>

									<div><h1>Assigned To:::</h1></div>

									{this.state.assClicked === false && <ExtractAss extraData = {extraValues[1]} extraKeys = {extraKeys[1]} />}
									<hr />
							</div>
						);

					});

					return(

						<div>{dd}</div>

					);


				}
				return(<div>Failed To Load !!</div>);
		}
	}


function Test(props)
{
	console.log(props.keys);

			var items = props.values.map((value, x = 0) => {
				return(

					<div>
						<h5>{props.keys[x]}	:	{value}</h5>


					</div>

				);

			{x++}
			}

			);

			return(<div>{items}</div>);

}


function ExtractData(props)
{
	console.log(props.extraData);
	const keys = Object.keys(props.extraData);
	const values = Object.values(props.extraData);

	return(<div><TestData keys = {keys} values = {values} /></div>);


	return(<div>hi</div>);


}

function TestData(props)
{
	var items = props.values.map((value, x = 0) => {
		return(

			<div>
				<h5>{props.keys[x]}	:	{value}</h5>


			</div>

		);

	{x++}
	}

	);

	return(<div>{items}</div>);
}


function ExtractAss(props)
{
	console.log(props.extraData);
	const keys = Object.keys(props.extraData);
	const values = Object.values(props.extraData);

	return(<div><TestAss keys = {keys} values = {values} /></div>);





}


function TestAss(props)
{
	var items = props.values.map((value, x = 0) => {
		return(

			<div>
				<h5>{props.keys[x]}	:	{value}</h5>


			</div>

		);

	{x++}
	}

	);

	return(<div>{items}</div>);
}






export default First;
