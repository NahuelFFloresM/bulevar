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
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-trabajo').addEventListener('click',function(){
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-social').addEventListener('click',function(){
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });
  document.getElementById('i-cliente').addEventListener('click',function(){
    var myModal = new bootstrap.Modal(document.getElementById('modal_nosotros'));
    myModal.toggle();
  });

  // document.getElementById("carouselExampleDark").addEventListener("webkitTransitionStart", function(){console.log('donewebkit')});
  // document.getElementById("carouselExampleDark").addEventListener("transitionstart", function(event){
  //   console.log(carousel_titles[pos_titles++]);
  //   console.log(event);
  // });
  
});

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