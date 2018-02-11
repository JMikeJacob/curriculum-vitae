import React, { Component } from 'react';
import logo from './logo.svg';
import './Panel.css';

class Panel1 extends Component {
  constructor(props) {
    super(props);
    this.state = {toggle: false};
  }

  handleClick() {
    this.setState((prevState) => ({
        toggle: !prevState.toggle
      })
    );
  }

  render() {
    return (
        <div className="education">
            <div id="educ-header" onClick={this.handleClick.bind(this)}>
                    <h2 className="section-title">Education</h2>
            </div>
            <div id="educ-content" className="content" style={this.state.toggle ? {height:200} : {height:0}}>
                    <ul className="list">
                        <li><h3>Taguig Science High School</h3>
                            <p>High School (2011-2015)</p>
                        </li>
                        <li><h3>Excellent Achievers Learning Center</h3></li>
                            <p>Elementary (2005-2011)<br/> 
                               Primary (2002-2005)</p>
                    </ul>      
            </div>
        </div>
    );
  }
}

class Panel2 extends Component {
    constructor(props) {
      super(props);
      this.state = {toggle: false};
    }
  
    handleClick() {
      this.setState((prevState) => ({
          toggle: !prevState.toggle
        })
      );
    }
  
    render() {
      return (
          <div className="positions-held">
              <div id="pos-header" onClick={this.handleClick.bind(this)}>
                      <h2 className="section-title">Positions Held</h2>
              </div>
              <div id="pos-content" className="content" style={this.state.toggle ? {height:200} : {height:0}}>
              <ul className="list">
                        <li><h3>Taguig Science High School</h3>
                            <p>High School (2011-2015)</p>
                        </li>
                        <li><h3>Excellent Achievers Learning Center</h3></li>
                            <p>Elementary (2005-2011)<br/> 
                               Primary (2002-2005)</p>
                    </ul>   
              </div>
          </div>
      );
    }
}

class Panel3 extends Component {
    constructor(props) {
        super(props);
        this.state = {toggle: false};
    }

    handleClick() {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        })
        );
    }

    render() {
        return (
            <div className="work-exp">
                <div id="work-header" onClick={this.handleClick.bind(this)}>
                        <h2 className="section-title">Work Experience</h2>
                </div>
                <div id="work-content" className="content" style={this.state.toggle ? {height:200} : {height:0}}>
                        <p> EDUCATION </p>      
                </div>
            </div>
        );
    }
}

class Panel4 extends Component {
    constructor(props) {
    super(props);
    this.state = {toggle: false};
    }

    handleClick() {
    this.setState((prevState) => ({
        toggle: !prevState.toggle
        })
    );
    }

    render() {
    return (
        <div className="achievements">
            <div id="ach-header" onClick={this.handleClick.bind(this)}>
                    <h2 className="section-title">Achievements</h2>
            </div>
            <div id="ach-content" className="content" style={this.state.toggle ? {height:200} : {height:0}}>
                    <p> EDUCATION </p>      
            </div>
        </div>
    );
    }
}

export {Panel1, Panel2, Panel3, Panel4};
