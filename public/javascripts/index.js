let gotopbutton = document.getElementById("btn-to-top");


document.addEventListener("DOMContentLoaded", function() {
  
  // let gotopbutton = document.getElementById("btn-to-top");

  document.getElementById('i-location-opener').addEventListener('click',function(){
    let item = document.querySelector('.contacto-container');
    item.style.right = '0%';
  })

  document.querySelector('.contacto-container').addEventListener('mouseleave',function(){
    let item = document.querySelector('.contacto-container');
    item.style.right = '-40%';
  })
});

window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
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


