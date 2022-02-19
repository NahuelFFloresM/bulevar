document.addEventListener("DOMContentLoaded", function() {
  
  // const obra_id = window.location.href.split('/').pop();

  fetch('/productos')
  .then(response => response.json())
  .then(res_object => {
    console.log(res_object);
    let pvc_container = document.getElementById('pvc');
    let alu_container = document.getElementById('aluminio');
    res_object.forEach(element => {
      // CREAR IMAGEN PARA PORTADA DE PRODUCTO
      // portada = element.portada;
      // if (element.portada.length > 10) {portada = '../public/images/logo_normal.png'}
      // else {portada ='../public/assets/'+element.portada}
      var template = "<a class='nav-link' href='/nuestros_productos/"+element._id+"'><div class='producto-item'>"+
      "<img src='../public/assets/"+element.portada+"' alt='Imagen Obra' class='img-fluid'>"+
        "<div class='i-arrow position-absolute'>"+
          "<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' class='bi bi-caret-right' viewBox='0 0 16 16'>"+
            "<path d='M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z'/>"+
          "</svg>"+
        "</div>"+
        "<div class='item-cover'>"+
          "<p>Producto Nro 0000001</p>"+
          "<p>Descripcion Corta</p>"+
        "</div>"+
      "</div></a>";
      if (element.tipo == "pvc") pvc_container.innerHTML += template;
      if (element.tipo == "alu") alu_container.innerHTML += template;
    });
  });
});