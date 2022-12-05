import { Controller } from "@hotwired/stimulus"

import {Howl} from 'howler';



// Connects to data-controller="play"
export default class extends Controller {
  static targets = ["sound", "bgm", "form"]
  static values = {
    bgsm: String
  }

  connect() {
    this.#playSounds();

  }

  #playSounds() {
    if (this.playingSounds != undefined) {
      this.playingSounds.forEach((howler) => {
        this.#getSoundFiles().forEach((sound) => {
          if (howler._src == sound.file) {
            howler.volume(sound.volume);
          }
        });
        // console.log(sound._src);

      });
    } else {
      this.playingSounds = [];
      this.#getSoundFiles().forEach((sound) => {
      let sfx = new Howl({
        src: sound.file,
        volume: sound.volume,
        loop: true,
        onend: function() {
        }
      });
      this.playingSounds.push(sfx)
      sfx.play();
    });
  }


  console.log(this.playingSounds);
  }

  playBgm() {
    let bgm = new Howl({
      src: `${this.bgsmValue}.mp3`,
      loop: true,
      volume: 0.3,
      onend: function() {
        // console.log("Stopped bgm");
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
        // console.log("Stopped");
      }
    })

    if (sfx.playing()) {
      sfx.pause()
    } else {
      sfx.play()
    }
  }

  send(e){
    e.preventDefault();
    console.log("FORM SUBMITTED");
    console.log(e.target);
    // TODO: submit form with ajax
    console.log(e.target);
    fetch(e.target.action, {
      method: e.target.method,
      headers: { "Accept": "application/json" },
      body: new FormData(e.target)
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        if (data.successful) {
          if (data.editForm) {
            console.log("edit form!!");
            e.target.outerHTML = data.editForm
          }
          this.soundTargets.forEach((sound) => {
            if (sound.dataset.soundId == data.mix_sound.sound_id) {
              sound.dataset.enabled = data.mix_sound.volume > 0 ? true : false;
              sound.dataset.volume = data.mix_sound.volume;
            }
          });
          this.#playSounds();
        }
      });
  }

  changeVolume(e) {
    console.log(e.target);
    console.log(e.target.dataset.sound);
    this.formTargets.forEach((form) => {
      if (form.dataset.sound == e.target.dataset.sound) {
        console.log(form);
        form.requestSubmit();
      }
    });
  }

  #getSoundFiles() {
    const array = [];
    this.soundTargets.forEach((element) => {
        array.push({file: `${element.dataset.soundFile}.mp3`,
                    volume: element.dataset.volume / 10});

    });

    console.log(array);
    return array;
  }
}
