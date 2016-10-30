import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

const onOnClick = function() {
  console.log('ON 🔥');
  axios.post('/api/arduino/power').then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('ON 🔥');
}

const onUpClick = function() {
  axios.post('/api/arduino/vUp').then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('UP 🔥');
}

const onDownClick = function() {
  axios.post('/api/arduino/vDown').then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('DOWN 🔥');
}

const onMuteClick = function() {
  axios.post('/api/arduino/mute').then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('MUTE 🔥');
}

const onChannelUpClick = function() {
  axios.post('/api/arduino/cUp').then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('DOWN 🔥');
}

const onChannelDownClick = function() {
  axios.post('/api/arduino/cDown').then( function(res) {
    console.log(res);
  }).catch( function(err) {
    console.log('ERROR: ', err);
  });
  console.log('DOWN 🔥');
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Smart Remote</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={onOnClick}>Power</button>
        <button onClick={onUpClick}>volume +</button>
        <button onClick={onDownClick}>Volume -</button>
        <button onClick={onMuteClick}>Mute</button>
        <button onClick={onChannelUpClick}>Ch +</button>
        <button onClick={onChannelDownClick}>Ch -</button>
      </div>
    );
  }
}

export default App;
