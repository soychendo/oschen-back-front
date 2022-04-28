class Configs {

  constructor(config) {
    this.songs = config.songs;
    this.albums = config.albums;
    this.containerSongs = config.containerSongs;
    this.reproductor = config.reproductor;
    this.audios = config.audios;
    this.button = config.button;
    this.close = config.closeMusic; 
  }
  playList() {
    this.songs.forEach(music => {
    music.addEventListener('click', () => {
    let id = Number(music.getAttribute('data-id'));
    this.player(id);
    }); 
    });  
  }
  player(id) {
    let audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
    let title = audio.parentElement.querySelector('span');
    let src = audio.querySelector('source').src;
    let audio_id = Number(audio.getAttribute('data-id'));
    if(id === audio_id) { this.createSource({ id: audio_id, title: title, src: src });}
    });
  }
  createSource(data) {
    const { id, title, src } = data;
    const textTrack = document.querySelector('#container .description_audioseven p');
    const source = document.createElement('source');
    let setBtn = this.button.querySelector('img');

    if(id == undefined || title == undefined || src == undefined) {
      textTrack.textContent = "Add a Song";
    } else {
      textTrack.textContent = title.textContent;
      source.src = src;
      source.type = 'audio/mpeg';
      source.id = id;
      this.clearHTML();
      this.containerSongs.appendChild(source);
      this.reproductor.style.display = 'flex';
      this.containerSongs.load();
      this.containerSongs.play();
      setBtn.src = `/src/audioseven/img/pause.svg`;
      this.album(id);
    }
  }
  album(id) {
    this.albums.forEach(album => {
      let src = album.querySelector('span').textContent;
      let album_id = Number(album.querySelector('span').getAttribute('data-id'));
      const container_album = document.querySelector('.img_album');
      const img = document.createElement('img');
      img.src = `/src/audioseven/img/album/${src}.jpg`;
      img.alt = src;
      if(!(id == album_id)) return;
      container_album.appendChild(img);
    });
  }
  endSong() {
    this.containerSongs.addEventListener('ended', () => {
    this.containerSongs.load(); this.containerSongs.play();
    });
  }
  volume() {
    const volumen = document.querySelector('.volumen');
    volumen.oninput = (e) => {
    const vol = e.target.value;
    this.containerSongs.volume = vol;
    }
  }
  closePlayer() {
    const reproductor = document.querySelector('#container');
    reproductor.style.display = 'none';
    this.clearHTML();
    this.containerSongs.load();
  }
  clearHTML() {
    while(this.containerSongs.firstChild) {
        this.containerSongs.removeChild(this.containerSongs.firstChild);
    }
  }
}

export default Configs;