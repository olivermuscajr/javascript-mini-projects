const toggleBtn = document.getElementById('sidebar-toggle-btn');
const sideBar = document.querySelector('.sidebar');




toggleBtn.addEventListener('click', () => {
    sideBar.classList.toggle('active')
})
console.log(sideBar)
