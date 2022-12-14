import React from "react";
import "./App.css";
import BreakInterval from "./components/BreakInterval";
import SessionLength from "./components/SessionLength";
import Timer from "./components/Timer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      breakLength: 5,
      sessionLength: 25,
      timerMinute: 25,
      isPlay : false
    };

    //BreakLength
    this.onIncreaseBreakLength = this.onIncreaseBreakLength.bind(this);
    this.onDecreaseBreakLength = this.onDecreaseBreakLength.bind(this);
    //BreakSession
    this.onIncreaseSessionLength = this.onIncreaseSessionLength.bind(this);
    this.onDecreaseSessionLength = this.onDecreaseSessionLength.bind(this);
    //Timer
    this.onToggleInterval = this.onToggleInterval.bind(this);
    this.onUpdateTimerMinute = this.onUpdateTimerMinute.bind(this);
    this.onResetTimer = this.onResetTimer.bind(this);
    this.onPlayStop = this.onPlayStop.bind(this);
  }

  onIncreaseBreakLength(){
    this.setState(prevState => {
      return{
        breakLength:prevState.breakLength + 1
      };
    });

  }

  onDecreaseBreakLength(){
    this.setState(prevState => {
      return{
        breakLength:prevState.breakLength - 1
      
      };
    });

  }

onIncreaseSessionLength(){
  this.setState(prevState => {
    return{
      sessionLength:prevState.sessionLength + 1,
      timerMinute:prevState.sessionLength + 1
     
    };
  });

}

onDecreaseSessionLength(){
  this.setState(prevState => {
    return{
      sessionLength:prevState.sessionLength - 1,
      timerMinute:prevState.sessionLength - 1
    };
  });

}

onUpdateTimerMinute (){
  this.setState((prevState)=>{
    return{
      timerMinute: prevState.timerMinute -1
    }
  })
}

onToggleInterval(isSession){
 if (isSession) {
   this.setState( {
      timerMinute: SessionLength
     
   })
 }else {
  this.setState({
    timerMinute: this.state.breakLength
  })
 }
}

onResetTimer (){
  this.setState({
    timerMinute: this.state.sessionLength
  })
  
}

onPlayStop(isPlay){
  this.setState({
    isPlay : isPlay
  })
}

  render() {
    return (
      <main>
        <h2>25 + 5 Clock</h2>

        <section className="appContainer">

          <BreakInterval 
          isPlay ={this.props.isPlay}
          breakInterval={this.state.breakLength} 
          increaseBreak ={this.onIncreaseBreakLength}
          decreaseBreak ={this.onDecreaseBreakLength} />

          <SessionLength 
          isPlay ={this.props.isPlay}
          sessionLength={this.state.sessionLength} 
          increaseSession = {this.onIncreaseSessionLength}
          decreaseSession = {this.onDecreaseSessionLength}
           />
        </section>

        <Timer 
        timerMinute={this.state.timerMinute} 

        breakLength={this.state.breakLength} 
        updateTimerMinute={this.onUpdateTimerMinute}
        toggleInterval={this.onToggleInterval}
        resetTimer ={this.onResetTimer}
        onPlayStop ={this.onPlayStop}

        
        />

      </main>
    );
  }

}
export default App;
