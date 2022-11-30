import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="play"
export default class extends Controller {
  static targets = ["rain", "guy"]
  connect() {
    console.log("Hello from play area");
  }

  rain() {
    console.log("Hello from rain target");
  }

  guy() {
    console.log("Hello from guy target");
  }
}
