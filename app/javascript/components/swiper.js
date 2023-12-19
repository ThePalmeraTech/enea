document.addEventListener("turbo:load", function() {
  const slider = document.querySelector(".slider");
  const dots = document.querySelectorAll(".slider-dots .dot");
  const slideCount = slider.children.length;
  let currentIndex = 0;
  let isDragging = false;
  let startPosition = 0;
  let currentPosition = 0;

  slider.addEventListener("mousedown", startDrag);
  slider.addEventListener("touchstart", startDrag);
  slider.addEventListener("mousemove", drag);
  slider.addEventListener("touchmove", drag);
  slider.addEventListener("mouseup", endDrag);
  slider.addEventListener("touchend", endDrag);
  slider.addEventListener("mouseleave", endDrag);

  function startDrag(event) {
      isDragging = true;
      startPosition = event.pageX || event.touches[0].pageX;
      currentPosition = startPosition;
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
      updateDots(index);
  }

  function updateDots(index) {
      dots.forEach((dot, i) => {
          if (i === index) {
              dot.classList.add('active');
          } else {
              dot.classList.remove('active');
          }
      });
  }

  dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
          goToSlide(index);
      });
  });

  // Initialize
  updateDots(0);
});
