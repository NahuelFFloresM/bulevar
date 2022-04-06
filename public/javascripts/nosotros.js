titulos_carousel = ['Ventas','Administración','Oficina Tecnica','Sector Aluminio','Sector PVC','Sector Vidrio','Logistica','Colocación'];
let car_indicator = 0;

function updateModal(title,info,icon){
  document.getElementById('modal_valores_title').innerHTML=title;
  document.getElementById('modal_valores_icon').innerHTML=icon;
  document.getElementById('modal_valores_info').innerHTML="<p>"+info+"</p>";
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById('i-calidad').addEventListener('click',function(){
    updateModal(
      "Compromiso con la Calidad y la Mejora Continua",
      "Nuestros procesos están en continua actualización, para poder cumplir con el compromiso de calidad de nuestros productos.",
      "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-x-diamond-fill' viewBox='0 0 16 16'><path d='M9.05.435c-.58-.58-1.52-.58-2.1 0L4.047 3.339 8 7.293l3.954-3.954L9.049.435zm3.61 3.611L8.708 8l3.954 3.954 2.904-2.905c.58-.58.58-1.519 0-2.098l-2.904-2.905zm-.706 8.614L8 8.708l-3.954 3.954 2.905 2.904c.58.58 1.519.58 2.098 0l2.905-2.904zm-8.614-.706L7.292 8 3.339 4.046.435 6.951c-.58.58-.58 1.519 0 2.098l2.904 2.905z'/></svg>");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-trabajo').addEventListener('click',function(){
    updateModal(
      "Integridad y trabajo en equipo",
      "Nos unimos como equipo para garantizar la satisfacción del cliente. Nuestros servicios suman valor al producto, respetando sus deseos.",
      "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-people-fill' viewBox='0 0 16 16'><path d='M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'/><path fill-rule='evenodd' d='M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z'/><path d='M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z'/></svg>");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-profesional').addEventListener('click',function(){
    updateModal(
      "Profesionalismo",
      "Somos responsables frente al Medio Ambiente y la sociedad en la cual estamos insertos, por lo tanto minimizamos nuestro impacto sobre el entorno.",
      "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-award-fill' viewBox='0 0 16 16'><path d='m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z'/><path d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z'/></svg>");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-cliente').addEventListener('click',function(){
    updateModal(
      "Orientación hacia el cliente",
      "Nuestros productos y servicios estan orientados para satisfacer de manera integral sus necesidades. Desde fijaciones hasta cierres cosméticos, brindamos soluciones simples, pero efectivas.",
      "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-star-fill' viewBox='0 0 16 16'><path d='M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z'/></svg>");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-responsabilidad').addEventListener('click',function(){
    updateModal(
      "Responsabilidad Social Empresaria",
      "Nos ocupamos de que nuestras operaciones sean sustentables en lo económico, lo social y lo ambiental, reconociendo los intereses de los distintos grupos con los que nos relacionamos, buscando la preservación del medio ambiente y la sustentabilidad de las generaciones futuras.",
      "<img src = 'assets/handshake-solid-min.svg' alt='Social Icon'/>");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-planificacion').addEventListener('click',function(){
    updateModal(
      "Planificación cuidadosa y acciones efectivas",
      "Analizamos su proyecto desde inicio a fin, para poder ser eficaces y eficientes. La planificación y la ejecución de ese planeamiento nos distinguen.",
      "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-lightbulb-fill' viewBox='0 0 16 16'><path d='M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm3 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1-.5-.5z'/></svg>");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });

  var myCarousel = document.getElementById('carouselExampleDark')
  myCarousel.addEventListener('slide.bs.carousel', function (event) {
    let title = document.getElementById('colaboradores_title');
    title.innerHTML = titulos_carousel[event.to];
  })
});

