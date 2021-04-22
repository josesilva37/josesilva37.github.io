let bAdd=document.getElementById("bAdd");

instance = new dtsel.DTS('input[name="dateTimePicker"]');

bAdd.addEventListener("click", adicionar);

function adicionar(){
    let input = document.getElementById("tarefa");
    let data = document.getElementById("data");
    let conTarefas = document.getElementsByClassName("tarefas")[0];
    if(input.innerText.length > 0 && data.value.length >0){
        let tc = document.createElement("div");
        tc.className="lista";
        conTarefas.appendChild(tc);
        let t = document.createElement("div");
        t.className = "lista";
        t.innerText = input.innerText;
        tc.appendChild(t);
        let d = document.createElement("div");
        d.className="lista";
        d.innerText = data.value;
        tc.appendChild(d);
        let b = document.createElement("div");
        b.innerText="-";
        b.className="bRemove";
        b.addEventListener("click", remover);
        tc.appendChild(b);

        tc.addEventListener("click",editar);

        //Reset dados
        input.innerHTML="";
        data.value = "";
    }
    
}

function remover(e){
    e.currentTarget.parentNode.remove();
}

function editar(e){
    let tc = e.currentTarget;
    let input = document.getElementById("tarefa");
    let data = document.getElementById("data");
    e.currentTarget.style.backgroundColor= "black";
    let c = e.currentTarget.childNodes;
    input.innerText = c[0].innerText;
    data.value = c[1].innerText;
    bAdd.innerText="v";
    function remove(e){
        tc.remove();
        bAdd.innerText="+";
    }
    bAdd.addEventListener("click", remove);
}