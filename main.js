window.onload=function(){
  document.getElementById("menu").addEventListener ("click", myFunction, false);
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block"){
    x.style.display = "none";
  } else {
    x.style.display = "block"
  }
}
