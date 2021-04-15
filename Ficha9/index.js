let letrasContainer = document.getElementById("letrasContainer");

let letras = document.getElementsByClassName("letra");
var acertadas= 0;
var tentativas = 0;
var palavra;

for (let i = 0; i < letras.length; i++) {
    letras[i].addEventListener("mouseover", mudaCor);
    letras[i].addEventListener("mouseout", resetCor);
    letras[i].addEventListener("click", verifica);
}



let r = Math.floor(Math.random() * 11);
switch (r) {
    case 0:
        palavra = "Ajax";
        break;
    case 1:
        palavra = "CSS";
        break;
    case 2:
        palavra = "DOM";
        break;
    case 3:
        palavra = "HTML";
        break;
    case 4:
        palavra = "JAVASCRIPT";
        break;
    case 5:
        palavra = "JQUERY";
        break;
    case 6:
        palavra = "JSON";
        break;
    case 7:
        palavra = "PHP";
        break;
    case 8:
        palavra = "PROGRAMACAO";
        break;
    case 9:
        palavra = "TECNOLOGIAS";
        break;
    case 10:
        palavra = "WEB";
        break;
}
espacos = document.getElementsByClassName("espacos")[0];
for (let i = 0; i < palavra.length; i++) {
    let o = document.createElement("div");
    o.innerHTML = palavra[i];
    o.style.color = "white";
    o.className = "borda";
    espacos.appendChild(o);
}



function verifica(event) {

    var target = event.target;
    let obj = document.getElementsByClassName("borda");
    let acertou = false;
    let incorrect = document.createElement("img")
    incorrect.className="incorrect";
    let hangman = document.getElementById("hangman");
    incorrect.src = "incorrect.gif";
    for (let i = 0; i < palavra.length; i++) {
        if (target.innerHTML == palavra[i]) {
            for (let j = 0; j < obj.length; j++) {
                if (obj[i].innerHTML == palavra[i]) {
                    obj[i].style.color = "black";
                    acertou = true;
                }
            }
        }
    }
    let termino = true;
    for(let i=0;i<palavra.length;i++){
        if(obj[i].style.color == "white"){
            termino=false;
        }
    }
    if(termino==true){
        window.alert("Acertou");
            setTimeout(function () {
                location.reload();
            }, 1500);
    }
    if (acertou == true) {
        target.style.pointerEvents = "none";
        target.style.color = "green";
    }
    if (acertou == false) {
        tentativas = tentativas + 1;
        switch (tentativas) {
            case 1:
                let w1 = document.createElement("img");
                w1.src="wrong-1.gif";
                w1.className ="parts";
                hangman.appendChild(w1);
                break;
            case 2:
                let w2 = document.createElement("img");
                w2.src="wrong-2.gif";
                w2.className ="parts";
                hangman.appendChild(w2);
                break;
            case 3:
                let w3 = document.createElement("img");
                w3.src="wrong-3.gif";
                w3.className ="parts";
                hangman.appendChild(w3);
                break;
            case 4:
                let w4 = document.createElement("img");
                w4.src="wrong-4.gif";
                w4.className ="parts";
                hangman.appendChild(w4);
                break;
            case 5:
                let w5 = document.createElement("img");
                w5.src="wrong-5.gif";
                w5.className ="parts";
                hangman.appendChild(w5);
                break;
            case 6:
                let w6 = document.createElement("img");
                w6.src="wrong-6.gif";
                w6.className ="parts";
                hangman.appendChild(w6);
                break;
            case 7:
                let w7 = document.createElement("img");
                w7.src="wrong-7.gif";
                w7.className ="parts";
                hangman.appendChild(w7);
                setTimeout(function () {
                    location.reload();
                }, 1000);
                break;

        }
        for (let k = 0; k < letras.length; k++) {
            target.style.pointerEvents = "none";
            target.style.background = "red";
            target.appendChild(incorrect);
        }
    }
}
function mudaCor(event) {
    event.target.style.background = "grey";
}
function resetCor(event) {
    event.target.style.background = "white";
}
