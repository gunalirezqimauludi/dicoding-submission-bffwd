import 'bootstrap';
import "regenerator-runtime";
import "./scss/style.scss";

// main-section
import "./script/component/header-navigation.js";
import "./script/component/header-jumbotron.js";
import "./script/component/card-author.js";

// detail-section
import "./script/component/breadcrumb-detail.js";
import "./script/component/detail-header.js";

import main from "./script/view/main.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

document.addEventListener("DOMContentLoaded", main);