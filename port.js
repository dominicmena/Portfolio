// const navbar = document.querySelector("navbar");
// window.addEventListener("scroll", function() {
//     navbar.classList.toggle("sticky", window.scrollY >100)
// });

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('bx-x');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('bx-x');
}
// const swiper = new Swiper('.swiper', {
//     loop: true,
//     pagination: {
//       el: '.swiper-pagination',
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   error here saying Swiper is not defined - why does it work in the script in html but not here?}); 
