var all_bt=document.querySelectorAll("button.drum");
for(var i =0; i< all_bt.length;i++){
  all_bt[i].addEventListener("click",for_mouse);
}
function make_sound(letter){
  switch (letter) {
    case "w":
      document.getElementById("co").style.color="pink";
      var aud1= new Audio("sounds/crash.mp3");
      aud1.play();
      break;
    case "a":
        var aud1= new Audio("sounds/kick-bass.mp3");
        aud1.play();
        break;
    case "s":
        var aud1= new Audio("sounds/snare.mp3");
        aud1.play();
        break;
    case "d":
        var aud1= new Audio("sounds/tom-1.mp3");
        aud1.play();
        break;
    case "j":
        var aud1= new Audio("sounds/tom-2.mp3");
        aud1.play();
        break;
    case "k":
        var aud1= new Audio("sounds/tom-3.mp3");
        aud1.play();
        break;
    case "l":
        var aud1= new Audio("sounds/tom-4.mp3");
        aud1.play();
        break;
    default:
        alert("error");

  }
}
function for_mouse(){
    make_sound(this.innerHTML);
    but_press(this.innerHTML);
}
document.addEventListener("keypress",function(event){make_sound(event.key);but_press(event.key);});
function but_press(key){
  var obj=document.querySelector("."+key);
  obj.classList.add("pressed");
  setTimeout(function(){obj.classList.remove("pressed");}, 100);
}
$(document).on("keypress",doing)
function doing(event){
  $("h1").text(event.key);
}
