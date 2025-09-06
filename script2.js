// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // --- Image Modal Logic ---
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeButton = document.querySelector('.close-button');
    const shoeImages = document.querySelectorAll('.shoe-item img');

    // Open the modal when a shoe image is clicked
    shoeImages.forEach(img => {
        img.addEventListener('click', () => {
            imageModal.classList.add('active'); // Add 'active' class to show and animate
            modalImage.src = img.src; // Set the source of the modal image
            modalImage.alt = img.alt; // Set the alt text
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close the modal when the close button is clicked
    closeButton.addEventListener('click', () => {
        imageModal.classList.remove('active'); // Remove 'active' class to hide and animate
        document.body.style.overflow = ''; // Re-enable background scrolling
    });

    // Close the modal when clicking outside the image content (on the overlay)
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) { // Check if the click was directly on the modal background
            imageModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close the modal with the Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && imageModal.classList.contains('active')) {
            imageModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});
