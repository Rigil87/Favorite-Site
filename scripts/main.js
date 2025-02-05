// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    
    // Function to load a component dynamically
    function loadComponent(component, targetId) {
        // Fetch the component's HTML content
        fetch(component)
            .then(response => response.text())  // Convert the response to text
            .then(data => {
                // Insert the fetched content into the target element
                document.getElementById(targetId).innerHTML = data;
            })
            .then(() => {
                // Load corresponding CSS file based on the component's name
                if (component === 'header.html') {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/header.css';
                    document.head.appendChild(link);
                } else if (component === 'banner.html') {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/banner.css';
                    document.head.appendChild(link);
                } else if (component === 'featured_news.html') {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/featured_news.css';
                    document.head.appendChild(link);
                } else if (component === 'additional_news.html') {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/additional_news.css';
                    document.head.appendChild(link);
                } else if (component === 'second_banner.html') {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/second_banner.css';
                    document.head.appendChild(link);
                } else if (component === 'education.html') {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/education.css';
                    document.head.appendChild(link);
                } else if (component === 'third_banner.html') {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/third_banner.css';
                    document.head.appendChild(link);
                } else if (component === 'newsletter-form.html') {  // Add this block for newsletter form
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/newsletter-form.css';
                    document.head.appendChild(link);
                } else if (component === 'footer.html') {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/footer.css';
                    document.head.appendChild(link);

                }
            });
    }

    // Load components into their respective placeholders
    loadComponent('header.html', 'header-placeholder');
    loadComponent('banner.html', 'banner-placeholder');
    loadComponent('featured_news.html', 'featured-news-placeholder');
    loadComponent('additional_news.html', 'additional-news-placeholder');
    loadComponent('second_banner.html', 'second-banner-placeholder');
    loadComponent('education.html', 'education-placeholder');
    loadComponent('third_banner.html', 'third-banner-placeholder');
    loadComponent('newsletter-form.html', 'newsletter-placeholder'); 
    loadComponent('footer.html', 'footer-placeholder');

});
