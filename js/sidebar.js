const toggleBtn = document.querySelector(".menu-toggle")
const sidebar = document.querySelector(".sidebar")

toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open")
})
