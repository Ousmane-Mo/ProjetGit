
function afficherCacherTexte() {
    var element = document.getElementById("texteApresClic");
    if (element.style.display === "none") {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  }
  const carousel = document.querySelector('.carousel');
const nextBtn = document.querySelector('#next-btn');

nextBtn.addEventListener('click', () => {
  carousel.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});
