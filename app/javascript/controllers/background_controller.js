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
      volume: 0.3,
      preload: true,
      autoplay: true,
      onend: function() {
        // console.log("Stopped bgm");
      }
    })
    bgm.play()
    console.log("PLAYING ON SHOW BGM");
  }
}
