// Fetch URL of the page
var page_url = window.location.href;
/**/console.log("Add-on loaded...\n\n\n");

// Execute only on Google pages
if (page_url.search("google") != -1) { (function() {
        // Debugging
        /**/document.body.style.border = "2px solid red";

        /* --------------- Page interactions --------------- */
        // Page loaded
        var req = new XMLHttpRequest();
        req.open("GET", page_url, true);
        req.send();
        req.addEventListener("load", function() {
            // Check if training has already been performed
            if (!checkTraining()) {
                training();
            } else {
                loadTraining();     // Load training variables from local storage
            }

            main();
        });

        // Search button pressed (WORKS SOMETIMES)
        var search_button = document.getElementsByClassName("lsb").item(0);
        search_button.addEventListener("click", function() {
            main();
        });

        // Return key pressed in search bar (WORKS SOMETIMES)
        var search_bar = document.getElementById("lst-ib");
        search_bar.addEventListener("keydown", function(event) {
            if (event.key == "Enter")
                main();
        });

        // TODO: listen to other events
    })();
}