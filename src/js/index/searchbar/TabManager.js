import framework from '../../framework/elements.js';

export default class TabManager {
    constructor() {
        this.previousTab = undefined;
        this.mainWrapper = document.querySelector("div#body-inner-wrapper");
        this.currentTab = {
            name: this.mainWrapper.getAttribute("current-page"),
            html: this.mainWrapper.innerHTML,
        };

        localStorage.setItem("current-page", this.currentTab.name);
    }

    setLoading() {
        this.browserView = document.querySelector("browserview");
        this.previousTab = this.currentTab;
        this.currentTab = {
            name: "loading",
            html: `
                <h3>Loading...</h3>
            `
        }
        
        this.browserView.innerHTML = this.currentTab.html;        
    }

    setPage(r, data) {
        this.previousTab = this.currentTab;
        this.currentTab = { name: data["name"], html: r, scripts: data["scripts"], css: data["css"] };
        this.mainWrapper.setAttribute("current-page", this.currentTab.name);
    }

    displayHTML(r, meta_data) {
        const data = {
            name: meta_data
        }
        this.browserView = document.querySelector("browserview");

        if (meta_data == "TabManager") {
            this.mainWrapper.innerHTML = r;
        } else {
            this.browserView.innerHTML = r;
        }

        const styling = document.createElement("link");
        const scripting = document.createElement('script');

        console.log(meta_data);
        styling.href = `./css/${meta_data}.css`;
        styling.rel = "stylesheet";

        scripting.src = `./js/${meta_data}/index.js`;
        scripting.type = "module";
        scripting.defer = "defer";

        data.script = scripting;
        data.css = styling;
        this.setPage(r, data);

        document.getElementsByTagName("head")[0].appendChild(styling);
        document.getElementsByTagName("head")[0].appendChild(scripting);
        framework.RegisterAll();
    }

    displayLayout() {
        this.mainWrapper.innerHTML = this.previousTab.html; 
        this.previousTab = this.currentTab;
    }

    displayError(error) { // mockup code
        // would have
        const newHTML = `
            <div class="d-flex flex-column justify-content-center align-items-center">
                <img src="/error_96x96.png">
                <div>
                    div#error > <p class="h3">An error has occured</p>
                    <span> Error text here </span>

                    button -> go back .bg-warning
                </div>
            </div>
        `
    }
}