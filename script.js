


function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}
Z= generateMessage(noCount);


function cascadaImagen() {
  let cascada = document.createElement('span');
  let size = Math.random() * 100;
  let seccion = document.querySelector('section');

  let imagenes = [
    'url("img/meGusta.png")',
    'url("img/meEncanta.png")',
    'url("img/meDivierte.png")',
    'url("img/meAsombra.png")',
    'url("img/meEntristece.png")',
    'url("img/meEnoja.png")',
  ];

  cascada.style.left = Math.random() * innerWidth + 'px';
  cascada.style.width = 50 + size + 'px';
  cascada.style.height = 50 + size + 'px';
  cascada.style.backgroundImage = imagenes[Math.floor(Math.random() * imagenes.length)];
  cascada.classList.add('cascadas');

  // Agregar evento de clic para eliminar el elemento
  cascada.addEventListener('click', function() {
    this.remove();
  });

  seccion.appendChild(cascada);

  setTimeout(() => {
    imagenes.remove();
  }, 6000);
}