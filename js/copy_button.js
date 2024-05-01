var linkUrl = "https://www.andreaskrauss.ca/newsletter";

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Attach event listener to the image element
    document.getElementById("copy_button").addEventListener("click", function() {
        navigator.clipboard.writeText(linkUrl).then(function() {
            alert("Link copied to clipboard: " + linkUrl);
        }, function(err) {
            console.error('Could not copy text: ', err);
        });
    });
});