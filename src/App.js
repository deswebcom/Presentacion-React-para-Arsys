import React, { Component } from 'react';
import './App.css';

import FeedbackMessage from './FeedbackMessage/FeedbackMessage.js';
import Counter from './Counter/counter';
import TextSlider from './TextSlider/TextSlider';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Bienvenidos a React!!</p>
        <FeedbackMessage msg="Esto es React en Arsys!!!" />
        <Counter />
        <TextSlider />
      </div>
    );
  }
}

export default App;
