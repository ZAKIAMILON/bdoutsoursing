let menu = document.getElementById("menu");
let menuBtn = document.querySelector(".toggle")


let menuOpen = false;

menuBtn.addEventListener("click", function() {
    if(menuOpen === false){
        menu.style.right = "0%";
        menuOpen = true;
        menuBtn.innerHTML = '<i class="bi bi-x-square"></i>'
    } else{
        menu.style.right = "-100%";
        menuOpen = false;
        menuBtn.innerHTML = <i class="bi bi-list"></i>;
    }
})