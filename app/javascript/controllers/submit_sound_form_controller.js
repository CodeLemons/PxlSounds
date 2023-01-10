import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="submit-sound-form"
export default class extends Controller {
  static targets = ["fields"]
  
  connect() {
    console.log("Hello from submit sound form");
  }

  submit(event) {
    event.preventDefault();
    const url = event.target.action

    let name = this.fieldsTarget.children[0].value;
    let path = this.fieldsTarget.children[1].value;

    fetch(url, {
      method: event.target.method,
      body: JSON.stringify({ name: name, path: path }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data);
      })
  }
}
