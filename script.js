function validateForm() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");

    // Simple email validation (checking for @ character)
    if (emailInput.value.indexOf("@") == -1) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Password length validation (minimum length of 6 characters)
    if (passwordInput.value.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    // If both validations pass, redirect to the dashboard page
    alert("Login successful!");
    window.location.href = "dashboard.html"; // Replace with the actual URL of your dashboard page

    return false; // Prevent the form from submitting
}
