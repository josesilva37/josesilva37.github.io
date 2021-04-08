let items = document.getElementsByClassName("grid-item");
for(i=0;i<items.length;i++){
    items[i].addEventListener("mouseover",mudaCor);
    items[i].addEventListener("mouseout",mudaCor);
}

function mudaCor(evento) {
    if(evento.type === "mouseout"){
        evento.target.style.backgroundColor = "white";
        return;
    }
        switch (evento.target.innerHTML) {
            case "Verde":
                evento.target.style.backgroundColor = "green";
                break;
            case "Amarelo":
                evento.target.style.backgroundColor = "yellow";
                break;
            case "Vermelho":
                evento.target.style.backgroundColor = "red";
                break;
            case "Azul":
                evento.target.style.backgroundColor = "blue";
                break;
        
        }
    }

