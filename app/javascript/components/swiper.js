document.addEventListener("turbo:load", function() {
  const slider = document.querySelector(".slider");
  const slideCount = slider.children.length;
  let currentIndex = 0;
  let isDragging = false;
  let startPosition = 0;
  let currentPosition = 0;
  let autoSlideInterval;

  // Function to start auto sliding
  function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 3000); // Change 3000 to desired interval in milliseconds
  }

  // Function to stop auto sliding
  function stopAutoSlide() {
      clearInterval(autoSlideInterval);
  }

  // Function to go to next slide
  function nextSlide() {
      currentIndex = (currentIndex + 1) % slideCount;
      goToSlide(currentIndex);
  }

  // Function to go to previous slide
  function prevSlide() {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      goToSlide(currentIndex);
  }

  function startDrag(event) {
      isDragging = true;
      startPosition = event.pageX || event.touches[0].pageX;
      currentPosition = startPosition;
      stopAutoSlide();
  }

  function drag(event) {
      if (!isDragging) return;
      const x = event.pageX || event.touches[0].pageX;
      const dx = x - currentPosition;
      currentPosition = x;
      const translateX = (-currentIndex * 100 + dx / slideCount) + "%";
      slider.style.transform = "translateX(" + translateX + ")";
  }

  function endDrag(event) {
      if (!isDragging) return;
      isDragging = false;
      const endPosition = event.pageX || (event.changedTouches ? event.changedTouches[0].pageX : 0);
      const dx = endPosition - startPosition;

      if (dx > 50 && currentIndex > 0) {
          // Swipe right
          currentIndex--;
      } else if (dx < -50 && currentIndex < slideCount - 1) {
          // Swipe left
          currentIndex++;
      }

      goToSlide(currentIndex);
  }

  function goToSlide(index) {
      const translateX = -index * 100 + "%";
      slider.style.transform = "translateX(" + translateX + ")";
  }

  slider.addEventListener("mousedown", startDrag);
  slider.addEventListener("touchstart", startDrag);
  slider.addEventListener("mousemove", drag);
  slider.addEventListener("touchmove", drag);
  slider.addEventListener("mouseup", endDrag);
  slider.addEventListener("touchend", endDrag);
  slider.addEventListener("mouseleave", endDrag);

  // Add arrow controls
  const arrowLeft = document.createElement('div');
  arrowLeft.innerHTML = '&larr;';
  arrowLeft.classList.add('arrow', 'arrow-left');
  arrowLeft.addEventListener('click', prevSlide);

  const arrowRight = document.createElement('div');
  arrowRight.innerHTML = '&rarr;';
  arrowRight.classList.add('arrow', 'arrow-right');
  arrowRight.addEventListener('click', nextSlide);

  slider.parentElement.appendChild(arrowLeft);
  slider.parentElement.appendChild(arrowRight);

  // Initialize
  startAutoSlide();

  // Hide swipe instruction on interaction
  slider.addEventListener('touchstart', function() {
      document.querySelector('.swipe-instruction').style.display = 'none';
  });

  slider.addEventListener('mousedown', function() {
      document.querySelector('.swipe-instruction').style.display = 'none';
  });
});
