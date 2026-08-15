
    /* =========================================================
       NAVBAR DROPDOWNS
    ========================================================= */

    const navItems = document.querySelectorAll(".nav-item");


    navItems.forEach(item => {

        const button = item.querySelector(".nav-button");
        const dropdown = item.querySelector(":scope > .dropdown");


        if (!dropdown) {
            return;
        }


        button.addEventListener("click", function(event) {

            event.stopPropagation();


            // Close every other dropdown
            navItems.forEach(otherItem => {

                if (otherItem !== item) {

                    const otherDropdown =
                        otherItem.querySelector(":scope > .dropdown");

                    const otherButton =
                        otherItem.querySelector(".nav-button");


                    if (otherDropdown) {
                        otherDropdown.classList.remove("open");
                    }

                    if (otherButton) {
                        otherButton.classList.remove("active");
                    }

                }

            });


            dropdown.classList.toggle("open");

            button.classList.toggle("active");

        });

    });



    /* =========================================================
       CLOSE DROPDOWNS WHEN CLICKING OUTSIDE
    ========================================================= */

    document.addEventListener("click", function() {

        navItems.forEach(item => {

            const dropdown =
                item.querySelector(":scope > .dropdown");

            const button =
                item.querySelector(".nav-button");


            if (dropdown) {
                dropdown.classList.remove("open");
            }

            if (button) {
                button.classList.remove("active");
            }

        });

    });



    /* =========================================================
       PREVENT DROPDOWN CLICKS FROM CLOSING MENU
    ========================================================= */

    document.querySelectorAll(".dropdown").forEach(dropdown => {

        dropdown.addEventListener("click", function(event) {

            event.stopPropagation();

        });

    });



    /* =========================================================
       PALETTE
    ========================================================= */

    const paletteToggle =
        document.getElementById("palette-toggle");

    const palette =
        document.getElementById("palette");


    paletteToggle.addEventListener("click", function() {

        palette.classList.toggle("open");


        if (palette.classList.contains("open")) {

            paletteToggle.textContent = "Palette ▲";

        } else {

            paletteToggle.textContent = "Palette ▼";

        }

    });



    /* =========================================================
       RIBBON BUTTON EXAMPLE
    ========================================================= */

    document.querySelectorAll(".ribbon-button").forEach(button => {

        button.addEventListener("click", function() {

            console.log(
                "Ribbon button clicked:",
                button.innerText.trim()
            );

        });

    });

