import React from 'react';
import ReactDOM from 'react-dom';
import ListItem from './components/ListItem.js';
import BarGraph from './components/BarGraph.js';
import Table from './components/Table.js';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      dispay: false,
      rate: .149
    }

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(data){
    this.setState({
      rate: data.rate
    })
    axios.get('/api/data', {
      params : {
        data: data
      }
    })
    .then(({data}) => {
      this.setState({
        info: data,
        dispay: true
      });
    }) 
  }

  render () {
    return (<div>
      <ListItem onSubmit={this.onSubmit}/>
      {this.state.dispay ? <BarGraph data={this.state.info} rate={this.state.rate}/> : <div></div>}
      {this.state.dispay ? <Table data={this.state.info} rate={this.state.rate}/> : <div></div>}
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));