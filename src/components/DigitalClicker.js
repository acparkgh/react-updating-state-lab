// Code DigitalClicker Component Here
import React from 'react';

class DigitalClicker extends React.Component {

  constructor() {
    super()
    this.state = {
      timesClicked: 0
    }
  }
  
  // handleClicked = () => {
  //   let newTimesClicked = this.state.timesClicked
  //   this.setState({
  //     timesClicked: ++newTimesClicked
  //   })
  // }

  handleClicked = () => {
    this.setState( (previousState) => {
      return ({
        timesClicked: ++previousState.timesClicked
      })
    })
  }
  

  render() {
    return (
      <div>
        <button onClick={this.handleClicked} >
          {this.state.timesClicked}
        </button>
      </div>
    )
  }

}

export default DigitalClicker