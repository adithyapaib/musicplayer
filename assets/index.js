
let play = document.getElementById("play");
play.addEventListener("click", music);
let next = document.getElementById("next");
next.addEventListener("click", next_music);
let circle = document.getElementById('circle');
let song = new Audio;
let source = ['/assets/music1.mp3','/assets/music2.mp3','/assets/music3.mp3']
song.src = source[Math.floor(Math.random()*source.length)]
function music()
 {
    
     if (song.paused) {
         song.play()
         console.log("Song Played");
         state = false;
         circle.style.animation='rotation 25s infinite linear forwards';
         

     }
     else
     {
         song.pause()
         console.log("Song Pause");
         circle.style.animation='none';
     }
     
     
 }
 function next_music()
 {
     song.pause()
     song.src = source[Math.floor(Math.random()*source.length)]
     song.play()
     circle.style.animation='rotation 25s infinite linear forwards';
 }