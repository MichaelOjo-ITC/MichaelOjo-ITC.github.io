document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".sidebar ul li a");
    links.forEach(link => {
        link.addEventListener("mouseover", () => {
            link.style.transform = "scale(1.1)";
            link.style.transition = "transform 0.2s ease";
        });
        link.addEventListener("mouseout", () => {
            link.style.transform = "scale(1)";
        });
    });
});

