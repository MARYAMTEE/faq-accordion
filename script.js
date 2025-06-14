const faqItem = document.querySelectorAll(".faq-item");

faqItem.forEach((item, index) => {
    const button = item.querySelector(".toggle-btn");
    const plusIcon = item.querySelector(".plus-icon");
    const text = item.querySelector(".text");
    const buttons = item.querySelectorAll(".toggle-btn");

    // First item: show by default, switch icon to minus
    if(index === 0) {
        text.classList.add("toggle");
        plusIcon.classList.remove("fa-plus");
        plusIcon.classList.add("fa-minus");
        button.classList.add("active");
    }

    button.addEventListener("click", () => {
        const isOpen = text.classList.toggle("toggle");

        // Toggle plus and minus icon
        plusIcon.classList.toggle("fa-plus");
        plusIcon.classList.toggle("fa-minus");

        // Toggle active state
        if(isOpen) {
            button.classList.add("active");
        } else{
            button.classList.remove("active");
        }
    });

});