
document.addEventListener("DOMContentLoaded", function () {
    const contactIcon = document.getElementById("contact-icon");
    const contactForm = document.getElementById("contact-form");
    const successMessage = document.getElementById("success-message");
    const contactFormElement = document.getElementById("contact-message-form");

    contactIcon.addEventListener("click", function () {
        if (contactForm.style.display === "none" || contactForm.style.display === "") {
            contactForm.style.display = "block";
            successMessage.style.display = "none";
        } else {
            contactForm.style.display = "none";
        }
    });

    contactFormElement.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactFormElement);

        // Send form data to the Django backend using AJAX
        fetch("/save_contact_message/", {
            method: "POST",
            body: formData,
            headers: {
                "X-CSRFToken": getCookie("csrftoken"), // Include CSRF token
            },
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.message === "Form submitted successfully!") {
                    // Display success message div
                    successMessage.style.display = "block";
                    // Reset the form
                    contactFormElement.reset();
                } else {
                    // Handle error here (e.g., display an error message)
                    console.error("Form submission error:", data.message);
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });

    // Function to get CSRF token from cookies
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== "") {
            const cookies = document.cookie.split(";");
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === name + "=") {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});

