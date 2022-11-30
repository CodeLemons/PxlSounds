import {Howl} from 'howler';


var sfx = new Howl({
    src: [
      'https://assets.codepen.io/21542/howler-push.mp3'
    ]
})

document.querySelector(".button-a").addEventListener("click", () => {
   sfx.play();
})
