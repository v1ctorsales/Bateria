
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
        case "w":
        var tom1 = new Audio ("sounds/baixo/corda1.mp3")
        tom1.volume= 0.3;
        tom1.play()
        break;
    case "a":
        var tom2 = new Audio ("sounds/baixo/corda2.mp3")
        tom2.volume= 0.3;
        tom2.play()
        break;
    case "s":
        var tom3 = new Audio ("sounds/baixo/corda3.mp3")
        tom3.volume= 0.3;
        tom3.play()
        break;
    case "d":
        var tom4 = new Audio ("sounds/baixo/corda4.mp3")
        tom4.volume= 0.3;
        tom4.play()
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