document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.querySelector('.menu-toggle');
    var primaryMenu = document.getElementById('primary-menu');

    menuToggle.addEventListener('click', function() {
        var isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        primaryMenu.style.display = isExpanded ? 'none' : 'block';
    });
});
