class MusicPlayer {
  constructor(list) {
    this.list = list;
    this.index = 0;
  }

  getMusic() {
    return this.list[this.index];
  }

  next() {
    if (this.index + 1 < this.list.length) {
      this.index += 1;
    } else {
      this.index = 0;
    }
  }

  previous() {
    if (this.index > 0) {
      this.index -= 1;
    } else {
      this.index = this.list.length;
    }
  }
}
