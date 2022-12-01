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
    this.#getSoundFiles();
    let sfx = new Howl({
      src: [e.target.dataset.soundFile],
      // loop: true,
      onend: function() {
        console.log("finished");
      }
    })
    // sfx.playing() ? sfx.stop() : sfx.once('load', function(){ sfx.play(); });
    if (sfx != null) {
      sfx.pause();
    } else {
      sfx.once('load', function(){ sfx.play(); });
      console.log("PAUSING");
    }
  }

  #getSoundFiles() {
    const array = [];
    this.soundTargets.forEach((element) => {
      array.push(element.dataset.soundFile);
    });

    console.log(array);
    return array
  }
}
