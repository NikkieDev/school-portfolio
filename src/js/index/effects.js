export default class Effects {
    static toggleNavUrlHover(isHovering, element) {
        isHovering ? (element.parentElement.style.background = "white", element.classList.add("text-black"), element.classList.remove("text-white")) 
        : (element.parentElement.style.background = "transparent", element.classList.add('text-white'), element.classList.remove('text-black'));
    }
    
    static init() {
        const navLinkImages = document.querySelectorAll("img.nav-link__before-image");
        const available = [
            "../../assets/square_24x24_black.png",
            "../../assets/square_32x32_white.png"
        ]

        navLinkImages.forEach(elem => {
            const urlElem = elem.parentElement.children[1];
            urlElem.parentElement.classList.add("small-bg-transition");

            urlElem.addEventListener("mouseenter", e => { elem.src = available[0]; this.toggleNavUrlHover(true, urlElem); });
            urlElem.addEventListener("mouseleave", e => { elem.src = available[1]; this.toggleNavUrlHover(false, urlElem); });
        });
    }

}