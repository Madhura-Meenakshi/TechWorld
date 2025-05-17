document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("formResponse");

  if (name && email && message) {
    response.textContent = "✅ Thanks for contacting us! We'll reach out shortly.";
    response.style.color = "green";
    alert("Thank you, " + name + "! Your message has been sent successfully.");
    this.reset();
  } else {
    response.textContent = "❌ Please fill in all fields correctly.";
    response.style.color = "red";
    alert("Please complete all fields before submitting the form.");
  }
});
