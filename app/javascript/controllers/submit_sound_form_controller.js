import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="submit-sound-form"
export default class extends Controller {
  static targets = [ "name", "path", "startx", "starty", "height", "width", "audio" ]
  
  connect() {
    console.log("Hello from submit sound form");
  }

  submit(event) {
    event.preventDefault();
    const url = event.target.action
    let csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    let name = this.nameTarget.value
    let path = this.pathTarget.value
    let startx = this.startxTarget.value
    let starty = this.startyTarget.value
    let height = this.heightTarget.value
    let width = this.widthTarget.value
    let audio = this.audioTarget.value
    console.log(csrfToken);
    fetch(url, {
      method: event.target.method,
      body: JSON.stringify({ sound: { name: name, path: path, start_x: startx, start_y: starty, height: height, width: width, audio: audio } }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'X-CSRF-Token': csrfToken
      }
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      })
  }
}
