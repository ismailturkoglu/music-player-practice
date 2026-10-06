const player = new MusicPlayer(musicList);
const ui = new UI();

/* window load event */
window.addEventListener("load", () => {
  let music = player.getMusic();
  /* .song-details */
  displayMusic(music);
});

/* .song-progress */
/* audio metadata */
ui.audio.addEventListener("loadedmetadata", () => {
  ui.duration.innerText = formatTime(ui.audio.duration);
  ui.currentTime.innerText = formatTime(ui.audio.currentTime);
  ui.progresBar.max = ui.audio.duration;
  ui.audio.volume = ui.volumeBar.value / 100;
});

ui.audio.addEventListener("timeupdate", () => {
  ui.progresBar.value = ui.audio.currentTime;
  ui.currentTime.innerText = formatTime(ui.audio.currentTime);
});

ui.audio.addEventListener("ended", () => {
  if (
    ui.repeat.getAttribute("play-mode") == "next" &&
    player.index + 1 < player.list.length
  ) {
    nextMusic();
    playMusic();
  } else if (
    ui.repeat.getAttribute("play-mode") == "next" &&
    player.index + 1 >= player.list.length
  ) {
    stopMusic();
  } else if (ui.repeat.getAttribute("play-mode") == "repeat") {
    playMusic();
  } else if (ui.repeat.getAttribute("play-mode") == "repeat-all") {
    nextMusic();
    playMusic();
  }
});

ui.progresBar.addEventListener("input", () => {
  if (isPlaying()) {
    ui.audio.currentTime = ui.progresBar.value;
  }
});

/* .controls */
/* previous */
ui.previous.addEventListener("click", () => {
  previousMusic();
});

/* next */
ui.next.addEventListener("click", () => {
  nextMusic();
});

/* play/pause */
ui.playPause.addEventListener("click", () => {
  toggleMusic();
});

/* stop */
ui.stop.addEventListener("click", () => {
  stopMusic();
});

/* .card-footer */
ui.volumeBar.addEventListener("input", () => {
  ui.audio.volume = ui.volumeBar.value / 100;
});
ui.volume.addEventListener("click", () => {
  if (ui.volume.className.includes("volume-on")) {
    ui.volume.classList.remove("volume-on");
    ui.volume.classList.add("volume-off");
    ui.volumeBar.value = 0;
    ui.audio.volume = 0;
  } else {
    ui.volume.classList.add("volume-on");
    ui.volume.classList.remove("volume-off");
    ui.volumeBar.value = 75;
    ui.audio.volume = 0.75;
  }
});
ui.repeat.addEventListener("click", () => {
  let clickNo = ui.repeat.getAttribute("click-no");
  let mod = clickNo % 3;
  switch (mod) {
    case 0:
      ui.repeat.classList.add("repeat");
      ui.repeat.setAttribute("play-mode", "repeat");
      break;
    case 1:
      ui.repeat.classList.remove("repeat");
      ui.repeat.classList.add("repeat-all");
      ui.repeat.setAttribute("play-mode", "repeat-all");
      break;
    case 2:
      ui.repeat.classList.remove("repeat-all");
      ui.repeat.setAttribute("play-mode", "next");
      break;
  }
  clickNo++;
  ui.repeat.setAttribute("click-no", clickNo);
});

/* #song-list */

/* Fonctions */
const displayMusic = (music) => {
  ui.title.innerText = music.getName();
  ui.singer.innerText = music.singer;
  ui.image.src = `img/${music.img}`;
  ui.audio.src = `mp3/${music.audio}`;
};

const formatTime = (second) => {
  const min = Math.floor(second / 60);
  const sec = Math.floor(second % 60);
  let updatedSec = sec < 10 ? `0${sec}` : sec;
  return `${min}:${updatedSec}`;
};

const stopMusic = () => {
  ui.audio.pause();
  ui.controls.classList.remove("playing");
  ui.audio.currentTime = 0;
};

const pauseMusic = () => {
  ui.audio.pause();
  ui.controls.classList.remove("playing");
  ui.controls.querySelector("#play-pause").title = "Play";
};

const playMusic = () => {
  ui.audio.play();
  ui.controls.classList.add("playing");
  ui.controls.querySelector("#play-pause").title = "Pause";
};

const toggleMusic = () => {
  if (!isPlaying()) {
    playMusic();
  } else {
    pauseMusic();
  }
};

const previousMusic = () => {
  player.previous();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
};

const nextMusic = () => {
  player.next();
  let music = player.getMusic();
  displayMusic(music);
  playMusic();
};

const isPlaying = () => {
  const isPlaying = ui.controls.className.includes("playing");
  return isPlaying;
};
