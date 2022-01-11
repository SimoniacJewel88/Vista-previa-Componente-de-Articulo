var isActive = false;

var showShare = document.querySelector('.compartir');

var boton = document.querySelector('.btn-compartir');
boton.addEventListener('click', () => {
  if(isActive) {
     isActive = false;  
     showShare.classList.remove('activo');    
  } else {
      isActive = true;
      showShare.classList.add('activo');
  }
});