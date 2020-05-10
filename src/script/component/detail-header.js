import IconClock from "../../assets/images/clock-solid.svg";
import IconHatChef from "../../assets/images/hat-chef-solid.svg";
import IconUtensils from "../../assets/images/utensils-solid.svg";

class DetailHeader extends HTMLElement {

  set update(value) {
    this.setAttribute('title', value.title);
    this.setAttribute('sourcename', value.sourcename);
    this.setAttribute('preparationminutes', value.preparationminutes);
    this.setAttribute('servings', value.servings);
    this.setAttribute('summary', value.summary);
    this.render();
  }

  render() {
    this.title = this.getAttribute("title") || null;
    this.sourcename = this.getAttribute("sourcename") || null;
    this.preparationminutes = this.getAttribute("preparationminutes") || null;
    this.servings = this.getAttribute("servings") || null;
    this.summary = this.getAttribute("summary") || null;

    this.innerHTML = `
        <style>
            .breadcrumb {
                font-size: 0.7rem;
                background-color: transparent;
                padding: 0;
            }
            .breadcrumb .breadcrumb-item a {
                color: #6c757d;
            }
            .breadcrumb .breadcrumb-item.active {
                color: #000000;
            }
        </style>
        <h5>${this.title}</h5>
        <p class="author">${this.sourcename}</p>
        <div class="row recipe-details">
          <div class="col-12 col-md-4">
            <img src="${IconClock}" class="icon-detail-svg">
            <span>COOK : ${this.preparationminutes} MINS</span>
          </div>
          <div class="col-12 col-md-4">
            <img src="${IconHatChef}" class="icon-detail-svg">
            <span>EASY</span>
          </div>
          <div class="col-12 col-md-4">
            <img src="${IconUtensils}" class="icon-detail-svg">
            <span>SERVES ${this.servings}</span>
          </div>
          <div class="col-12 mt-3 text-justify">
            <p>${this.summary}</p>
          </div>
        </div>`;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("detail-header", DetailHeader);