document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("back-to-top");
  // Показать/скрыть кнопку при прокрутке страницы
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 100) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
});