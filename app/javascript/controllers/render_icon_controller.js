import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="render-icon"
export default class extends Controller {
  static values = {
    image: String,
    name: String
  }
  static targets = ["button", "bgi"]

  connect() {
    console.log("hello from render")
    // console.log(this.imageValue)
  }

  renderOnClick(event) {
    event.preventDefault()

    console.log(this.buttonTarget)

    // Fetch img url from cloudinary
    const new_background_image = this.imageValue
    console.log(new_background_image)

    // Target element where you want to replace the url
    const imageContainer = document.querySelector('.image-container');
    console.log(imageContainer)

    // Change the attribute with the new url
    imageContainer.style.backgroundImage = `url(${new_background_image})`
    console.log(imageContainer)

    // Change the name of the mix selected
    const mixName = document.querySelector('.mix-name-display')
    // console.log(mixName)
    mixName.innerHTML = this.nameValue

    // Replace class hidden with mix-overlay to show audio control
    const audioControl = document.querySelector('.hidden')
    console.log(audioControl)
    audioControl.classList.remove("hidden")
    audioControl.classList.add("mix-overlay")
  }
}
