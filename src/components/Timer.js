import React from "react";

class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      isSession: true,
      timerSecond: 0,
      intervalId: 0,
    };
    this.play = this.play.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  play() {
    this.props.onPlayStop(true);
    let intervalId = setInterval(this.decreaseTimer, 1000);
    this.setState({
      intervalId: intervalId,
    });
  }

  decreaseTimer() {
    switch (this.state.timerSecond) {
      case 0:
        if(this.props.timerMinute ===0) {
          if(this.state.isSession) {
            this.setState({
                isSession : false
            })
            this.props.toggleInterval(this.setState.isSession);
          } else {
            this.setState({
                isSession : true
            });
            this.props.toggleInterval(this.setState.isSession);
          }
        } else{
            this.props.updateTimerMinute();
        this.setState({
          timerSecond: 59,
        });
        }
        
        break;
      default:
        this.setState((prevState) => {
          return {
            timerSecond: prevState.timerSecond - 1,
          };
        });
        break;
    }
  }

  stopTimer() {
    clearInterval(this.state.intervalId);
    this.props.onPlayStop(false);
  }

  resetTimer() {
    this.stopTimer();
    this.props.onPlayStop(false);
    this.props.resetTimer();
    this.setState({
        timerSecond: 0,
        isSession : true
    });


  }

  render() {
    return (
      <section className="block25">
        <section className="timer">
          <h4> {this.state.isSession === true ? "Session" : "Break"} </h4>

          <span className="timerS"> {this.props.timerMinute} </span>

          <span className="timerS">:</span>

          <span className="timerS">
            {" "}
            {this.state.timerSecond === 0
              ? "00"
              : this.state.timerSecond < 10
              ? "0" + this.state.timerSecond
              : this.state.timerSecond}
          </span>
        </section>

        <section className="timerAction">
          <button className="buttonBas" onClick={this.play}>
            Play
          </button>
          <button className="buttonBas" onClick={this.stopTimer}>
            Stop
          </button>
          <button className="buttonBas" onClick={this.resetTimer}>
            Refresh
          </button>
        </section>
      </section>
    );
  }
}

export default Timer;
