var nome = document.getElementById("nome");
var idade = document.getElementById("idade");
var label = document.getElementById('label');
var email = document.getElementById('email');
var lingua = document.getElementById('lingua');

async function getjson(){
    const response = await fetch("./cv.json");
    var data= await response.json();
    console.log(data);
    show(data);
}

getjson();
function show(data){
    nome.innerText = data.basics.name;
    idade.innerHTML = data.basics.idade;
    label.innerHTML = data.basics.label;
    email.innerHTML = data.basics.email;
    lingua.innerHTML = data.languages;

}
