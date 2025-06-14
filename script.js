const faqItem = document.querySelectorAll(".faq-item");

faqItem.forEach((item) => {
    const button = item.querySelector(".toggle-btn");
    const plusIcon = item.querySelector(".plus-icon");
    const text = item.querySelector(".text");

    button.addEventListener("click", () => {
        text.classList.toggle("toggle");

    // Toggle plus and minus icon
    plusIcon.classList.toggle("fa-plus");
    plusIcon.classList.toggle("fa-minus");
    });

});