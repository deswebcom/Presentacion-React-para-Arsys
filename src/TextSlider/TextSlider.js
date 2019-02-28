import React, { Component } from 'react';
import './TextSlider.css';

class TextSlider extends Component {
  constructor(props) {
    super(props);
    this.texts = ['Bienvenidos a React', 'Una exposición de Miguel A. Alvarez', 'EscuelaIT para Arsys']

    this.state = { 
      id: 1
    }
  }
  render() { 
    return ( <div className="textslider">{this.texts[this.state.id]}</div> );
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.timer = setInterval(
      () => this.update(),
      1000
    )
  }

  update() {
    console.log('hago update...', this.state);
    this.setState({ 
      id: (this.state.id + 1) % this.texts.length
    });
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    clearInterval(this.timer);
  }




}
 
export default TextSlider;