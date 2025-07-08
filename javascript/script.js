//  var swiper = new Swiper(".mySwiper", {
//       spaceBetween: 30,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     });
    

//   const swiper = new Swiper('.swiper', {
//     loop: true,
//     autoplay: {
//       delay: 2000,
//     },
//     on: {
//       slideChange: function () {
//         const navbar = document.querySelector("header nav");

//         if (this.realIndex === 1) {
//           // 2nd slide → Green
//           navbar.style.background = "linear-gradient(135deg, #4caf50, #8bc34a)";
//         } else if (this.realIndex === 2) {
//           // 3rd slide → Dark Pink
//           navbar.style.background = "linear-gradient(135deg, #ad1457, #f06292)";
//         } else {
//           // All others → Orange default
//           navbar.style.background = "linear-gradient(135deg, #ffa726, #fbc16a)";
//         }
//       }
//     }
//   });



  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 3000,
    },
    on: {
      slideChange: function () {
        const navbar = document.querySelector("header nav");
        const searchButton = document.querySelector(".search-bar button");
        const cartButton = document.getElementById("order-cart");

        if (this.realIndex === 1) {
          // Slide 2: Green Theme
          navbar.style.background = "linear-gradient(135deg, #4caf50, #8bc34a)";
          searchButton.style.background = "linear-gradient(135deg, #4caf50, #8bc34a)";
          cartButton.style.background = "linear-gradient(135deg, #4caf50, #8bc34a)";
        } else if (this.realIndex === 2) {
          // Slide 3: Dark Pink Theme
          navbar.style.background = "linear-gradient(135deg, #ad1457, #f06292)";
          searchButton.style.background = "linear-gradient(135deg, #ad1457, #f06292)";
          cartButton.style.background = "linear-gradient(135deg, #ad1457, #f06292)";
        } else {
          // Default: Orange Theme
          navbar.style.background = "linear-gradient(135deg, #ffa726, #fbc16a)";
          searchButton.style.background = "linear-gradient(135deg, #ffa726, #ff7043)";
          cartButton.style.background = "linear-gradient(135deg, #ffa726, #ff7043)";
        }
      }
    }
  });

