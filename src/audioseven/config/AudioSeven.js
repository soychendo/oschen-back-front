
class AudioSeven {

  constructor(config) {
    this.track = config.track;
    this.button = config.button;
    this.isPlaying = true;
  }
  onPlay() {
    this.track.play();
    this.isPlaying = true;
    let setBtn = this.button.querySelector('img');
    setBtn.src = '/src/audioseven/img/pause.svg';
  }
  onPause() {
    this.track.pause();
    this.isPlaying = false;
    let setBtn = this.button.querySelector('img');
    setBtn.src = '/src/audioseven/img/play.svg';
  }
  async toggleAudio() {
    if( this.track.paused && !this.isPlaying) { return this.onPlay();} 
    else { if( !this.track.paused && this.isPlaying ) { return this.onPause(); } }
  }
}
export default AudioSeven;