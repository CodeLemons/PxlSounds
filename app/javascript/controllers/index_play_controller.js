import { Controller } from "@hotwired/stimulus"
import { Howl } from "howler";

// Connects to data-controller="index-play"
export default class extends Controller {
  static targets = ["mix", "button", "volume", "play", "stop"]
  static values = {
    sound: Array,
  }

  connect() {
    this.volumeTarget.value = this.volumeTarget.value;
    this.audioContext = new AudioContext();
  }

  disconnect() {
    Howler.unload();
    Howler.volume(1);
  }


  chooseMix(e) {
    e.preventDefault()
    console.log(this.sfx)
    if (this.sfx != undefined) {
      if (this.sfx.playing()) {
        Howler.unload();
        if (this.playTarget.classList.contains("d-none")) {
          this.playTarget.classList.remove("d-none");
          this.stopTarget.classList.add("d-none");
        }
      }
    }

    let target = e.target;
    while (this.buttonTargets.indexOf(target) == -1) {
      target = target.parentElement;
    }
    this.mixTargets.forEach((mix) => {
      mix.dataset.playing = false
    })

    console.log(e)
    console.log(e.target)
    console.log(target)
    this.dispatch("showMix", { target: target })

    target.parentElement.dataset.playing = true
  }

  playMix() {
    // console.log(this.mixTargets)
    this.stopTarget.classList.remove("d-none");
    this.playTarget.classList.add("d-none");
    Howler.unload();
    this.volumeTarget.value = 0.5;
    Howler.volume(0.5);
    this.mixTargets.forEach((object) => {
      console.log(object.dataset.playing)
      if (object.dataset.playing == "true"){
        console.log(object.dataset.soundValue)
        console.log(object.dataset.bgmValue);
        let parsed_array = JSON.parse(object.dataset.soundValue)
        parsed_array.forEach(sound => {
           this.sfx = new Howl({
            src: `${sound.src}.mp3`,
            volume: sound.volume,
            loop: true,
            onend: function() {

            }
          });
          this.sfx.volume(0.3);
          this.sfx.play();
        });
        let bgm = new Howl({
          src: `${object.dataset.bgmValue}.mp3`,
          volume: 0,
          loop: true,
        })

        // let tempVolume = this.bgm.volume();
        // this.bgm.seek(30);
        // this.bgm.fade(2, "in");
        bgm.seek(Math.floor(Math.random() * (60 - 30 + 1)) + 30);
        let interval = setInterval(function() {
          let currentVolume = bgm.volume();
          if (currentVolume < 0.3) {
            bgm.volume(currentVolume + 0.01);
          } else {
            clearInterval(interval);
          }
        }, 200);
        // bgm.volume(0.3)
        bgm.play();
      }

    })

  }

  stopMix() {
    this.playTarget.classList.remove("d-none");
    this.stopTarget.classList.add("d-none");
    // console.log(this.sfx.pause());
    Howler.unload();
  }

  change() {

   Howler.volume(this.volumeTarget.value)

  }
}
