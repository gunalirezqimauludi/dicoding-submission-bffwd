class BreadcrumbDetail extends HTMLElement {

    set currentPage(value) {
        this.setAttribute('currentpage', value);
        this.render();
    }

    render() {
        this.currentpage = this.getAttribute("currentpage") || null;

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
        <nav class="d-flow-root" aria-label="breadcrumb">
            <ol class="breadcrumb mt-2 float-left">
                <li class="breadcrumb-item"><a href="#">Receipe</a></li>
                <li class="breadcrumb-item active" aria-current="page">${this.currentpage}</li>
            </ol>
            <button id="backToLanding" class="btn btn-outline-danger rounded-pill float-right"><i class="fa fa-arrow-left"></i> Back</button>
        </nav>`;

        $('#backToLanding').click(function() {
            $('main').show();
            $('.details').hide();
        });
    }

    connectedCallback() {
        this.render();
    }
}

customElements.define("breadcrumb-detail", BreadcrumbDetail);