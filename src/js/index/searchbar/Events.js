import TabManager from './TabManager.js';

export default class SearchbarEventListener {
    static { this.tabManager = new TabManager(); }

    async handleNewTab() {
        this.tabManager.setLoading();
        await fetch("/views/AboutView.html");
        // document.querySelector("BrowserView").innerHTML = "kanker";
    }
    
    async handleOpenTabMngr() {
        this.tabManager.setLoading();
        await fetch("/views/TabManagerView.html")
        .then(r => this.tabManager.setNewTab(r))
        .catch(e => this.tabManager.displayError(e));
    }

    static __init() {
        this.newTabBtn = document.querySelector("CustomNavButton#newTab");
        this.newTabBtn.addEventListener("click", async e => await handleNewTab());
    }
}