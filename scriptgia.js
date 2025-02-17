const stars = document.querySelectorAll('.rating input');
stars.forEach(star => {
star.addEventListener('change', () => {
const ratingValue = star.id.replace('star', '');
alert(`GRACIAS POR ESE VOTO MI AMOOR AJSKDAS!!! ${ratingValue} ESTRELLOTAS BIEN MERECIDAS!! 💕💕💕`);
});
});