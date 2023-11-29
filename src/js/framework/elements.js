export default class CustomElements {
    static { this.elements = []; }

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

        this.define(this.elements);
    }

    static define(arrayOfElements) {
        arrayOfElements.forEach(arrIndex => {
            arrIndex._elements.forEach(arrElement => {
                arrIndex.functions.forEach(arrFunc => arrFunc(arrElement));
                arrIndex.styles.forEach(arrStyle => arrElement.style.cssText += ` ${arrStyle} `);
                arrIndex.classes.forEach(arrClass => arrElement.classList.add(arrClass))
            })
        })
    }
}