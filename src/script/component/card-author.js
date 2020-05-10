class CardAuthor extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
            @import "./node_modules/font-awesome/css/font-awesome.css";
            .card-author {
                margin-top: 10px;
                font-size: 9px;
                color: #525355;
            }

            .card-author .card {
                border: 1px solid #e4e4e4;
                border-radius: 5px;
                margin-bottom: 10px;
                padding: 10px;
            }

            .card-author .card a {
                text-decoration: none;
            }

            .card-author .card a:visited {
                color: #525355;
            }

            .my-3 {
                margin-top: 1rem;
                margin-bottom: 1rem;
            }
        </style>
        <hr class="my-3">
        <div class="card-author">
            <div class="card d-inline-block w-100">
                <i class="fa fa-credit-card"></i>
                <a href="https://idcamp.indosatooredoo.com/" target="_blank">
                    <span>Indosat Ooredoo Digital Camp</span>
                </a>
            </div>
            <div class="card d-inline-block w-100">
                <i class="fa fa-dribbble"></i>
                <a href="https://dribbble.com/shots/6685757-Vacation-House-Cooking-Landing-Page/attachments" target="_blank">
                    <span>Vacation House Cooking Page - By Cuberto</span>
                </a>
            </div>
            <div class="card d-inline-block w-100 mb-3">
                <span>Dicoding Submission &#169; 2020, Gunali Rezqi Mauludi</span>
            </div>
        </div>`;
    }
}

customElements.define("card-author", CardAuthor);