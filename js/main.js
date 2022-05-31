let activeBurger = document.querySelector(".nav__list");
let burger = document.querySelector(".burger")

burger.addEventListener("click", function() {
   activeBurger.classList.toggle("active");
   burger.classList.toggle("active");;
});