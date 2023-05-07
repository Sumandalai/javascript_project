let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}

document.addEventListener("keypress", (event)=> {

  makeSound(event.key);

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "w":
       let tom1 = new Audio("music/m1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("music/m2.wav");
      tom2.play();
      break;
      
      case "s":
      let tom3 = new Audio('music/ok.wav');
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio('music/m3.wav');
      tom4.play();
      break;

    case "j":
      let snare = new Audio('music/m4.wav');
      snare.play();
      break;

    case "k":
    let crash = new Audio('music/m5.wav');
      crash.play();
      break;   
  }
}


function buttonAnimation(currentKey) {

  let activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 1000);

}
