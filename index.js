let do_dai = document.querySelectorAll(".drum");
for (let i = 0; i < do_dai.length; i++) {
    do_dai[i].addEventListener("click",function(e) {
   

        let kytu = e.target.innerHTML
        lennhac(kytu)
        lenDen(kytu)
    })
}

function lennhac(kytu) {
    let a;
    switch(kytu){
        case "w":
            a = new Audio("sounds/crash.mp3");
            a.play();
            break;
        case "a":
            a = new Audio("sounds/kick-bass.mp3");
            a.play();
            break;
        case "s":
            a = new Audio("sounds/snare.mp3");
            a.play();
            break;
        case "d":
            a = new Audio("sounds/tom-3.mp3");
            a.play();
            break;
        case "j":
            a = new Audio("sounds/tom-1.mp3");
            a.play();
            break;
        case "k":
            a = new Audio("sounds/tom-2.mp3");
            a.play();
            break;
        case "l":
            a = new Audio("sounds/tom-4.mp3");
            a.play();
            lenDen(e.target)
            break;
    }
}

document.addEventListener("keydown", function(e){
    lennhac(e.key)
    lenDen(e.key)
})

function lenDen(a){
    console.log(a)
    let p = document.querySelector("."+a);
    p.classList.add("pressed");

    setTimeout(function(){
        p.classList.remove("pressed");
    },500)
}


