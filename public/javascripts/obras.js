document.addEventListener("DOMContentLoaded", function() {
  
  const obras = fetch('obras')
  .then(response => response.json())
  .then(data => {

    let container = document.getElementById('pvc');
    data.forEach(element => {
      var template = "<div class='obra-item'><img src='../public/assets/Al (10 pinos).jpg' alt='Imagen Obra' class='img-fluid'><div class='info-tag'><p>Obra Nro 0000001</p><p>Ubicacion - BsAs</p></div></div>";
      container.innerHTML += template;
    });
  });
});