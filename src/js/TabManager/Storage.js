export default class Storage {
    getCurrentPage() { return localStorage.getItem("current-page") }
    setCurrentPage(newPage) { return localStorage.setItem("current-page", newPage) }
}