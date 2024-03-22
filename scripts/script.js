const toggleSidebarBtn = document.body.querySelector("#toggleSidebarBtn");
const closeSidebarBtn = document.body.querySelector("#closeSidebarBtn");
const aside = document.body.querySelector("#aside");

closeSidebarBtn.addEventListener("click", ()=>{
    aside.classList.toggle("activeSideBar");
    setTimeout(()=>{
        toggleSidebarBtn.classList.toggle("activeToggleBtn");
    }, [1000])
})

toggleSidebarBtn.addEventListener("click", ()=>{
    aside.classList.toggle("activeSideBar");
    toggleSidebarBtn.classList.toggle("activeToggleBtn");
})