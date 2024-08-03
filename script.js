// script.js
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("nav ul li a").addEventListener("click", function(event) {
        event.preventDefault();
        alert("You clicked a link!");
    });
});
