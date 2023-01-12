import { Controller } from "@hotwired/stimulus"
import selection from "@simonwep/selection-js"

let showSelection = false;
let Xstart;
let Ystart;
export default class extends Controller {
  static targets = ["selectionArea",
                    "selection",
                    "audioForm",
                    "name",
                    "path",
                    "startx",
                    "starty",
                    "height",
                    "width"];
  

  clickDown(event) {
    showSelection = true;

    Xstart = event.pageX;
    Ystart = event.pageY;

    const div = document.createElement("div");
    div.id = 'selection'
    div.style.left = `${Xstart + 'px'}`;
    div.style.top = `${Ystart + 'px'}`;
    div.setAttribute('data-selection-area-target', 'selection');
    this.selectionAreaTarget.insertAdjacentHTML('beforeend', div.outerHTML);
  }
  
  clickMove(event) {
    if (showSelection == true) {
      // Horizontal selection
      if (event.pageX > Xstart) {
        // left to right
        this.selectionTarget.style.width = `${event.pageX - Xstart + 'px'}`;
      } else {
        // right to left
        this.selectionTarget.style.left = `${event.pageX}px`;
        this.selectionTarget.style.width = `${Xstart - event.pageX + 'px'}`;
      }

      // Vertical selection
      if (event.pageY > Ystart) {
        // top to bottom
        this.selectionTarget.style.height = `${event.pageY - Ystart + 'px'}`;
      } else {
        // bottom to top
        this.selectionTarget.style.top = `${event.pageY}px`;
        this.selectionTarget.style.height = `${Ystart - event.pageY + 'px'}`;
      }
    }
  }
  
  clickUp(event) {

    // borrow values from #seleciton div
    const leftValue = this.selectionTarget.style.left;
    const topValue = this.selectionTarget.style.top;
    const widthValue = this.selectionTarget.style.width;
    const heightValue = this.selectionTarget.style.height;
    const finalDiv = document.createElement("div");
    finalDiv.classList.add('area');
    finalDiv.style.left = leftValue;
    finalDiv.style.top = topValue;
    finalDiv.style.width = widthValue;
    finalDiv.style.height = heightValue;
    this.selectionAreaTarget.insertAdjacentHTML('beforeend', finalDiv.outerHTML);
    
    // Removing selection div from DOM
    this.selectionTarget.remove();

    showSelection = false;

    this.audioFormTarget.style = "";

    this.startxTarget.value = parseFloat(leftValue.replace('px', ''));
    this.startyTarget.value = parseFloat(topValue.replace('px', ''));
    this.widthTarget.value = parseFloat(widthValue.replace('px', ''));
    this.heightTarget.value = parseFloat(heightValue.replace('px', ''));

  }

  addDisplayNone() {
    this.audioFormTarget.style = "display: none;";
    
  }
}
