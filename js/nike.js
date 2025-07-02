// index page


// Add to Cart Button Alert
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Item added to cart!");
    });
});

// Scroll Back to Top Button
const backToTop = document.querySelector('.back-to-top');

if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}



// login page



document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.querySelector("input[type='text']");
    const continueButton = document.querySelector("button[type='submit']");

    continueButton.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent form submission

        const emailValue = emailInput.value.trim();

        if (emailValue === "") {
            alert("Please enter your email.");
            return;
        }

        if (!validateEmail(emailValue)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert(`Welcome! Your email (${emailValue}) is submitted successfully.`);
        // Here, you can add further logic to send data to a backend or redirect the user
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
