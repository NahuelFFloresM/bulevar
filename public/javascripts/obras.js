document.addEventListener("DOMContentLoaded", function() {
  
  const obra_id = window.location.href.split('/').pop();

  fetch('/obras')
  .then(response => response.json())
  .then(res_object => {
    // console.log(res_object);
    let pvc_container = document.getElementById('pvc');
    let alu_container = document.getElementById('aluminio');
    res_object.forEach(element => {
      // console.log(element);
      portada = element.portada;
      if (element.portada.length < 10) {portada = '../public/images/logo_normal.png'}
      else {portada ='../public/images/'+element.portada}
      var template = "<a class='nav-link' href='/nuestras_obras/"+element._id+"'><div class='obra-item'><img src='"+portada+"' alt='Imagen Obra' class='img-fluid mx-auto d-block'><div class='info-tag'><p>"+element.nombre+"</p><p>"+element.localizacion+"</p></div></div></a>";
      if (element.tipo == "PVC") pvc_container.innerHTML += template;
      if (element.tipo == "Aluminio") alu_container.innerHTML += template;
    });
  });
  
});