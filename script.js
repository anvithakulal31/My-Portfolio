// ===== Smooth Navigation =====

document.querySelectorAll("nav a").forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ===== Welcome Message =====

window.addEventListener("load", function() {

    console.log("Welcome to Anvitha S's Portfolio!");

});