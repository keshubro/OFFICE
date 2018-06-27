import React from 'react';

class Test extends React.Component
{
	constructor()
	{
		super();
		console.log("1");
		this.state = {};
	}

	render()
	{
		console.log("2");
		return(<h1>Hi</h1>);
	}
}

export default Test;