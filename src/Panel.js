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
                    <p> EDUCATION </p>      
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
                      <p> EDUCATION </p>      
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
