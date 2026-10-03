class Music {
  constructor(title, singer, img, audio) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.audio = audio;
  }
  getName() {
    return this.title + this.singer;
  }
}
