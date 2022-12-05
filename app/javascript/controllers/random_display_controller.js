import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="random-display"
export default class extends Controller {
  static targets = ["image"]

  connect() {
    console.log("random display controller active")
    console.dir(this.imageTarget)
  }


}
