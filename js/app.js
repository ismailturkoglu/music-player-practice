const player = new MusicPlayer(musicList);

console.log(player.getMusic().getName());
player.next();
console.log(player.getMusic().getName());
