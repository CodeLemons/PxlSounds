import { Controller } from "@hotwired/stimulus"

import {Howl} from 'howler';



// Connects to data-controller="play"
export default class extends Controller {
  static targets = ["sound"]
  connect() {
    console.log("Hello from play area");
  }

  toggleSound(e) {
    console.log(e.target.dataset.soundFile);
    // this.#getSoundFiles();
    let sfx = new Howl({
      src: this.#getSoundFiles(),
      // loop: true,
      onend: function() {
        console.log("Stopped");
      }
    })
    // sfx.playing() ? sfx.stop() : sfx.once('load', function(){ sfx.play(); });
    if (sfx == null) {
      sfx.play();
    } else {
      // sfx.once('load', function(){ sfx.play(); });
      sfx.stop();
      // console.log("PAUSING");
    }
    console.log(this.#getSoundFiles());
    sfx.play();
  }

  #getSoundFiles() {
    const array = [];
    this.soundTargets.forEach((element) => {
      array.push(`${element.dataset.soundFile}.mp3`);
    });

    console.log(array);
    return array
  }
}
