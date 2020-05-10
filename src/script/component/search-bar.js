class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
        <style>
            input[type="search"] {
                background-color: #f8f8f8;
                border: 0;
            }

            input[type="search"]::placeholder {
                font-size: 0.8rem;
                color: $gray-500;
            }

            .search-container {
                display: flex;
            }
                
            .search-container .form-control {
                padding-left: 3rem;
            }

            .search-container .placeholder-icon {
                position: absolute;
                z-index: 2;
                display: block;
                width: 3rem;
                height: 2.375rem;
                line-height: 2.375rem;
                text-align: center;
                pointer-events: none;
                color: $gray-500;
            }
        </style>
        <div class="search-container form-group">
            <span class="fa fa-search placeholder-icon"></span>
            <input placeholder="Search receipes and more..." class="form-control mr-sm-2" id="searchElement" type="search">
            <button class="btn btn-dark" id="searchButtonElement" type="button">Search</button>
        </div>`;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);