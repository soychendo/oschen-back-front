import AudioSeven from './config/AudioSeven.js';
import Configs from './config/Configs.js';

const reproducir = document.querySelector('#play');
const reproductor = document.querySelector('#container');
const songs = document.querySelectorAll('#music .align_items');
const albums = document.querySelectorAll('#pictures .align_items');
const audios = document.querySelectorAll('#music .align_items audio');
const containerSongs = document.querySelector('.description_audioseven audio');
const closeMusic = document.querySelector('#container .mmc .close');

const player = new AudioSeven(
    { 
        track: containerSongs, 
        button: reproducir 
    });
reproducir.onclick = () => player.toggleAudio();

const config = new Configs(
    { 
        songs: songs,
        albums: albums, 
        containerSongs: 
        containerSongs, 
        audios: audios, 
        button: reproducir,
        reproductor: reproductor,
        closeMusic: closeMusic 
    });
config.volume();
config.playList();
config.endSong();
closeMusic.onclick = () => config.closePlayer();