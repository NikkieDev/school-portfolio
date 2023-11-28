export default class TabManager {
    constructor() {
        this.previousTab = undefined;
        this.currentTab = document.querySelector("div#body-inner-wrapper").getAttribute("current-page");
        this.kanker = 0;
    }

    setLoading() {

    }

    setNewTab(newHTML) {

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