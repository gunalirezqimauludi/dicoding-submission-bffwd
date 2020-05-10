import '../component/receipe-category.js';
import '../component/receipe-list.js';
import '../component/search-bar.js';
import "../component/dropdown-sort.js";

import DataSource from '../data/data-source.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const receipeListElement = document.querySelector("receipe-list");
    const clearFilterElement = document.querySelector("#clearFilter");
    const loaderElement = document.querySelector("#loader-text");

    const onButtonSearchClicked = () => {
        searchRecipe(searchElement.value);
    };

    const searchRecipe = async (keyword) => {
        loaderElement.style.display = 'block';

        try {
            const result = await DataSource.searchRecipe(keyword);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = results => {
        loaderElement.style.display = 'none';
        receipeListElement.receipes = results;
    };

    const fallbackResult = message => {
        loaderElement.style.display = 'none';
        receipeListElement.renderError(message);
    };

    // Default List Receipe
    searchRecipe('desserts');

    // Search Receipe
    searchElement.clickEvent = onButtonSearchClicked;

    // Filter Categories
    const checkbox = document.querySelectorAll("input[type=checkbox]")
    checkbox.forEach(item => {
        item.addEventListener("click", function () {
            const category = this.getAttribute("data-item");
            searchRecipe(category);
        });
    })

    // Clear Filter Categories
    clearFilterElement.addEventListener("click", function () {
        const checkbox = document.querySelectorAll("input[type=checkbox]")
        checkbox.forEach(item => {
            item.checked = false;
        })
    });
};

export default main;