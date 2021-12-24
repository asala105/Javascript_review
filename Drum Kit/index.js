function makeSound(val) {
  switch (val) {
    case "w":
      var audioFile = new Audio('sounds/tom-1.mp3');
      audioFile.play();
      break;
    case "a":
      var audioFile = new Audio('sounds/tom-2.mp3');
      audioFile.play();
      break;
    case "s":
      var audioFile = new Audio('sounds/tom-3.mp3');
      audioFile.play();
      break;
    case "d":
      var audioFile = new Audio('sounds/tom-4.mp3');
      audioFile.play();
      break;
    case "j":
      var audioFile = new Audio('sounds/snare.mp3');
      audioFile.play();
      break;
    case "k":
      var audioFile = new Audio('sounds/kick-bass.mp3');
      audioFile.play();
      break;
    case "l":
      var audioFile = new Audio('sounds/crash.mp3');
      audioFile.play();
      break;
    default:
      console.log(val);
  }
}
function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
var buttons = document.querySelectorAll('.drum');
buttons.forEach((item, i) => {
  item.addEventListener('click', function() {
    var buttonVal = this.innerHTML;
    makeSound(buttonVal);
    buttonAnimation(buttonVal);
  });
});

document.addEventListener("keydown", function(event) {
  var keyVal = event.key;
  makeSound(keyVal);
  buttonAnimation(keyVal);
});
