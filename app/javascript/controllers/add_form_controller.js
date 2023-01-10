import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="add-form"
export default class extends Controller {
  static targets = ["formContainer"]
  static values = {
    id: Number
  }
  connect() {
    console.log("Hello from add form");
  }

  renderForm(event) {
    console.log("RENDERING FORM");
    const worldId = event.target.getAttribute('data-world-id')

    fetch(`/worlds/${worldId}/sounds/new`)
      .then(response => response.text())
      .then(formHtml => {
        const htmlObject = document.createElement('dummyHTML');
        htmlObject.innerHTML = formHtml;
        const data = htmlObject.querySelector('.edit-sound-form').outerHTML;
        this.formContainerTarget.insertAdjacentHTML('beforeend', data);
      })
  }
}
