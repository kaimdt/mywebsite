import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/Home.module.css';

export default class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h2 className={styles.clock}>{this.state.date.toLocaleTimeString()}</h2>
        </div>
      );
    }
  }