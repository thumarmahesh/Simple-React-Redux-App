import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import logo from '../../images/logo.svg';
import {setCount} from '../../redux/counter';

const mapStateToProps = (state) => ({
  count: state.counter.count
})

class Counter extends Component {
  constructor(props) {
    super(props);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase() {
    this.props.dispatch(setCount(this.props.count+1));
  }

  decrease() {
    this.props.dispatch(setCount(this.props.count-1));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <hr />
          <img src={logo} className="App-logo" alt="logo" />
          <NavLink activeClassName="btn-primary" className="btn btn-default" to={'/home'}> Home </NavLink>
          &nbsp;&nbsp;
          <NavLink activeClassName="btn-primary" className="btn btn-default" to={'/counter'}> Counter </NavLink>
          &nbsp;&nbsp;
          <NavLink activeClassName="btn-primary" className="btn btn-default" to={'/about'}> About </NavLink>
          <hr />
          <h3>{this.props.count}</h3>
          <button className="btn btn-default" onClick={this.increase}>+</button>
          &nbsp;&nbsp;
          <button className="btn btn-default" onClick={this.decrease}>-</button>
        </div>
      </div>
    );
  }
};



export default connect(mapStateToProps)(Counter);
