var tamanho = Number(prompt("Enter bord size"));

var vez = false;

let tb = document.getElementsByClassName("tabuleiro")[0];
let input = document.getElementsByClassName("input")[0];

input.innerText = tamanho;
tb.style.gridTemplateColumns = "repeat(" + tamanho + ",auto)";
if (!isNaN(tamanho)) {
    for (let i = 0; i < tamanho; i++) {
        for (let j = 0; j < tamanho; j++) {
            let o = document.createElement("div");
            o.className = "quadrado";
            o.addEventListener("click", click);
            tb.appendChild(o);
        }

    }
}

function click(e) {
    if (vez == true) {
        if (e.currentTarget.children[0] == null) {
            let j = document.createElement("img");
            j.style.backgroundImage = "url('bola.jpg')";
            j.className = "simbolo";
            e.currentTarget.appendChild(j);
            vez = false;
        }

    } else {
        if (e.currentTarget.children[0] == null) {
            let j = document.createElement("img");
            j.style.backgroundImage = "url('cruz.jpg')";
            j.className = "simbolo";
            e.currentTarget.appendChild(j);
            vez = true;
        }
    }
    let array = tb.children;
    let lenghtH = tamanho * tamanho - 2;
    let lenghtV = tamanho * tamanho;

    //Verifica Vertical
    for (let i = 0; i < tamanho; i += 1) {
        if (array[i].children[0] != null && array[i + tamanho].children[0] != null && array[i + tamanho + tamanho].children[0] != null) {
            if (array[i].children[0].style.backgroundImage == array[i + (tamanho)].children[0].style.backgroundImage && array[i + (tamanho)].children[0].style.backgroundImage == array[i + (2 * tamanho)].children[0].style.backgroundImage) {
                console.log("venceu");

            }
        }
    }
    //Verifica Horizontal
    for (let i = 0; i < lenghtH; i += 1) {
        if (array[i].children[0] != null && array[i + 1].children[0] != null && array[i + 2].children[0] != null) {
            if (array[i].children[0].style.backgroundImage == array[i + 1].children[0].style.backgroundImage && array[i + 1].children[0].style.backgroundImage == array[i + 2].children[0].style.backgroundImage) {
                console.log("venceu");
            }
        }
    }

    //verifica Diagonals
    
}

