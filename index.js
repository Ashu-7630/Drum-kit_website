function playSound(chracter){
    switch (chracter) {
      case "w":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
      case "a":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
      case "s":
          var audio=new Audio("sounds/snare.mp3");
          audio.play();
          break;
      case "d":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "j":
          var audio=new Audio("sounds/tom-2.mp3");
          audio.play();
          break;
      case "k":
          var audio=new Audio("sounds/tom-3.mp3");
          audio.play();
          break;
      case "l":
            var audio=new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
      default:
        alert("Press the Appropriate button");
  }
}
var btns=document.querySelectorAll("button");
for(var i=0;i<btns.length;i++){
  var bt=btns[i];
  bt.addEventListener("click",buttonClickResponse);

}
function addAnimation(chracter){
  var class_name="."+chracter;
  var activeButton=document.querySelector(class_name);
  activeButton.classList.add("pressed");
  setTimeout(function (){
    activeButton.classList.remove("pressed");
  },100);
}
function buttonClickResponse(){
  var chracter=this.innerHTML;
  playSound(chracter);
  addAnimation(chracter);
}
  document.addEventListener("keydown",function(event){
    var char=event.key;
    playSound(char);
    addAnimation(char);
  });
