import React from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

 
export default class BarGraph extends React.Component {
  constructor(props) {
  	super(props);

  	this.createData = this.createData.bind(this);
  }

  createData(){
  	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  	let result = []

  	for(let i = 0; i < 12; i++){
      let rate = this.props.data.ac_monthly[i] * this.props.rate;
  		let obj = {
  			name: months[i], 
  			Solar: Math.ceil(this.props.data.solrad_monthly[i]), 
  			ACEnergy: Math.ceil(this.props.data.ac_monthly[i]), 
  			Value: Math.ceil(rate),
  		}

  		result.push(obj)
  	}

  	return result
  }


  render(){
	let data = this.createData()
  		return(
  			<div>
  				<BarChart
		        width={1000}
		        height={400}
		        data={data}
		        margin={{
	          	top: 5, right: 30, left: 20, bottom: 5,
	        	}}
	      	>
		      <YAxis />
		      <XAxis dataKey="name" />
		        <YAxis />
		        <Tooltip />
		        <Legend />
		        <Bar dataKey="ACEnergy" fill="#0000FF" />
		        <Bar dataKey="Solar" fill="#FFA500" />
		        <Bar dataKey="Value" fill="#82ca9d" />
		       </BarChart>
				</div>
  		)
  	}
}