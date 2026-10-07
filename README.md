# Music Player Practice

A simple music player built with **HTML, CSS, and JavaScript** as part of my JavaScript practice.

## Live Demo

https://ismailturkoglu.github.io/music-player-practice/

## Features

* Play / pause music
* Stop music
* Previous / next track
* Music progress bar
* Current time and duration display
* Volume control
* Mute / unmute
* Three repeat modes:

  * Repeat current song
  * Repeat all songs
  * Play next song
* Song list with track durations
* Select and play songs from the song list
* Active song indication
* Responsive design for mobile devices

## Technologies

* HTML5
* CSS3
* JavaScript (ES6+)
* Bootstrap 5.3.8
* Font Awesome 7.3.1
* Google Fonts

## Project Structure

```text
music-player-practice/
│
├── index.html
├── style.css
│
├── js/
│   ├── app.js
│   ├── data.js
│   ├── music.js
│   ├── music-player.js
│   └── ui.js
│
├── img/
│   ├── 1.jpeg
│   ├── 2.jpeg
│   ├── 3.jpeg
│   ├── 4.jpeg
│   └── 5.jpeg
│
└── mp3/
    ├── 1.mp3
    ├── 2.mp3
    ├── 3.mp3
    ├── 4.mp3
    └── 5.mp3
```

## JavaScript Structure

### `Music`

Represents a music track and stores its title, singer, image, and audio file.

### `MusicPlayer`

Manages the music list and the current track index.

### `UI`

Stores references to the elements used by the application.

### `app.js`

Handles the player logic, user interactions, audio events, controls, song list, volume, progress bar, and repeat modes.

## Songs

The project currently includes:

1. Yakar Geçerim — Ajda Pekkan
2. Deli Kız — Buray
3. Unuttun Mu Beni — Sezen Aksu
4. Yolla — Tarkan
5. Uslanmıyor Bu — Zeynep Bastık

## Purpose

This project was created to practice:

* JavaScript classes
* DOM manipulation
* Event listeners
* HTML5 Audio API
* Dynamic HTML generation
* Array and object management
* JavaScript functions
* Responsive CSS
* Bootstrap components and utilities
