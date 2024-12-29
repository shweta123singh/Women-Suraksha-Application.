document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value.trim();
    const dob = document.getElementById("dob").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");

    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match!";
        return;
    }

    if (!validateEmail(email)) {
        message.textContent = "Invalid email address!";
        return;
    }

    message.textContent = "Registration successful!";
    message.style.color = "green";

    // You can handle form data here (e.g., send to a server)
    console.log({ name, dob, email });
});

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
