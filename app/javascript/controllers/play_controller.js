import { Controller } from "@hotwired/stimulus"

import {Howl} from 'howler';



// Connects to data-controller="play"
export default class extends Controller {
  static targets = ["sound"]
  connect() {
    console.log("Hello from play area");
  //   let sfx = new Howl({
  //     src: []
  // })

  }

  toggleSound(e) {
    console.log(e.target.dataset.soundFile);
    this.#getSoundFiles();
    let sfx = new Howl({
      src: [e.target.dataset.soundFile],
      loop: true,
      onend: function() {
        console.log("finished");
      }
    })
    sfx.playing() ? sfx.stop() : sfx.play();
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
