import React, { Component } from 'react';
import { Button, FormControl, Jumbotron } from 'react-bootstrap';
import axios from 'axios';
import './bootstrap.css';
import './App.css';



const onOnClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/power/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('ON 🔥');
}

const onVolumeUpClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/vUp/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('UP 🔥');
}

const onVolumeDownClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/vDown/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('DOWN 🔥');
}

const onMuteClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/mute/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('MUTE 🔥');
}

const onChannelUpClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/cUp/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('DOWN 🔥');
}

const onChannelDownClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/cDown/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('DOWN 🔥');
}

// UP
const onUpClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/up/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('UPUP 🔥');
}
// RIGHT
const onRightClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/right/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('RIGHT 🔥');
}
// DOWN
const onDownClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/down/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('DOWNDOWN 🔥');
}
// LEFT
const onLeftClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/left/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('LEFT 🔥');
}
// ENTER
const onEnterClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/enter/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('ENTER 🔥');
}
// MENU
const onMenuClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/menu/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('MENU 🔥');
}
// INPUT
const onInputClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/input/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('INPUT 🔥');
}
// EXIT
const onExitClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/exit/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('EXIT 🔥');
}
// LAST
const onLastClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/last/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('LAST 🔥');
}
// 1
const onOneClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/one/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('ONE 🔥');
}
// 2
const onTwoClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/two/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('TWO 🔥');
}
// 3
const onThreeClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/three/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('THREE 🔥');
}
// 4
const onFourClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/four/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('FOUR 🔥');
}
// 5
const onFiveClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/five/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('FIVE 🔥');
}
// 6
const onSixClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/six/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('SIX 🔥');
}
// 7
const onSevenClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/seven/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('SEVEN 🔥');
}
// 8
const onEightClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/eight/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('EIGHT 🔥');
}
// 9
const onNineClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/nine/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('NINE 🔥');
}
// 0
const onZeroClick = function() {
  var manufacturerInput = document.getElementById('manufacturer').value;
  console.log(manufacturerInput);
  axios.post('/api/arduino/zero/' + manufacturerInput).then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('ZERO 🔥');
}


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <div className="App-header">
          <h2>Smart Remote</h2>
        </div> */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <div>
          <Jumbotron className="remote-header">
            <font color="grey"><h1>Smart Remote</h1></font>
            <font color="lightgrey"><p>control simplified</p></font>
            {/* <p><Button bsClass="btn btn-primary">Learn more</Button></p> */}
          </Jumbotron>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-xs-6">
              <font size="+1" color="white"><b>Select Manufacturer:</b></font>
            </div>
            <div className="col-xs-6">
              <FormControl bsClass="form-control form-group-lg" bsStyle="font-size = 30px" componentClass="select" id="manufacturer">
                {/* <option selected="selected" disabled="disabled">Select a Manufacturer</option> */}
              {/* <optgroup> */}
                <option value="dynex">Dynex</option>
                <option value="lg">LG</option>
                <option value="samsung">Samsung</option>
                <option value="sharp">Sharp</option>
              {/* </optgroup> */}
              </FormControl>
            </div>
          </div>
        <br/>
          <div className="row">
            <div className="col-xs-6">
              <Button className="circle power" bsStyle="danger" onClick={onOnClick}>
                <span className="glyphicon glyphicon-off"></span>
              </Button>
            </div>
            <div className="col-xs-6">
              <Button bsStyle="primary" className="circle inputs" onClick={onInputClick}> Input </Button>
            </div>
          </div>
        <br/>
          <div className="row">
            <div className="col-xs-6">
              <Button className="grey-button square" onClick={onVolumeUpClick}>
                <span className="glyphicon glyphicon-plus"></span>
              </Button>
            </div>
            <div className="col-xs-6">
              <Button className="grey-button square" onClick={onChannelUpClick}>
                <span className="glyphicon glyphicon-plus"></span>
              </Button>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <font color="white">
                <strong>
                Volume
              </strong>
            </font>
            </div>
            <div className="col-xs-6">
              <font color="white">
                <strong>
                Channel
              </strong>
            </font>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-6">
              <Button className="grey-button square" onClick={onVolumeDownClick}>
                <span className="glyphicon glyphicon-minus"></span>
              </Button>
            </div>
            <div className="col-xs-6">
              <Button className= "grey-button square" onClick={onChannelDownClick}>
                <span className="glyphicon glyphicon-minus"></span>
              </Button>
            </div>
          </div>
        <br/>
          <div className="row">
            <div className="col-xs-6">
              <Button className="grey-button circle-sm mute circle-norm" onClick={onMuteClick}>
                <span className="glyphicon glyphicon-volume-off"></span>
              </Button>
            </div>
            <div className="col-xs-6">
              <Button className="grey-button circle-sm last-channel circle-norm" onClick={onLastClick}>
                <span className="glyphicon glyphicon-repeat"></span>
              </Button>
            </div>
          </div>
          <div className="row">
            <Button className="grey-button square-sm" onClick={onUpClick}>
              <span className="glyphicon glyphicon-triangle-top"></span>
            </Button>
          </div>
        <br/>
          <div className="row">
            <div className="col-xs-4">
              <Button className="grey-button square-sm" onClick={onLeftClick}>
                  <span className="glyphicon glyphicon-triangle-left"></span>
              </Button>
            </div>
            <div className="col-xs-4">
              <Button className="grey-button circle-sm circle-norm" onClick={onEnterClick}>
               Enter  {/* <span className="glyphicon glyphicon-record"></span> */}
              </Button>
            </div>
            <div className="col-xs-4">
              <Button className="grey-button square-sm" onClick={onRightClick}>
                <span className="glyphicon glyphicon-triangle-right"></span>
              </Button>
            </div>
          </div>

          <br/>

          <div className="row">
            <div className="col-xs-4">
              <Button className="circle-sm" bsStyle="success" onClick={onMenuClick}> Menu </Button>
            </div>
            <div className="col-xs-4">
              <Button className="grey-button square-sm" onClick={onDownClick}>
                <span className="glyphicon glyphicon-triangle-bottom"></span>
              </Button>
            </div>
            <div className="col-xs-4">
              <Button className="circle-sm" bsStyle="warning" onClick={onExitClick}> Exit </Button>
            </div>
          </div>

          <br/>

          <div className="row">
            <Button className="grey-button square-sm" onClick={onOneClick}> 1 </Button>
            <Button className="grey-button square-sm" onClick={onTwoClick}> 2 </Button>
            <Button className="grey-button square-sm" onClick={onThreeClick}> 3 </Button>
          </div>
          <div className="row">
            <Button className="grey-button square-sm" onClick={onFourClick}> 4 </Button>
            <Button className="grey-button square-sm" onClick={onFiveClick}> 5 </Button>
            <Button className="grey-button square-sm" onClick={onSixClick}> 6 </Button>
          </div>
          <div className="row">
            <Button className="grey-button square-sm" onClick={onSevenClick}> 7 </Button>
            <Button className="grey-button square-sm" onClick={onEightClick}> 8 </Button>
            <Button className="grey-button square-sm" onClick={onNineClick}> 9 </Button>
          </div>
          <div className="row">
            <Button className="grey-button square-sm" onClick={onZeroClick}> 0 </Button>
          </div>
          <br/>
        </div>

      </div>
    );
  }
}

export default App;
