import framework from '../../framework/elements.js';

export default class TabManager {
    constructor() {
        this.previousTab = undefined;
        this.mainWrapper = document.querySelector("div#body-inner-wrapper");
        this.browserView = document.querySelector("BrowserView");
        this.currentTab = {
            name: this.mainWrapper.getAttribute("current-page"),
            html: this.mainWrapper.innerHTML,
        };

        localStorage.setItem("current-page", this.currentTab.name);
    }

    setLoading() {
        this.previousTab = this.currentTab;
        this.currentTab = {
            name: "loading",
            html: `
                <h3>Loading...</h3>
            `
        }
        
        this.browserView.innerHTML = this.currentTab.html;        
    }

    displayHTML(r, meta_data) {
        this.previousTab = this.currentTab;
        meta_data["name"] == "TabManager" ? this.mainWrapper.innerHTML = r
            : this.browserView.innerHTML = r;

        const styling = document.createElement("link");
        const scripting = document.createElement('script');
        
        styling.href = `./css/${meta_data["name"]}.css`;
        styling.rel = "stylesheet";

        scripting.src = `./js/${meta_data["name"]}/index.js`;
        scripting.type = "module";
        scripting.defer = "defer";

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