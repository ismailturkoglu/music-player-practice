class UI {
  constructor() {
    this.image = document.querySelector("img");
    this.title = document.querySelector(".title");
    this.singer = document.querySelector(".singer");
    this.audio = document.querySelector(".song-progress audio");
    this.currentTime = document.querySelector(".current-time");
    this.duration = document.querySelector(".duration");
    this.progressBar = document.querySelector("#progress-bar");
    this.controls = document.querySelector(".controls");
    this.previous = document.querySelector("#previous");
    this.playPause = document.querySelector("#play-pause");
    this.stop = document.querySelector("#stop");
    this.next = document.querySelector("#next");
    this.volume = document.querySelector(".volume");
    this.volumeBar = document.querySelector("#volume-bar");
    this.repeat = document.querySelector("#repeat-btn");
    this.songList = document.querySelector(".song-list");
  }
}
