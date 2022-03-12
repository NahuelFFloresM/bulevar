let gotopbutton = document.getElementById("btn-to-top");

let carousel_titles = ['Administracion','Ventas','Oficina Tecnica','Aluminio','PVC','Vidrio','Colocación','Logistica'];
let pos_titles = 0;
document.addEventListener("DOMContentLoaded", function() {
  
  // let gotopbutton = document.getElementById("btn-to-top");

  document.getElementById('i-location-opener').addEventListener('click',function(){
    let item = document.querySelector('.contacto-container');
    item.style.right = '0%';
  });

  document.querySelector('.contacto-container').addEventListener('mouseleave',function(){
    let item = document.querySelector('.contacto-container');
    item.style.right = '-40%';
  });

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
});

function updateModal(title,info){
  document.getElementById('modal_valores_title').innerHTML=title;
  document.getElementById('modal_valores_info').innerHTML="<p>"+info+"</p>";
}

window.onscroll = function(ev) {
  // console.log(window.innerHeight+window.scrollY +"/"+document.body.offsetHeight);
  if ((window.innerHeight + window.scrollY + 20) >= document.body.offsetHeight) {
    let item = document.querySelector('[class^="i-whatsapp-container"]');
    item.style.bottom = "70px";
    item.style.zIndex = "1";
    let item2 = document.querySelector('[class^="i-top-container"]');
    item2.style.bottom = "80px";    
  } else {
    let item = document.querySelector('[class^="i-whatsapp-container"]');
    item.style.bottom = "15px";
    item.style.zIndex = "1";
    let item2 = document.querySelector('[class^="i-top-container"]');
    item2.style.bottom = "21px";
  }

  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    gotopbutton.style.display = "block";
  } else {
    gotopbutton.style.display = "none";
  }

  // console.log(window.innerHeight+"/"+document.documentElement.scrollTop);
};

gotopbutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}