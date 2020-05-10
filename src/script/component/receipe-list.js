import "../component/receipe-item.js";

class ReceipeList extends HTMLElement {

    set receipes(items) {
        this._items = items;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this.className = "row row-cols-1 row-cols-sm-2 row-cols-md-3";
        this._items.forEach(item => {
            const receipeItemElement = document.createElement("receipe-item");
            receipeItemElement.receipe = item;
            this.appendChild(receipeItemElement);
        })
    }

    renderError(message) {
        this.innerHTML = `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                text-align: center;
            }
        </style>`;
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
}

customElements.define("receipe-list", ReceipeList);