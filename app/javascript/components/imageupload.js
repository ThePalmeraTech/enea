document.addEventListener('turbolinks:load', function() {
  const imageUploadInput = document.getElementById('image-upload');

  if (!imageUploadInput) return;

  imageUploadInput.addEventListener('change', function(event) {
    const imageFiles = event.target.files;
    const previewContainer = document.getElementById('image-preview-container');

    // Clear previous previews
    previewContainer.innerHTML = '';

    // Create previews
    Array.from(imageFiles).forEach((file, index) => {
      const reader = new FileReader();
      reader.onload = function(e) {
        const div = document.createElement('div');
        div.classList.add('image-preview');
        div.innerHTML = `
          <img src="${e.target.result}" alt="Preview" style="width: 100px; height: 100px;">
          <input type="number" name="image_order_${index}" value="${index}" style="width: 50px;">
        `;
        previewContainer.appendChild(div);
      };
      reader.readAsDataURL(file);
    });
  });
});
