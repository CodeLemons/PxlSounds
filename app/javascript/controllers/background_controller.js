import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="background"
export default class extends Controller {
  static values = {
    bgm: String
  }
  connect() {
    this.#playBgm();
  }

  disconnect() {
    Howler.unload();
    console.log("DISCONNECTED");
  }

  #playBgm() {
    let bgm = new Howl({
      src: `${this.bgmValue}.mp3`,
      loop: true,
      volume: 0,
      autoplay: true,
      onend: function() {
        // console.log("Stopped bgm");
      }
    })
    // bgm.seek(Math.floor(Math.random() * (60 - 30 + 1)) + 30);
    let interval = setInterval(function() {
      let currentVolume = bgm.volume();
      if (currentVolume < 0.4) {
        bgm.volume(currentVolume + 0.001);
      } else {
        clearInterval(interval);
      }
    }, 200);
    bgm.play()
    console.log("PLAYING ON SHOW BGM");
  }
}
