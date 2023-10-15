$(document).ready(function () {
    var slidesToShow = 5; // Default value
  
    if (window.innerWidth < 768) {
      slidesToShow = 2; // Show 2 logos on smaller screens
    } else if (window.innerWidth < 992) {
      slidesToShow = 3; // Show 3 logos on medium-sized screens
    }
  
    $(".clients-slider").slick({
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<i class="fa fa-chevron-left slick-prev"></i>',
      nextArrow: '<i class="fa fa-chevron-right slick-next"></i>',
    });
  });
  
  // Update the slider when the window is resized
  $(window).on("resize", function () {
    var slidesToShow = 5; // Default value
  
    if (window.innerWidth < 768) {
      slidesToShow = 2; // Adjust for smaller screens
    } else if (window.innerWidth < 992) {
      slidesToShow = 3; // Adjust for medium-sized screens
    }
  
    $(".clients-slider").slick("slickSetOption", "slidesToShow", slidesToShow, true);
  });
  
  
  
  // Function to animate countdown
  function animateCountdown(target, count) {
    let currentCount = 0;
    const interval = 10; // Interval in milliseconds
  
    const countdownInterval = setInterval(function () {
        target.innerHTML = currentCount;
        currentCount++;
        if (currentCount > count) {
            clearInterval(countdownInterval);
        }
    }, interval);
  }
  
  // Use Intersection Observer API to trigger the countdown animation
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animateCountdown(document.getElementById('clients-count'), 51);
            animateCountdown(document.getElementById('projects-count'), 6);
            animateCountdown(document.getElementById('candidates-count'), 65);
            observer.unobserve(entry.target);
        }
    });
  }, options);
  
  observer.observe(document.querySelector('.parallax-section'));

  $(document).ready(function () {
    $('#slide1').attr('data-interval', 12000); 
  });