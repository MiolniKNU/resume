document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.progress-bar').forEach(bar => {
        let width = bar.getAttribute("data-width");
        bar.style.width = width;
    });

    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });
});
