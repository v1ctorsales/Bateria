
for(x=0; x<document.querySelectorAll(".drum").length+1; x++){

document.querySelectorAll("button")[x].addEventListener("click", handleClick)


//Se clicar, passo pra makSound o "innerHTML"
function handleClick(){
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML);
}
}


//Se apertar uma tecla, passo pra makeSound "event.key"
document.addEventListener("keydown", function(event){

    makeSound(event.key)
    buttonAnimation(event.key)
})


//"innerHTML" e "event.key" são letras.
function makeSound(key){
    switch (key) {
    case "q":
        var tom1 = new Audio ("sounds/guitarra/guitarra1.mp3")
        tom1.play();
        tom1.volume= 0.3;
        break;
    case "w":
        var tom1 = new Audio ("sounds/guitarra/guitarra2.mp3")
        tom1.play();
        tom1.volume= 0.3;
        break;
    case "e":
        var tom1 = new Audio ("sounds/guitarra/guitarra3.mp3")
        tom1.play();
        tom1.volume= 0.3;
        break;
    case "r":
        var tom1 = new Audio ("sounds/guitarra/guitarra4.mp3")
        tom1.play();
        tom1.volume= 0.3;
        break;
    case "t":
        var tom1 = new Audio ("sounds/guitarra/guitarra5.mp3")
        tom1.play();
        tom1.volume= 0.3;
        break;
    case "y":
        var tom1 = new Audio ("sounds/guitarra/guitarra6.mp3")
        tom1.play();
        tom1.volume= 0.3;
        break;
    default:
        console.log("erro");
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed")}, 70)
}