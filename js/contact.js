const contactForm = document.querySelector(".contact-form");
const successMessage = document.getElementById("successMessage");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    successMessage.innerText = "Your response has been saved successfully!";

    successMessage.style.display = "block";

    contactForm.reset();

    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  });
}
