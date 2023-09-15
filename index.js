var drumn=document.querySelectorAll(".drum").length;


for(i=0; i<drumn; i++){

document.querySelectorAll("button")[i].addEventListener("click", function (){

    var buttonn= this.innerHTML;

    makesound(buttonn);
    buttonanimation(buttonn);
    
});
}



document.addEventListener("keypress",function(event){
    makesound(event.key);
    buttonanimation(event.key);
})


function makesound(key){
    switch (key) {

    case "w":
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
    case "a":
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
    
    case "s":
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
    
    case "d":
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

    case "j":
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;
    case "k":
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;

    case "l":
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    
    default: console.log(buttonn);
            break;



}}

function buttonanimation(crkey){
    var activebtn= document.querySelector("."+crkey);
    activebtn.classList.add("pressed");

    setTimeout(function ()  {
        activebtn.classList.remove("pressed");
    }, 100);
}