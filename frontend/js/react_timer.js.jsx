import React from 'react';


export const ReactTimer = React.createClass({

  getInitialState() {
    return {
      counting: false,
      totalCount: 0
    };
  },


  startTimer() {
    if (!this.state.counting) {
      this.setState({ counting: true });
      this.timer = setInterval(this.incrementCount, 1000);
    }
  },


  stopTimer() {
    this.setState({ counting: false });
    clearInterval(this.timer);
  },


  resetTimer() {
    this.setState({ counting: false, totalCount: 0 });
    clearInterval(this.timer);
  },


  incrementCount() {
    this.setState({ totalCount: this.state.totalCount + 1 });
  },


  renderButton(text, btnClass, onClick) {
    return (
      <button type='button' className={`btn btn-${btnClass} ml-10`} onClick={onClick}>
        {text}
      </button>
    );
  },


  render() {
    const { counting, totalCount } = this.state;

    return(
      <div className='ml-100'>
        <div className='mt-100 w-40pct timer-box'>
          <h4 className="pull-left">React Timer</h4>
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
