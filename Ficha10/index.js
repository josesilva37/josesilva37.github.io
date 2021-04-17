let bAdd=document.getElementById("bAdd");

bAdd.addEventListener("click", adicionar);

function adicionar(){
    let input = document.getElementById("tarefa");;
    let t = document.createElement("div");
    t.className="tarefas";
    t.innerHTML = input.innerHTML;
    input.innerHTML="";
}