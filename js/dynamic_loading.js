document.addEventListener('DOMContentLoaded', function () {
    // Check if the browser is Chrome
    const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    // Function to handle the intersection observer callback
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.style.transition = 'opacity 0.5s ease-in-out';
                img.style.opacity = 1; // Set opacity to 1 for the fade-in effect
                observer.unobserve(img);

                // Remove the transition property after fade-in
                setTimeout(() => {
                    img.style.transition = '';
                }, 2000); // Assuming the transition duration is 0.5s
            }
        });
    }

    // Create an Intersection Observer if not using Chrome
    if (!isChrome) {
        const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

        // Apply fade-in effect for all images after they have loaded
        document.querySelectorAll('img').forEach(img => {
            img.style.opacity = 0; // Set initial opacity to 0
            img.addEventListener('load', function () {
                setTimeout(() => {
                    img.style.transition = 'opacity 0.5s ease-in-out'; // Isolate opacity transition
                    observer.observe(img); // Observe the image for dynamic loading effect
                }, 1000); // Adjust the delay time as needed
            });
        });
    }
});
