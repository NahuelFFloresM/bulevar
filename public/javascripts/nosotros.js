titulos_carousel = ['Sector Comercial','Administración','Oficina Tecnica','Sector Aluminio','Sector PVC','Sector Vidrio','Logistica','Colocación'];
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
      "<img class='icon-tarjeta' src='assets/zu_pdca.png' alt='Calidad Icon'>");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-trabajo').addEventListener('click',function(){
    updateModal(
      "Integridad y trabajo en equipo",
      "Nos unimos como equipo para garantizar la satisfacción del cliente. Nuestros servicios suman valor al producto, respetando sus deseos.",
      "<img class='icon-tarjeta' src='assets/groups_black_24dp.svg' alt='Trabajo Icon'>");
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
      "<img class='icon-tarjeta' src='assets/handshake-solid-min.svg' alt='Social Icon'/>");
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-responsabilidad').addEventListener('click',function(){
    updateModal(
      "Responsabilidad Social Empresaria",
      "Nos ocupamos de que nuestras operaciones sean sustentables en lo económico, lo social y lo ambiental, reconociendo los intereses de los distintos grupos con los que nos relacionamos, buscando la preservación del medio ambiente y la sustentabilidad de las generaciones futuras.",
      "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-globe2' viewBox='0 0 16 16'>"+
      "<path d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z'/>"+
      "</svg>");
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

