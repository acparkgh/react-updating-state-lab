// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

  constructor() {
    super()
    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  handleBitrate = () => {
    this.setState({
      settings: { ...this.state.settings, bitrate: 12 }
    })
  }

  handleResolution = () => {
    let settingsValue = this.state.settings
    
    this.setState({
      settings: { ...settingsValue, video: { ...settingsValue.video, resolution: '720p' } }
    })
  }


  render() {
    return (
      <div>
        <button className="bitrate" onClick={this.handleBitrate} >
          {this.state.settings.bitrate}
        </button>
        <button className="resolution" onClick={this.handleResolution} >
          {this.state.settings.video.resolution}
        </button>
      </div>
    )
  }

}

export default YouTubeDebugger