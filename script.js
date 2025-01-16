let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove ('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}


menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
);

searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
}
);

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
}
);
formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
}
);

videoBtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
      document.querySelector('.controls .active').classList.remove('active');
      btn.classList.add('active');
      let src = btn.getAttribute('data-src');
      document.querySelector('#video-slider').src = src;
    });
});

// var swiper = new Swiper(".review-slider", {
//     spaceBetween: 40,
//     loop: true,
//     autoplay:{
//         deplay: 10000,
//         disableOnInteraction: false,
//     },
//     slidesPerView:3,
//     breakpoints:{
//         640:{
//             slidesPerView: 1,
//         },
//         768:{
//             slidesPerView: 2,
//         },
//         1024:{
//             slidesPerView: 3,
//         }
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       type: "progressbar",
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
