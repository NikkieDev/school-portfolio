import TabManager from './TabManager.js';

export default class SearchbarEventListener {
    static { 
        this.tabManager = new TabManager();
        this.elem = {activator: null, new_html: null, old_html: null};
    }

    static async loadNewHTML(pageName) {
        this.tabManager.displayLayout();
        await fetch(`./views/${pageName}View.html`).then(r => r.text())
        .then(r => {
            this.tabManager.displayHTML(r, pageName);
        })
    }

    async handleNewTab(text) {
        const tabManager = new TabManager();
        tabManager.setLoading();
        let elem = {};

        if (text.srcElement.nodeName == "H3") {
            elem["activator"] = text.srcElement.parentNode.parentNode
            elem["new_html"] =  text.srcElement.innerText;
        } else if (text.srcElement.nodeName == "TAB") {
            elem["activator"] = text.srcElement.children[0];
            elem["new_html"] = text.srcElement.children[0].children[0].children[1].innerText;
        } else if (text.srcElement.nodeName == "DIV") {
            elem["activator"] = text.srcElement;
            elem["new_html"] = text.srcElement.children[0].children[1].innerText;
        }
        console.log(elem["new_html"]);
        SearchbarEventListener.loadNewHTML(elem["new_html"]);
    }
    
    static async handleOpenTabMngr() {
        await fetch("./views/TabManagerView.html")
        .then(r => r.text()).then(r => {
            const META = {
                name: "TabManager"
            };

            this.tabManager.displayHTML(r, META.name);
        })
        .catch(e => tabManager.displayError(e));
    }

    static __init() {
        this.tabManagerBtn = document.querySelector("CustomNavButton#tabManager");
        this.tabManagerBtn.addEventListener("click", async e => await SearchbarEventListener.handleOpenTabMngr());
    }
}