// Déclaration des variables
const carousel = document.querySelector('#carouselExampleCaptions');
const carouselButtons = document.querySelectorAll('.carousel-control-prev, .carousel-control-next');

// Fonction pour changer de diapositive
function changeSlide(direction) {
  const activeSlide = carousel.querySelector('.carousel-item.active');
  let nextSlide;

  if (direction === 'next') {
    nextSlide = activeSlide.nextElementSibling || carousel.firstElementChild;
  } else {
    nextSlide = activeSlide.previousElementSibling || carousel.lastElementChild;
  }

  activeSlide.classList.remove('active');
  nextSlide.classList.add('active');
}

// Ajout des écouteurs d'événements aux boutons du carousel
carouselButtons.forEach(button => {
  button.addEventListener('click', () => {
    const direction = button.classList.contains('carousel-control-next') ? 'next' : 'prev';
    changeSlide(direction);
  });
});
