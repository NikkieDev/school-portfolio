export default class CustomElements {
    static { this.elements = []; }

    static RegisterAll() {
        this.elements.push([
            document.querySelectorAll("NavLinkItem"),
            ["p-2", "rounded"]
        ]);

        this.define();
    }

    static define() {
        this.elements.forEach(customElement => {
            customElement[0].forEach(elem => 
                customElement[1].forEach(elemClass => elem.classList.add(elemClass)))
        });
    }
    // static define(customElement) {
    //     customElement[0].forEach(elem => 
    //         customElement[1].forEach(elemClass => elem.classList.add(elemClass)));
    // }
}