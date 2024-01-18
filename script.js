const buttons = document.querySelectorAll(".card-item-btn");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        this.classList.toggle("active");
        const descriptions = this.nextElementSibling;
        const plusIcons = this.querySelector(".plus-icon");
        const minusIcons = this.querySelector(".minus-icon");

        if(descriptions.style.maxHeight){
            descriptions.style.maxHeight = null;
            plusIcons.style.display = "block";
            minusIcons.style.display = "none";
        }else{
            descriptions.style.maxHeight = descriptions.scrollHeight + 'px';
            plusIcons.style.display = 'none';
            minusIcons.style.display = 'block';
        }
    });
});