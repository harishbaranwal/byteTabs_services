// Start JavaScript For Showing Side Navbar Using Hamburger
function openNav() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var sidenavWidth = (screenWidth < 400) ? "100px" : "150px";
    document.getElementById("mySidenav").style.width = sidenavWidth;
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  document.querySelector('.hamburger').addEventListener('click', function() {
    openNav();
  });
  // End JavaScript For Showing Side Navbar Using Hamburger
  
  
  // Start JavaScript For Image Slider
  var indexValue = 0;
  function slideShow(){
    setTimeout(slideShow, 2000);
    var x;
    // const img1 = document.querySelectorAll(".heading-section>.ads>.images > img");
    const img2 = document.querySelectorAll(".box>.ads>.images > img");
    // for(x = 0; x < img1.length; x++){
    //   img1[x].style.display = "none";
    // }
    for(x = 0; x < img2.length; x++){
      img2[x].style.display = "none";
    }
    indexValue++;
    // if(indexValue > img1.length){indexValue = 1}
    // img1[indexValue -1].style.display = "block";
    if(indexValue > img2.length){indexValue = 1}
    img2[indexValue -1].style.display = "block";
  }
  slideShow();
  // End JavaScript For Image Slider
  
  
  
  // Start JavaScript For Creating Smooth Scrolling Behavior For Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });
  // End JavaScript For Creating Smooth Scrolling Behavior For Anchor Links
  
  // Start JavaScript For Scrolling Navbar 
  window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    document.querySelectorAll('a[href^="#"]').forEach(function (el) {
        var section = document.querySelector(el.getAttribute('href'));
        if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
  });
  // ENd JavaScript For Scrolling Navbar





  document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const wrapper = document.querySelector(".wrapper");

    const firstCard = carousel.querySelector(".card");
    const firstCardWidth = firstCard.offsetWidth;

    let isDragging = false,
        startX,
        startScrollLeft,
        timeoutId;

    const dragStart = (e) => { 
        isDragging = true;
        carousel.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = carousel.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        const newScrollLeft = startScrollLeft - (e.pageX - startX);
        if (newScrollLeft <= 0 || newScrollLeft >= 
            carousel.scrollWidth - carousel.offsetWidth) {
            isDragging = false;
            return;
        }
        carousel.scrollLeft = newScrollLeft;
    };

    const dragStop = () => {
        isDragging = false; 
        carousel.classList.remove("dragging");
    };

    const autoSlide = () => {
        const maxScrollLeft = carousel.scrollWidth - carousel.offsetWidth;
        if (carousel.scrollLeft >= maxScrollLeft) {
            carousel.scrollLeft = 0;
        } else {
            carousel.scrollLeft += firstCardWidth;
        }
        timeoutId = setTimeout(autoSlide, 2500);
    };

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoSlide);

    autoSlide(); // Start the auto-slide on page load
});
