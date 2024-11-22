// Simple form submission handler
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    alert("Thank you for reaching out! We'll get back to you soon.");
    this.reset();
});
