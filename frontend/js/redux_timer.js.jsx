import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { setCounting, incrementCounter, resetCounter } from './actions';


const ReduxTimer = React.createClass({

  propTypes: {
    counting:   PropTypes.bool.isRequired,
    totalCount: PropTypes.number.isRequired,
    dispatch:   PropTypes.func.isRequired
  },


  startTimer() {
    const { counting, dispatch } = this.props;

    if (!counting) {
      dispatch(setCounting(true));
      this.timer = setInterval(() => dispatch(incrementCounter()), 1000);
    }
  },


  stopTimer() {
    this.props.dispatch(setCounting(false));
    clearInterval(this.timer);
  },


  resetTimer() {
    this.props.dispatch(resetCounter());
    clearInterval(this.timer);
  },


  incrementCount() {
    this.props.dispatch(increment());
  },


  renderButton(text, btnClass, onClick) {
    return (
      <button type='button' className={`btn btn-${btnClass} ml-10`} onClick={onClick}>
        {text}
      </button>
    );
  },


  render() {
    const { counting, totalCount } = this.props;

    return(
      <div className='ml-100'>
        <div className='mt-100 w-40pct timer-box'>
          <h4 className="pull-left">Redux Timer</h4>
          <div className='pull-right'>
            <span>{totalCount}</span>
            {counting
               ? this.renderButton('Stop', 'warning', this.stopTimer)
               : this.renderButton('Start', 'success', this.startTimer)}
            {this.renderButton('Reset', 'danger', this.resetTimer)}
          </div>
        </div>
      </div>
    );
  }

});


export default connect((state) => ({
  counting:   state.counting,
  totalCount: state.totalCount
}))(ReduxTimer);
