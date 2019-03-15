import React from "react";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      lon:'',
      lat:'',
      dcSystem: 25,
      mod: 1,
      arrType: 1,
      sysLoss: 13,
      tilt: 25,
      azimuth: 180,
      rateType: 1,
      rate: '',
    }

    this.changedLon = this.changedLon.bind(this);
    this.changedLat = this.changedLat.bind(this);
    this.changeddcSys = this.changeddcSys.bind(this);
    this.changedmod = this.changedmod.bind(this);
    this.changedArrType = this.changedArrType.bind(this);
    this.changedSysLoss = this.changedSysLoss.bind(this);
    this.changedTilt = this.changedTilt.bind(this);
    this.changedAzimuth = this.changedAzimuth.bind(this);
    this.changedRateType = this.changedRateType.bind(this);
    this.changedRate = this.changedRate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


   changedLon(event) {
    this.setState({
      lon: event.target.value
    });
  }

  changedLat(event) {
    this.setState({
      lat: event.target.value
    });
  }

  changeddcSys(event) {
    this.setState({
      dcSystem: event.target.value
    });
  }

  changedmod(event) {
    this.setState({
      mod: event.target.value
    });
  }

  changedArrType(event) {
    this.setState({
      arrType: event.target.value
    });
  }

  changedSysLoss(event) {
    this.setState({
      sysLoss: event.target.value
    });
  }

  changedTilt(event) {
    this.setState({
      tilt: event.target.value
    });
  }

  changedAzimuth(event) {
    this.setState({
      azimuth: event.target.value
    });
  }

  changedRateType(event) {
    this.setState({
      rateType: event.target.value
    });
  }

  changedRate(event) {
    this.setState({
      rate: event.target.value
    });
  }

  onSubmit(event){
    event.preventDefault();
    let obj = {
      lon: Number(this.state.lon),
      lat: Number(this.state.lat),
      dcSystem: Number(this.state.dcSystem),
      mod: Number(this.state.mod),
      arrType: Number(this.state.arrType),
      sysLoss: Number(this.state.sysLoss),
      tilt: Number(this.state.tilt),
      azimuth: Number(this.state.azimuth),
      rateType: Number(this.state.rateType),
      rate: Number(this.state.rate),
    }

    this.props.onSubmit(obj)
  }

  render() {
    return (

      <div style={styles.container}>

      <div className="field">
      <label className="label">Lon</label>
      <div className="control">
        <input className="input" 
          type="text"
          value={this.state.lon}
          placeholder="Text input"
          onChange={this.changedLon}/>
      </div>
      <br/>

      <label className="label">Lat</label>
      <div className="control">
        <input className="input" 
        type="text" 
        value={this.state.lat} 
        placeholder="Text input"
        onChange={this.changedLat}/>
      </div>
      <br/>

      <label className="label">DC System Size (kW)</label>
      <div className="control">
        <input className="input" 
        type="text" 
        value={this.state.dcSystem} 
        onChange={this.changeddcSys}
        placeholder="Text input" />
      </div>
      <br/>

      <label className="label">Module Type</label>
      <div className="control">
        <div className="select">
          <select value={this.state.changedmod} onChange={this.changedmod}>
            <option value="1">Standard</option>
            <option value="2">Premium</option>
            <option value="3">Thin Flin</option>
          </select>
        </div>
      </div>
      <br/>

      <label className="label">Array Type</label>
      <div className="control">
        <div className="select">
          <select value={this.state.arrType} onChange={this.changedArrType}>
            <option value="1">Fixed(Open Rack)</option>
            <option value="2">Fixed(Roof Mount)</option>
            <option value="3">1-Axis Tracking</option>
            <option value="4">1-Axis Backtracking</option>
            <option value="5">2-Axis Tracking</option>
          </select>
        </div>
      </div>

      <label className="label">System Losses(%)</label>
      <div className="control">
        <input className="input" 
          type="text" 
          placeholder="Text input"
          value={this.state.sysLoss} 
          onChange={this.changedSysLoss}/>
      </div>
      <br/>

      <label className="label">Tilt (deg)</label>
      <div className="control">
        <input className="input" 
          type="text" 
          placeholder="Text input"
          value={this.state.tilt} 
          onChange={this.changedTilt} />
      </div>
      <br/>

      <label className="label">Azimuth (deg)</label>
      <div className="control">
        <input className="input" 
          type="text" 
          placeholder="Text input"
          value={this.state.azimuth} 
          onChange={this.changedAzimuth} />
      </div>
      <br/>

      <label className="label">Rate Type (Residential or Commercial)</label>
      <div className="control">
        <div className="select">
          <select value={this.state.rateType} onChange={this.changedRateType}>
            <option value="1">Residential</option>
            <option value="2">Commercial</option>
          </select>
        </div>
      </div>
      <br/>

      <label className="label">Rate ($/kWh)</label>
      <div className="control">
        <input className="input" 
          type="text" 
          placeholder="Text input" 
          value={this.state.rate} 
          onChange={this.changedRate}/>
      </div>
      <br/>

      <div className="control">
        <button 
          className="button is-primary"
          onClick={this.onSubmit}>
            Submit
          </button>
      </div>
      <br/>
    </div>
    </div>

    );
  }
}

const styles = {
  container: {
    paddingLeft: 24,
    borderWidth: 1,
    width: 664,
    marginTop:20,
  }
}