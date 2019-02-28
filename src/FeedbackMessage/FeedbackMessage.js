import React, { Component } from 'react';
import './FeedbackMessage.css';
import TimestampToDate from '../TimestampToDate/TimestampToDate';

class FeedbackMessage extends Component {
  render() { 
    return (
      <p className="fm"><TimestampToDate timestamp="122323343433" /> {this.props.msg} <span onClick={this.doClick}>clic</span></p>
    );
  }

  doClick() {
    alert('Hola');
  }
}

export default FeedbackMessage;