import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="render-icon"
export default class extends Controller {
  static targets = ["button"]
  connect() {
    console.log("hello from render")

  }

  renderOnClick(event) {
    console.log(this.buttonTarget)
    event.preventDefault()
  }
}
