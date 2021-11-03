window.addEventListener('resize', function (){
  set_cols_size();
});

function set_cols_size(){
  var alturas = [];
  var cols=document.querySelectorAll('.row-multiple')[0].querySelectorAll('.col');
  for (var i=0; i<cols.length; i++) {
    alturas.push(cols[i].offsetHeight);
    console.log(cols[i].offsetHeight);
  }
  
  var max = Math.max.apply(null, alturas);

  console.log("El maximo height es: " + max);

  for (var j=0; j<cols.length; j++) {
    cols[j].style.height=max+"px";
  }
}