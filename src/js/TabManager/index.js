import Storage from './Storage.js';

const storage = new Storage("current-page")
const page = storage.getCurrentPage()
document.querySelectorAll("div.tab").forEach(tab => {
    console.log(page == tab.getAttribute("page"));
    console.log(tab.getAttribute('page'))
    if (tab.getAttribute("page") == page)
        tab.classList.add("tab-active");
})