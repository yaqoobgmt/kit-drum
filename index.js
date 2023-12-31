// detecting button press

var numberofbtn = document.querySelectorAll(".drum").length;
for(var i=0; i<numberofbtn; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

});
}


//Detecting keyboard Press

document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});

function makesound(key){
    switch (key) {
        case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            case "a":
                var tom1 = new Audio('sounds/tom-2.mp3');
                tom1.play();
                break;
            case "s":
                var tom1 = new Audio("sounds/tom-3.mp3");
                tom1.play();
                break;
            case "d":
                var tom1 = new Audio("sounds/tom-4.mp3");
                tom1.play();
                break;
            case "j":
                var tom1 = new Audio("sounds/snare.mp3");
                tom1.play();
                break;
            case "k":
                var tom1 = new Audio("sounds/crash.mp3");
                tom1.play();
                break;
            case "l":
                var tom1 = new Audio('sounds/kick-bass.mp3');
                tom1.play();
                break;
        
            default:
                console.log(buttonInnerHTML);
    }
}   

function buttonAnimation(currKey){
    var activebtn = document.querySelector("."+currKey);
    activebtn.classList.add("pressed");
    setTimeout(function(){
        activebtn.classList.remove("pressed");
    }, 100)
}