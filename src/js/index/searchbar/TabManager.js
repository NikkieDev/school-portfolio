export default class TabManager {
    constructor() {
        this.previousTab = undefined;
        this.mainWrapper = document.querySelector("div#body-inner-wrapper");
        this.browserView = document.querySelector("div#browser-view");
        this.currentTab = {
            name: this.mainWrapper.getAttribute("current-page"),
            html: this.mainWrapper.innerHTML,
        };
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
    }

    displayManager() {

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