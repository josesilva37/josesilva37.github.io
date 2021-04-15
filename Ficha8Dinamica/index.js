var size;
var container = document.getElementById("container");

function promp() {
    size = prompt("Insira o tamanho da calculadora(10-50)", "10");
    for (let i = 0; i < size; i++) {
        let e = document.createElement("div");
        e.innerHTML = i;
        e.className = "button";
        container.appendChild(e);
    }
    
    function createButton(button) {
        let b = document.createElement("div");
        b.innerHTML = button;
        b.className = "button";
        container.appendChild(b);
    }
    createButton("C");
    createButton("+");
    createButton("-");
    createButton("/");
    createButton("*");
    createButton("=");


}

function mouseOut(butao) {
    butao.target.style.backgroundColor = "green";
}

function mouseOver(butao) {
    butao.target.style.backgroundColor = "grey";
}
promp();
var butoes = document.getElementsByClassName("button");
console.log(butoes.length);
for (let i = 0; i < butoes.length; i++) {
    butoes[i].addEventListener("click", click);
    butoes[i].addEventListener("mouseover", mouseOver);
    butoes[i].addEventListener("mouseout", mouseOut);
}


function click(butao) {
    let input = document.getElementsByClassName("input")[0];
    let resultado = document.getElementsByClassName("display")[0];
    switch (butao.target.innerHTML) {
        case "0":
            input.innerHTML += "0";
            break;
        case "1":
            input.innerHTML += "1";
            break;
        case "2":
            input.innerHTML += "2";
            break;
        case "3":
            input.innerHTML += "3";
            break;
        case "4":
            input.innerHTML += "4";
            break;
        case "5":
            input.innerHTML += "5";
            break;
        case "6":
            input.innerHTML += "6";
            break;
        case "7":
            input.innerHTML += "7";
            break;
        case "8":
            input.innerHTML += "8";
            break;
        case "9":
            input.innerHTML += "9";
            break;
        case "+":
            input.innerHTML += "+";
            break;
        case "-":
            input.innerHTML += "-";
            break;
        case "*":
            input.innerHTML += "*";
            break;
        case "/":
            input.innerHTML += "/";
            break;
        case "C":
            input.innerHTML = "";
            resultado.innerHTML = "";
            break;
        case "=":
            resultado.innerHTML = eval(input.innerHTML);
            break;

    }
}

