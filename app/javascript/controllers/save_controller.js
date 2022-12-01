import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="save"
export default class extends Controller {
  static targets = ["form", "save", "close"]
  connect() {
    console.log("hello from save controller")
  }

  saveButton() {
    this.formTarget.classList.remove("hidden")
    this.saveTarget.classList.add("hidden")
  }

  closeButton(e) {
    this.formTarget.classList.add("hidden")
    this.saveTarget.classList.remove("hidden")
  }
}