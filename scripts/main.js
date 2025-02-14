// Wait until the DOM is fully loaded
// Here we're using the Event Listener to "listen" for the event (DOMContentLoaded)
// This is triggered when the HTML document has been completely loaded and parsed
// Does not wait for stylesheets, images, and subframes to finish loading. 

// The function inside the listener will run once the event fires, ensuring the 
// script runs only after DOM is FULLY constructed
document.addEventListener("DOMContentLoaded", function() {
    
    // Function to load a component dynamically
    // Takes two parameters
        // Component (URL of HTML file to be loaded)
        // targetId (the ID of the element where component will be inserted)
    
        function loadComponent(component, targetId) {

        // Fetch the component's HTML content
        // Inside the function, fetch is used to retrieve the component's HTML content.
        // Initiates a request to the URL provided as component. Returns a promise that resolves
        // to a Response object
        fetch(component)
            // Returned response object can be processed further then Convert the response to text
            .then(response => response.text())   
            
            .then(data => {
                // Insert the fetched content into the target element identified by targetID using innerHTML.
                document.getElementById(targetId).innerHTML = data;
            })
            .then(() => {
                // Load corresponding CSS file based on the component's name
                // Checks if the component being loaded is declared HTML file.
                // If it is, creates a <link> element to load the corresponding CSS file (ie header.html with header.css) 
                if (component === 'header.html') {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/header.css';

                    // The new link utilizes .head to append to the documents <head> to apply the styles
                    document.head.appendChild(link);
                } else if (component === 'banner.html') {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/banner.css';
                    document.head.appendChild(link);
                } else if (component === 'countdown.html') {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/countdown.css';
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
                } else if (component === 'table.html') {  
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/table.css';
                    document.head.appendChild(link);
                } else if (component === 'newsletter-form.html') {
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
    loadComponent('countdown.html', 'countdown-placeholder');
    loadComponent('featured_news.html', 'featured-news-placeholder');
    loadComponent('additional_news.html', 'additional-news-placeholder');
    loadComponent('second_banner.html', 'second-banner-placeholder');
    loadComponent('education.html', 'education-placeholder');
    loadComponent('third_banner.html', 'third-banner-placeholder');
    loadComponent('table.html', 'table-placeholder'); 
    loadComponent('newsletter-form.html', 'newsletter-placeholder'); 
    loadComponent('social_media_buttons.html', 'social-media-placeholder'); 
    loadComponent('footer.html', 'footer-placeholder');

});
