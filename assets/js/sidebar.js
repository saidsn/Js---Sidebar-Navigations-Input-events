"ude strict"

let sidebar = document.querySelector(".side-bar")



let hideSidebar = document.querySelector(".hide-sidebar")
let showSidebar = document.querySelector(".show-sidebar")

let icons = document.querySelectorAll(".side-bar .icon i")

showSidebar.addEventListener("click", function () {

    if (sidebar.classList.contains("hide")) {
        sidebar.classList.remove("hide");
    }

    for (const item of icons) {
        item.classList.remove("d-none")
    }

    
    this.classList.add("d-none")
})


hideSidebar.addEventListener("click", function () {

    if (!sidebar.classList.contains("hide")) {
        sidebar.classList.add("hide");
    }

    
    for (const item of icons) {
        item.classList.remove("d-none")
    }
    this.classList.add("d-none")
})  