import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="random-display"
export default class extends Controller {
  static targets = ["bgi"]

  connect() {
    console.log("random display controller active")
    console.log(this.bgiTarget)
  }


}
