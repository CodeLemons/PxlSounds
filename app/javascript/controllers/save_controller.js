import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="save"
export default class extends Controller {
  static targets = ["form", "save", "close", "sound"]
  connect() {
    // console.log("hello from save controller")
  }

  saveButton() {
    this.saveTarget.classList.toggle("show")
    // this.formTarget.classList.remove("hidden")
    // this.saveTarget.classList.add("hidden")
  }

  closeButton(e) {
    // this.formTarget.classList.add("hidden")
    // this.saveTarget.classList.remove("hidden")
  }

  update(e) {
    e.preventDefault();
    console.log("Hello");
    fetch(e.target.action, {
      method: e.target.method,
      headers: { "Accept": "application/json" },
      body: new FormData(e.target)
    })
      .then(response => response.json())
      .then((data) => {console.log(data);})
  }

  // soundButton() {
  //   this.soundTarget.classList.toggle('show')
  // }
}
