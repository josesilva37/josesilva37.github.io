var tamanho = prompt("Enter bord size");

var vez = false;

let tb = document.getElementsByClassName("tabuleiro")[0];
let input = document.getElementsByClassName("input")[0];

input.innerText = tamanho;
tb.style.gridTemplateColumns = "repeat("+ tamanho+",auto)";
if (!isNaN(tamanho)) {
    for (let i = 0; i < tamanho; i++) {
        for(let j=0;j< tamanho;j++){
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
        let lenghtH = tamanho*tamanho-2;
        let lenghtV = tamanho*tamanho;

        //Verifica Horizontal
        for(let i = 0 ; i<lenghtH;i+=1){       
            if(array[i].children[0] != null && array[i+1].children[0] != null && array[i+2].children[0] != null){
                if(array[i].children[0].style.backgroundImage == array[i+1].children[0].style.backgroundImage && array[i+1].children[0].style.backgroundImage == array[i+2].children[0].style.backgroundImage){
                    console.log("venceu");
                }
            }
        }
        let array2 = tb.children;
        //Verifica Vertical
        for(let i = 0;i<tamanho;i+=1){
            for(let j=0;j<tamanho;j+=1){
                if(array2[i].children[0] != null && array2[i+(tamanho)].children[0] != null && array2[i+(2*tamanho)].children[0] != null){
                    if(array2[i].children[0].style.backgroundImage == array2[i+(tamanho)].children[0].style.backgroundImage && array2[i+(tamanho)].children[0].style.backgroundImage == array2[i+(2*tamanho)].children[0].style.backgroundImage){
                        console.log("venceu");
                    }
                }
            }
            
        }
        
    

}

