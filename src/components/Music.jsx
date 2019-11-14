import React from 'react';
 import './Music.css';








class Music extends React.Component {
  constructor(props) {
    super(props);
   
  }

  componentDidMount() {
    let song = document.getElementById('sound', 'iframeAudio');
    song.volume = 0.2;
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    {isChrome ? document.getElementById('sound').remove() : document.getElementById('iframeAudio').remove()};
     
  }



  render() {
    return (
      <div>
        <audio className="player" id="sound" autoPlay loop>
          <source ref="song"
            src="./music/audiohub_2017-00307-1397_valhalla_1295.mp3"
            type="audio/mpeg"
          />
        </audio>
        <iframe className="player"  title="play" src="./music/audiohub_2017-00307-1397_valhalla_1295.mp3" allow="autoPlay" autoPlay  id="iframeAudio">
        </iframe> 
      </div>
    )
  }
}

export default Music;