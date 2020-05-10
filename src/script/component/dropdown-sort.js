class DropdownSort extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <div class="dropdown d-none d-md-block">
            <button class="btn btn-dark rounded-pill dropdown-toggle" type="button" data-toggle="dropdown">
                Sort by: <span id="sort-selected">Newest</span>
            </button>
            <div class="dropdown-menu">
                <a class="dropdown-item" href="javascript:void(0)">Newest</a>
                <a class="dropdown-item" href="javascript:void(0)">Name (A-Z)</a>
                <a class="dropdown-item" href="javascript:void(0)">Name (Z-A)</a>
                <a class="dropdown-item" href="javascript:void(0)">Rating (Highests)</a>
                <a class="dropdown-item" href="javascript:void(0)">Rating (Lowest)</a>
            </div>
        </div>`;

        const dropdownItem = document.querySelectorAll(".dropdown-item");
        dropdownItem.forEach(item => {
            item.addEventListener("click", function () {
                document.querySelector("#sort-selected").innerText = this.textContent;
            });
        })
    }
}

customElements.define("dropdown-sort", DropdownSort);