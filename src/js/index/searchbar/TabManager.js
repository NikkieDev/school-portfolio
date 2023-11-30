import framework from '../../framework/elements.js';

export default class TabManager {
    constructor() {
        this.previousTab = undefined;
        this.mainWrapper = document.querySelector("div#body-inner-wrapper");
        this.browserView = document.querySelector("div#browser-view");
        this.currentTab = {
            name: this.mainWrapper.getAttribute("current-page"),
            html: this.mainWrapper.innerHTML,
        };

        localStorage.setItem("current-page", this.currentTab.name);
    }

    setDisplay() {
        this.browserView.innerHTML = this.currentTab.html;
    }

    setLoading() {
        this.previousTab = this.currentTab;
        this.currentTab = {
            name: "loading",
            html: `
                <h3>Loading...</h3>
            `
        }
        
        this.setDisplay(this.currentTab);
    }

    setNewTab(newHTML) {
        this.previousTab = this.currentTab;
        this.currentTab.html = newHTML.content;
        this.browserView = this.currentTab.html;
    }

    displayManager(r) {
        this.previousTab = this.currentTab;
        this.mainWrapper.innerHTML = r

        const styling = document.createElement("link");
        const scripting = document.createElement('script');
        
        styling.href = "./css/TabManager.css";
        styling.rel = "stylesheet";

        scripting.src = "./js/TabManager/index.js";
        scripting.type = "module";
        scripting.defer = "defer";

        document.getElementsByTagName("head")[0].appendChild(styling);
        document.getElementsByTagName("head")[0].appendChild(scripting);
        framework.RegisterAll();
    }

    displayError(error) { // mockup code
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