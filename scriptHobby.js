document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        const text = item.querySelector("h2"); // Select the text element
        const dropdown = item.querySelector(".dropdown");
        
        text.addEventListener("mouseenter", function() {
            dropdown.classList.add("show");
        });

        item.addEventListener("mouseleave", function() {
            dropdown.classList.remove("show");
        });
    });
});
