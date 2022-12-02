import { Controller } from "@hotwired/stimulus"

import {Howl} from 'howler';



// Connects to data-controller="play"
export default class extends Controller {
  static targets = ["sound", "bgm"]
  static values = {
    bgsm: String
  }

  connect() {
    // console.log(this.bgsmValue);
    // console.log(`${this.cloudValue}.mp3`);
    // let bgm = new Howl({
    //   src: `${this.cloudValue}.mp3`,
    //   loop: true,
    //   onend: function() {
    //     console.log("Stopped bgm");
    //   }
    // })
    // bgm.play()

    // console.log(this.bgmTarget);

    // console.log(`${this.cloudValue}.resume`);

    this.#getSoundFiles().forEach((sound) => {
      let sfx = new Howl({
        src: sound.file,
        volume: sound.volume,
        loop: true,
        onend: function() {
          console.log("Stopped");
        }
      })
      // let bgm = new Howl({
      //   src: sound.bgm,
      //   volume: 1,
      //   onend: function() {
      //     console.log("stopped bgm");
      //   }
      // })
      // bgm.play();
      sfx.play();
    });

  }

  playBgm() {
    let bgm = new Howl({
      src: `${this.bgsmValue}.mp3`,
      loop: true,
      onend: function() {
        console.log("Stopped bgm");
      }
    })
    bgm.play()
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
