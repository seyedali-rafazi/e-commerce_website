let slideIndex = 1;

function setSlide(input, index) {
  slideIndex = index;

  // Get slide item with id matching input
  let item = document.querySelector('#' + input);

  // Get all slides
  let slides = document.querySelectorAll('.slides > *');

  // Remove active class from all slides
  slides.forEach(slide => {
    slide.classList.remove('active');
  });

  // Add active class to current slide
  item.classList.add('active');
}

// Function to automatically change slide after 5 seconds
function autoChangeSlide() {
  const totalSlides = 3; // Update this to the total number of slides
  slideIndex = (slideIndex % totalSlides) + 1;
  const slideId = 'slide' + slideIndex;
  setSlide(slideId, slideIndex);
  setTimeout(autoChangeSlide, 5000); // Change slide every 5 seconds
}

// Initial call to start the auto slide change
autoChangeSlide();


// --------------------------------------------------------timer ---------------------------

// Get element where we will display timer
const timerElement = document.getElementById('timer');

// Set total time in milliseconds 
let countDownDate = new Date().getTime() + (24 * 60 * 60 * 1000); 

// Update timer every second
let x = setInterval(function() {

  // Get current time
  let now = new Date().getTime();
  
  // Calculate time remaining
  let distance = countDownDate - now;
  
  // Time calculations
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  // Display timer in HH:MM:SS format
  let timerText = hours.toString().padStart(2, '0') + ':' + 
                 minutes.toString().padStart(2, '0') + ':' + 
                 seconds.toString().padStart(2, '0');
                 
  timerElement.innerHTML = timerText;
  
  // Stop timer when it reaches 0
  if (distance < 0) {
    clearInterval(x);
    timerElement.innerHTML = '00:00:00'; 
  }
}, 1000);