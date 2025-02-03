document.addEventListener("DOMContentLoaded", function() {
    function loadComponent(component, targetId) {
        fetch(component)
            .then(response => response.text())
            .then(data => {
                document.getElementById(targetId).innerHTML = data;
            })
            .then(() => {
                // Load corresponding CSS file
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
                } else if (component === 'footer.html') {
                    const link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = 'styles/footer.css';
                    document.head.appendChild(link);
                }
            });
    }

    loadComponent('header.html', 'header-placeholder');
    loadComponent('banner.html', 'banner-placeholder');
    loadComponent('featured_news.html', 'featured-news-placeholder');
    loadComponent('footer.html', 'footer-placeholder');
});
