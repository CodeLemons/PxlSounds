import { Controller } from "@hotwired/stimulus"
import { Howl } from "howler";

// Connects to data-controller="index-play"
export default class extends Controller {
  static targets = ["mix", "button", "volume"]
  static values = {
    sound: Array,
  }

  connect() {
    this.volumeTarget.value = this.volumeTarget.value
  }

  chooseMix(e) {
    e.preventDefault()
    console.log(this.sfx)
    if (this.sfx != undefined) {
      if (this.sfx.playing()) {
        Howler.unload()
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

    this.mixTargets.forEach((object) => {
      console.log(object.dataset.playing)
      if (object.dataset.playing == "true"){
        console.log(object.dataset.soundValue)
        let parsed_array = JSON.parse(object.dataset.soundValue)
        parsed_array.forEach(sound => {
           this.sfx = new Howl({
            src: `${sound.src}.mp3`,
            volume: sound.volume,
            loop: true,
            onend: function() {

            }
          });

          this.sfx.play();
        });
      }

    })

  }

  change() {

   Howler.volume(this.volumeTarget.value)

  }
}
