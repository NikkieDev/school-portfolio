export default class CustomElements {
    static { this.elements = []; }

    static addHoverListener(element) {
        element.addEventListener("mouseenter", e => element.style.cursor = "pointer");
        element.addEventListener("mouseleave", e => element.style.cursor = "auto");
    }

    static RegisterAll() {
        this.elements.push([
            document.querySelectorAll("NavLinkItem"),
            ["p-2", "rounded"]
        ]); this.elements.push([
            document.querySelectorAll("CustomNavButton"),
            [this.addHoverListener]
        ]); this.elements.push([
            document.querySelectorAll("span#openTabs"), []
            // [(e) => { e.addEventListener("mouseenter", () => e.style.cursor = "not-allowed");
            // e.addEventListener("mouseleave", () => e.style.cursor = "default") }]
        ]);

        this.define();
    }

    static define() {
        this.elements.forEach(customElement => {
            customElement[0].forEach(elem => {
                customElement[1].forEach(elemAttr => {
                    if (typeof elemAttr == "string") elem.classList.add(elemAttr);
                    else if (typeof elemAttr == "function") elemAttr(elem);
                })
            })
        });
    }
}