import React from 'react';
import ReactDataGrid from 'react-data-grid';

export default class Table extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
    }
  }

  getData(){
  	const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  	let result = []
    let annsolar = 0;
    let annACEnergy = 0;
    let annvalue = 0;

  	for(let i = 0; i < 12; i++){
  		let rate = this.props.data.ac_monthly[i] * this.props.rate;
  		let obj = {
  			month: months[i], 
  			solar: Math.ceil(this.props.data.solrad_monthly[i]), 
  			ACEnergy: Math.ceil(this.props.data.ac_monthly[i]), 
  			value: Math.ceil(rate)
  		}
      annsolar += Math.ceil(this.props.data.solrad_monthly[i]);
      annACEnergy += Math.ceil(this.props.data.ac_monthly[i]);
      annvalue = Math.ceil(rate);

  		result.push(obj)
  	}

    let annualArr = {
      month: "Annual", 
      solar: annsolar/12, 
      ACEnergy: annACEnergy, 
      value: annvalue
    }

    result.push(annualArr)

  	return result;
  }


  render() {
  	const columns = [
		  { key: 'month', name: 'Month' },
		  { key: 'solar', name: 'Solar Radiation (kWh / m2 / day)' },
		  { key: 'ACEnergy', name: 'AC Energy (kWh)' },
		  { key: 'value', name: 'Value ($)' },];

		const rows = this.getData()
    return (
    	<ReactDataGrid
			  columns={columns}
			  rowGetter={i => rows[i]}
			  rowsCount={13} 
        minHeight={100}
        minHeight={550}
    minColumnWidth={15}/>
    );
  }
}