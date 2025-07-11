document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();

    if (!name || !email) {
        alert("❌ Please fill in both fields.");
        return;
    }

    if (!email.includes("@")) {
        alert("❌ Email must contain '@'.");
        return;
    }

    alert("✅ Form submitted successfully!");
});
