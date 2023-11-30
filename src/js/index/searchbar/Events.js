import TabManager from './TabManager.js';

export default class SearchbarEventListener {
    static { 
        this.tabManager = new TabManager();
    }

    async handleNewTab() {
        const tabManager = new TabManager();
        tabManager.setLoading();
        
        // document.querySelector("BrowserView").innerHTML = "kanker";
    }
    
    static async handleOpenTabMngr() {
        await fetch("./views/TabManagerView.html")
        .then(r => r.text()).then(r => this.tabManager.displayManager(r))
        .catch(e => this.tabManager.displayError(e));
    }

    static __init() {
        this.tabManagerBtn = document.querySelector("CustomNavButton#tabManager");
        this.tabManagerBtn.addEventListener("click", async e => await this.handleOpenTabMngr());
    }
}