import { Controller } from "@hotwired/stimulus"

import {Howl} from 'howler';

// Connects to data-controller
export default class extends Controller {
  static targets = ["speaker"]
  static values = {
    bgsm: String
  }

  // Create Howl object when page loads
  connect() {
    this.bgm = new Howl({
      src: `${this.bgsmValue}.mp3`,
      loop: true,
      volume: 0.1,
    })
  }

  disconnect() {
    Howler.unload();
    console.log("DISCONNECTED");
  }

  // Play-pause background music based on its current status
  pauseResume() {
    if (this.bgm.playing()) {
      this.bgm.pause();
      this.speakerTarget.classList.remove("fa-solid", "fa-volume-high", "text-success");
      this.speakerTarget.classList.add("fa-solid", "fa-volume-xmark", "text-danger");
      console.log("Pausing");
    } else {
      this.bgm.play();
      this.speakerTarget.classList.remove("fa-solid", "fa-volume-xmark", "text-danger");
      this.speakerTarget.classList.add("fa-solid", "fa-volume-high", "text-success");
      console.log("Playing");
    }
  }
}
