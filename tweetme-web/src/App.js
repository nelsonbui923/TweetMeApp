import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TweetsComponent} from './tweets'

function loadTweets(callback) {
  const xhr = new XMLHttpRequest();
  const method = 'GET';
  const url = "http://localhost:8000/api/tweets/";
  const responseType = "json";

  xhr.responseType = responseType;
  xhr.open(method, url);
  xhr.onload = function() {
    callback(xhr.response, xhr.status)
  }
  xhr.onerror = function(e) {
    callback({"message": "the request was an error"}, 400)
  }
  xhr.send();
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <TweetsComponent/>
        </div>
      </header>
    </div>
  );
}

export default App;
