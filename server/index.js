const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');
const csv = require('fast-csv');

const app = express();
var api= require('../config.js');


// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../react-client/dist'));
app.get('/api/data', function (req, res) {
	let param = JSON.parse(req.query.data)
	let url = `https://developer.nrel.gov//api/pvwatts/v6.json?api_key=${api.apiKey}&lat=${param.lat}&lon=${param.lon}&system_capacity=${param.dcSystem}&azimuth=${param.azimuth}&tilt=${param.tilt}&array_type=${param.arrType}&module_type=${param.mod}&losses=${param.sysLoss}`

	axios.get(url)
	.then(function ({data}) {
    res.status(200).send(data.outputs);

    let ws = fs.createWriteStream(`./data/${data.station_info.solar_resource_file}`);

    //Move to helper function file
    getRow = (outputs, r) => [r+1,
     outputs.ac_monthly[r], 
     outputs.solrad_monthly[r], 
     outputs.poa_monthly[r],
     outputs.dc_monthly[r],
     outputs.ac_monthly[r] * param.rate]

    const columns = [
    	"Month","AC System Output(kWh)", 
    	"Solar Radiation (kWh/m^2/day)", 
    	"Plane of Array Irradiance (W/m^2)",
    	"DC array Output (kWh)", "Value ($)"
    ]

    ws.write(
    	columns.join(',') + '\r\n' 
    	+ data.outputs.ac_monthly.map((e, i) => getRow(data.outputs, i).join(',')).join('\r\n')
    )
  })
  .catch(function (error) {
    console.log(error);
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});