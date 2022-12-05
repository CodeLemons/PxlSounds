import { Controller } from "@hotwired/stimulus"

import {Howl} from 'howler';



// Connects to data-controller="play"
export default class extends Controller {
  static targets = ["sound", "bgm"]
  static values = {
    bgsm: String
  }

  connect() {
    this.#getSoundFiles().forEach((sound) => {
      let sfx = new Howl({
        src: sound.file,
        volume: sound.volume,
        loop: true,
        onend: function() {
          console.log("Stopped");
        }
      })

      sfx.play();
    });

  }

  playBgm() {
    let bgm = new Howl({
      src: `${this.bgsmValue}.mp3`,
      loop: true,
      volume: 0.3,
      onend: function() {
        console.log("Stopped bgm");
      }
    })
    bgm.play()
  }

  toggleSound(e) {
    console.log(this.#getSoundFiles())
    let sfx = new Howl({
      src: this.#getSoundFiles(),
      // loop: true,
      onend: function() {
        console.log("Stopped");
      }
    })

    if (sfx.playing()) {
      sfx.pause()
    } else {
      sfx.play()
    }
  }

  #getSoundFiles() {
    const array = [];
    this.soundTargets.forEach((element) => {
      if (element.dataset.enabled == "true") {
        array.push({file: `${element.dataset.soundFile}.mp3`,
                    volume: element.dataset.volume / 10});
      }
    });

    console.log(array);
    return array;
  }
}
