let sidemenu = document.querySelector(".sidemenu");
let navbar = document.querySelector(".navbar");
let section1 = document.querySelector(".section1");


sidemenu.addEventListener('click', () => {
        if (section1.style.width == "200px") {
          // navbar.style.display= "none"
          section1.style.width = "100px";
        } else {
          // navbar.style.display = "block"
          section1.style.width = "200px";
        }
})