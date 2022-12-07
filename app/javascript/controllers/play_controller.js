import { Controller } from "@hotwired/stimulus"

import {Howl} from 'howler';



// Connects to data-controller="play"
export default class extends Controller {
  static targets = ["sound", "bgm", "form", "icon"]
  static values = {
    bgsm: String
  }

  connect() {
    // this.playBgm();
    this.#playSounds();

    this.bgm = new Howl({
      src: `${this.bgsmValue}.mp3`,
      loop: true,
      volume: 0.15,
      autoplay: true,
    });

  }

  pauseResume() {
    if (this.bgm.playing()) {
      this.bgm.pause();
      this.bgmTarget.classList.remove("fa-solid", "fa-volume-high", "text-success",  "fa-2xl", "bgm-button");
      this.bgmTarget.classList.add("fa-solid", "fa-volume-xmark", "text-danger", "fa-2xl", "bgm-button");

      console.log("Pausing");
    } else {
      this.bgm.play();
      this.bgmTarget.classList.remove("fa-solid", "fa-volume-xmark", "text-danger", "fa-2xl", "bgm-button");
      this.bgmTarget.classList.add("fa-solid", "fa-volume-high", "text-success", "fa-2xl", "bgm-button");
      // this.bgmTarget.classList.replace("fa-solid fa-volume-high.bgm-button", "fa-solid fa-volume-xmark.bgm-button")
      console.log("Playing");
    }
  }


  disconnect() {
    Howler.unload();
    console.log("DISCONNECTED");
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


    // console.log(this.playingSounds);
    // return sfx.play();
  }

  // playBgm() {
  //   let bgm = new Howl({
  //     src: `${this.bgsmValue}.mp3`,
  //     loop: true,
  //     volume: 0.3,
  //     autoplay: true,
  //     onend: function() {
  //       // console.log("Stopped bgm");
  //     }
  //   })
  //   bgm.play()
  //   console.log("PLAYING BGM");
  // }

  toggleSound(e) {
    console.log(this.#getSoundFiles())
    let sfx = new Howl({
      src: this.#getSoundFiles(),
      // loop: true,
      onend: function() {
        // console.log("Stopped");
      }
    })

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
              console.log("Volume changed");
              console.log(e.target)
              console.log(e.target.children[4])
              if (sound.dataset.volume == 0) {
                e.target.querySelector("i").classList.remove("fa-solid", "fa-volume-xmark", "text-danger", "fa-volume-low", "text-warning", "fa-volume-high", "text-success")
                e.target.querySelector("i").classList.add("fa-solid", "fa-volume-xmark", "text-danger")
              } else if (sound.dataset.volume < 3) {
                e.target.querySelector("i").classList.remove("fa-solid", "fa-volume-xmark", "text-danger", "fa-volume-low", "text-warning", "fa-volume-high", "text-success")
                e.target.querySelector("i").classList.add("fa-solid", "fa-volume-low", "text-warning")
              } else {
                e.target.querySelector("i").classList.remove("fa-solid", "fa-volume-xmark", "text-danger", "fa-volume-low", "text-warning", "fa-volume-high", "text-success")
                e.target.querySelector("i").classList.add("fa-solid", "fa-volume-high", "text-success")
              }
            }
          });
          this.#playSounds();
        }
      });
  }

  changeVolume(e) {
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
