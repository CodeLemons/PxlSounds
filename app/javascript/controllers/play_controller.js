import { Controller } from "@hotwired/stimulus"

import {Howl} from 'howler';



// Connects to data-controller="play"
export default class extends Controller {
  static targets = ["sound"]
  connect() {
    this.#getSoundFiles().forEach((sound) => {
      let sfx = new Howl({
        src: sound.file,
        volume: sound.volume,
        onend: function() {
          console.log("Stopped");
        }
      })
      sfx.play();
    });

  }

  toggleSound(e) {
    // console.log(e.target.dataset.soundFile);
    // this.#getSoundFiles();
    let sfx = new Howl({
      src: this.#getSoundFiles(),
      // loop: true,
      onend: function() {
        console.log("Stopped");
      }
    })

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
