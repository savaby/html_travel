const tabcontents = document.querySelectorAll(".tabcontent")
const tabs = document.querySelectorAll(".blog-tab")

function changeActiveTab(clickedTab) {
    tabs.forEach((tab) => tab.classList.remove("active"))

    clickedTab.classList.add("active")
}

function changeTabContent(month) {
    // tabcontent.setAttribute("style", "display: none")
    tabcontents.forEach((tabcontent) => (tabcontent.style.display = "none"))
    // setAttribute("style", "display: block");
    document.getElementById(month).style.display = "block"
}

function openBlogs(e, month) {
    e.stopImmediatePropagation()
    let clickedTab = e.currentTarget

    changeActiveTab(clickedTab)
    changeTabContent(month)
}
