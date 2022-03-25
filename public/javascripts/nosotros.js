titulos_carousel = ['Administracion','Ventas','Oficinas Tecnicas'];
let car_indicator = 0;

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('i-calidad').addEventListener('click',function(){
    updateModal("Compromiso con la Calidad y la Mejora Continua","Nuestros procesos están en continua actualización, para poder cumplir con el compromiso de calidad de nuestros productos.");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-trabajo').addEventListener('click',function(){
    updateModal("Integridad y trabajo en equipo","Nos unimos como equipo para garantizar la satisfacción del cliente. Nuestros servicios suman valor al producto, respetando sus deseos.");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-profesional').addEventListener('click',function(){
    updateModal("Profesionalismo","Somos responsables frente al Medio Ambiente y la sociedad en la cual estamos insertos, por lo tanto minimizamos nuestro impacto sobre el entorno.");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-cliente').addEventListener('click',function(){
    updateModal("Orientación hacia el cliente","Nuestros productos y servicios estan orientados para satisfacer de manera integral sus necesidades. Desde fijaciones hasta cierres cosméticos, brindamos soluciones simples, pero efectivas.");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-responsabilidad').addEventListener('click',function(){
    updateModal("Responsabilidad Social Empresaria","Nos ocupamos de que nuestras operaciones sean sustentables en lo económico, lo social y lo ambiental, reconociendo los intereses de los distintos grupos con los que nos relacionamos, buscando la preservación del medio ambiente y la sustentabilidad de las generaciones futuras.");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-planificacion').addEventListener('click',function(){
    updateModal("Planificación cuidadosa y acciones efectivas","Analizamos su proyecto desde inicio a fin, para poder ser eficaces y eficientes. La planificación y la ejecución de ese planeamiento nos distinguen.");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });

  var myCarousel = document.getElementById('carouselExampleDark')
  myCarousel.addEventListener('slide.bs.carousel', function (event) {
    let title = document.getElementById('colaboradores_title');
    console.log(titulos_carousel.length);
    if(event.direction == "left"){
      if ((car_indicator + 1 ) == titulos_carousel.length){
        car_indicator = -1;
      }
      title.innerHTML = titulos_carousel[++car_indicator];
    }else {
      if (car_indicator  == 0){
        car_indicator = titulos_carousel.length;
      }
      title.innerHTML = titulos_carousel[--car_indicator];
    };
  })
});

