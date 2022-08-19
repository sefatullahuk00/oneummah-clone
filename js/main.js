   // Navbar Fixed on window scroll 
   let navbar = document.querySelector('.sticky_nav');
   window.onscroll = function() {
      if(document.body.scrollTop > 130 || document.documentElement.scrollTop > 130) {
         navbar.setAttribute ("style","position:fixed;left:0;right:0;box-shadow:1px 2px 5px rgb(192, 188, 188)");
      } else {
         navbar.setAttribute ("style","box-shadow:none");
      }
   }


   // Active Navigation Menu
   let navItems = document.querySelectorAll('.nav-item > .nav-link');
   
   navItems.forEach(n => {
      n.addEventListener('click', function() {
         navItems.forEach(i => i.classList.remove('nav_active'));
         n.classList.add('nav_active');
      });
   });

            // ----   Swipper Js Code ---- 
   // swiper_landing_slider
   var swiper = new Swiper(".swiper_landing_slider", {
      loop: true,
      speed: 800,
      autoplay: {
         delay: 2500,
         disableOnInteraction: false,
         pauseOnMouseEnter: true,
       },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
            el: ".swiper-pagination",
            clickable: true
         },
    });

    // Half Sleeve Dawah T-shirt Slider   
    var swiper = new Swiper(".half_sleeve_dawah_tshirt_swiper_1, .half_sleeve_dawah_tshirt_swiper_2", {
      loop:true,
      slidesPerView:2,
      slidesPerGroup:2,
      speed:800,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false,
         pauseOnMouseEnter: true,
       },
      grabCursor:true,
      spaceBetween:17,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
         600: {
            slidesPerView: 3,
            slidesPerGroup:3
          },
         992: {
            slidesPerView: 4,
            slidesPerGroup:4
          },
         //  1200: {
         //    slidesPerView: 5
         //  }
      }
    });


               //=== jQuery Code ===
   $(document).ready(function() {
     
   });