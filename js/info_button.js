document.querySelectorAll('img[src="media/icons/info.png"]').forEach(function (img) {
    img.style.transition = 'transform 0.3s ease, src 0.3s ease'; // Apply the transition to the initial state

    img.addEventListener('mouseover', function () {
        this.style.transition = 'transform 0.3s ease, src 0.3s ease'; // Ensure a smooth transition on mouseover
        this.style.transform = 'scale(1.2)';
        this.src = 'media/icons/info2.png'; // Replace with the path to your new image
    });

    img.addEventListener('mouseout', function () {
        this.style.transition = 'transform 0.3s ease, src 0.3s ease'; // Ensure a smooth transition on mouseout
        this.style.transform = 'scale(1)';
        this.src = 'media/icons/info.png'; // Replace with the path to the original image
    });

    // Optional: Remove the transition property after the transition duration
    img.addEventListener('transitionend', function () {
        this.style.transition = '';
    });
});
