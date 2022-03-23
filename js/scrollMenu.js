// ... = Unpack iterable
const allSections = [
    document.querySelector("header"),
    ...document.querySelectorAll("section"),
]
// Side menu items
const sidebarItems = document.querySelectorAll(".sidebar-menu li")

// change active state
// Basic logic, drop all active, set active to initiator
function setActive(element) {
    sidebarItems.forEach((item) => item.classList.remove("active"))

    element.classList.add("active")
}

function changeActiveMenu() {
    let fromTop = window.scrollY

    sidebarItems.forEach((item) => {
        let link = item.querySelector("a")
        let dot = item.querySelector(".dot")
        // return #_______ part of link
        let section = document.querySelector(link.hash)

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            item.classList.add("active")
            dot.classList.add("active")
        } else {
            item.classList.remove("active")
            dot.classList.remove("active")
        }
    })
}

sidebarItems.forEach((item) => {
    item.addEventListener("click", () => setActive(item))
})

window.addEventListener("scroll", _.throttle(changeActiveMenu, 150))
// It's a good practice to use debounce or throttle on scroll events
// we will use lodash for this
// throttle run callback function only once in passed interval ms.
