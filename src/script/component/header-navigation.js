import BrandIcon from "../../assets/images/favicon.png";

class HeaderNavigation extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
        <style>
            .brand-icon {
                width: 48px;
                border-radius: 15px;
            }
            
            .navbar .navbar-brand {
                font-family: "Fira Sans Condensed", sans-serif;
                font-size: 2rem;
                margin-right: 8rem;
            }

            .navbar .nav-item {
                margin-left: 2rem;
            }

            .navbar .nav-item.active {
                font-weight: bold;
            }

            .navbar-nav  .nav-sidebar-item {
                font-family: "Open Sans", sans-serif;
                font-size: 0.8rem;
                margin-top: 0.5rem;
            }
        </style>
        <header class="container my-3">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a class="navbar-brand" href="#">
                    <img src="${BrandIcon}" class="brand-icon"> Foodima
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Receipes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Hotline</a>
                        </li>
                        <li class="nav-item d-sm-none d-md-none d-lg-block">
                            <a class="nav-link" href="#">
                            <i class="fa fa-search"></i>
                            </a>
                        </li>
                    </ul>
                    <div class="navbar-action d-sm-none d-md-none d-lg-block">
                        <span class="badge badge-dark rounded-circle">0</span>
                        <button type="button" class="btn rounded-pill">Log in</button>
                        <button type="button" class="btn btn-dark rounded-pill">
                            Sign Up
                        </button>
                    </div>
                </div>
            </nav>
        </header>`;
    }
}

customElements.define("header-navigation", HeaderNavigation);