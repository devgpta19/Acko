// const navProducts = document.getElementsByClassName('navProducts');
// const navContent = document.getElementsByClassName('nav-content');

// navProducts.forEach((navProduct) => {
//     navProduct.addEventListener('click', (e) => {
//       e.preventDefault(); // Prevent default link behavior
//       console.log("Working");
  
//       // Toggle height of the dynamic section
//       if (navContent.style.height === '0vh' || !navContent.style.height) {
//         navContent.style.height = '70vh';
//       } else {
//         navContent.style.height = '0vh';
//       }
//     });
//   });

// // Close the dynamic section when clicking outside it
// document.addEventListener('click', (e) => {
//     // Check if the click was outside the navbar or dynamic section
//     if (!e.target.closest('.nav-link') && !e.target.closest('#dynamic-section')) {
//         dynamicSection.classList.add('hidden');
//     }
// });