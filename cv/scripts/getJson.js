var nome = document.getElementById("nome");

async function getjson(){
    const response = await fetch("./cv.json");
    var data= await response.json();
    console.log(data);
    show(data);
}

getjson();
function show(data){
    nome.innerText = data.basics.name;

}
