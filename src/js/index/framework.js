export default class CustomElements {
    static RegisterAll() {
        const NavLinkItem = [
            document.querySelectorAll("NavLinkItem"),
            ["p-2", "rounded"]
        ];

        this.define(NavLinkItem);
    }

    static define(customElement) {
        customElement[0].forEach(elem => 
            customElement[1].forEach(elemClass => elem.classList.add(elemClass)));
    }
}