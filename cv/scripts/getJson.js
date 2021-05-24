var nome = document.getElementById("nome");
var idade = document.getElementById("idade");
var label = document.getElementById('label');

async function getjson(){
    const response = await fetch("./cv.json");
    var data= await response.json();
    console.log(data);
    show(data);
}

getjson();
function show(data){
    nome.innerText = data.basics.name;
    idade.innerText = data.basics.idade;
    label.innerText = data.basics.label;
}
