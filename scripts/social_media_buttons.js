


// Defines the function
function shareOnFacebook() {
// window.location.href gets the current page URL.
// encodeURIComponent encodes the URL, making it safe to include in a query string by escaping special characters.
// This ensures that characters such as spaces and punctuation are properly encoded.
    const url = encodeURIComponent(window.location.href);
// Constructs the URL for sharing on Facebook.
// shareUrl is a Facebook URL with the encoded current page URL appended as a query parameter .
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
// Opens the constructed shareUrl in a new browser tab ('_blank' specifies that the URL should open in a new tab).
    window.open(shareUrl, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("Check out this amazing content!");
    const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(shareUrl, '_blank');
}

function shareOnLinkedIn() {
    const url = encodeURIComponent(window.location.href);
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    window.open(shareUrl, '_blank');
}

// All three functions essentially follow the same steps:
// Get the current page URL.
// Encode the URL to ensure it is safe for use in a query string.
// Construct a sharing URL specific to the social media platform.
// Open the constructed URL in a new browser tab.