export default class DOMC {
    static setup() {
        const role = document.querySelector("span#role");
        this.roleCycle(role);
    }

    static roleCycle(elem) {
        const roles = [ "Software Engineer", "SysAdmin", "Network Specialist", "Linux Enjoyer" ];
        
        elem.innerHTML = localStorage.getItem("role") ?? roles[Math.floor(Math.random() * roles.length)];
        elem.style.transition = "all ease 250ms";
        
        setInterval(() => {
            const CHOSEN = Math.floor(Math.random() * roles.length);
            elem.innerHTML = roles[CHOSEN];
            localStorage.setItem("role", roles[CHOSEN]);
        }, 3000);
    }
}