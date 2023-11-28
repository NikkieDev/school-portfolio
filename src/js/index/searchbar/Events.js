import TabManager from './TabManager.js';

export default class SearchbarEventListener {
    static { 
        this.tabManager = new TabManager();
    }

    async handleNewTab() {
        this.tabManager.setLoading();
        await fetch("/views/AboutView.html");
        // document.querySelector("BrowserView").innerHTML = "kanker";
    }
    
    static async handleOpenTabMngr() {
        this.tabManager.setLoading();
        await fetch("./views/TabManagerView.html")
        .then(r => r.text()).then(r => this.tabManager.displayManager(r))
        .catch(e => this.tabManager.displayError(e));
    }

    static __init() {
        this.tabManagerBtn = document.querySelector("CustomNavButton#tabManager");
        this.tabManagerBtn.addEventListener("click", async e => await this.handleOpenTabMngr());
    }
}