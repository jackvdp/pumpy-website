; (function ($) {

    $(document).ready(function () {
        $(document).on('click', '.header-area .show-menu', function () {
            $(this).toggleClass('active');
            $(".header-area .navbar").toggleClass('active');
        });
        // $(document).on('click', '.header-area .navbar .close-menu', function() {
        //     $(".header-area .navbar").removeClass('active');
        // });

        AOS.init({
            duration: 1500,
            once: true,
        })
    });

})(jQuery);


var div = document.createElement("div");
div.id = "preloader",
    div.className = "preloader",
    div.innerHTML = '<div class="black_wall"></div><div class="loader"></div>',
    document.body.insertBefore(div, document.body.firstChild), window.onload = function () {
        document.getElementById("preloader").classList.add("off")
    };

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('theme-toggle');

    // Check for saved user preference, if any, on load
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
    }

    // Add click event listener to the toggle button
    toggleButton.addEventListener('click', toggleDarkMode);
});


function toggleDarkMode() {
    const body = document.body;
    const toggleBtn = document.getElementById('theme-toggle');
    
    body.classList.toggle('dark-mode');
    
    // Add animation class
    toggleBtn.classList.add('toggling');
    
    // Remove animation class after transition completes
    setTimeout(() => {
        toggleBtn.classList.remove('toggling');
    }, 300);

    // Save the user's preference
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
}