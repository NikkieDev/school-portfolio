import SearchbarEventListener from "../index/searchbar/Events.js";

export default class CustomElements {
    static {
        this.elements = []; 
        this.sBar = new SearchbarEventListener();
    }

    static addHoverListener(element) {
        element.addEventListener("mouseenter", e => element.style.cursor = "pointer");
        element.addEventListener("mouseleave", e => element.style.cursor = "auto");
    }

    static handleSettings(element) {
        // const popup = document.createElement("div"); // create popup
        // popup.innerHTML = `
        //     <div class="d-flex flex-column">
        //         <SettingsButton>Kanker</SettingsButton>
        //     </div
        // `;
        // document.body.appendChild(popup);

        element.addEventListener("click", e => {
            if (element.getAttribute("opened") == "false") {
                element.setAttribute("opened", "true");
            } else {
                element.setAttribute("opened", "false");
            }

            console.log(element.getAttribute("opened"));
        });
    }

    static RegisterAll() {
        this.elements.push({ _elements: document.querySelectorAll("CustomNavButton"), functions: [this.addHoverListener] });
        this.elements.push({ _elements: document.querySelectorAll("SettingsButton"), functions: [this.handleSettings] });
        this.elements.push({ _elements: document.querySelectorAll("Tab"), functions: [this.addHoverListener, this.sBar.handleNewTab, () => {
            console.log
        }], classes: ["rounded-4", "m-1", "tab-border", "tab"], styles: ["height: 240px;"]})

        this.define(this.elements);
    }

    static define(arrayOfElements) {
        arrayOfElements.forEach(arrIndex => {
            arrIndex._elements.forEach(arrElement => {
                arrIndex.functions ? arrIndex.functions.forEach(arrFunc => arrFunc(arrElement)) : null;
                arrIndex.styles ? arrIndex.styles.forEach(arrStyle => arrElement.style.cssText += ` ${arrStyle} `) : null;
                arrIndex.classes ? arrIndex.classes.forEach(arrClass => arrElement.classList.add(arrClass)) : null;
            })
        })
    }
}