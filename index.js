
function popupToggle(){
  var popup = document.getElementById("discord-server");
  popup.classList.toggle("active");
}


var icon = document.getElementById("iconlight");


icon.onclick = function(){
  document.body.classList.toggle("light-theme");
  if(document.body.classList.contains("light-theme")){
    icon.src = "images/sun.svg";
  }
  else{
    icon.src = "images/moon.svg";
  }
}
