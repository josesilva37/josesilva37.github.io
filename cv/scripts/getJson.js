//basico
var nome = document.getElementById("nome");
var idade = document.getElementById("idade");
var label = document.getElementById('label');
var email = document.getElementById('email');
var lingua = document.getElementById('lingua');
var sobre = document.getElementById('sobre');
//educacao

var containerEducation = document.getElementById("container_education");



async function getjson(){
    const response = await fetch("./cv.json");
    var data= await response.json();
    console.log(data);
    show(data);
}

getjson();
function show(data){
    //basico
    nome.innerText = data.basics.name;
    idade.innerHTML = data.basics.idade;
    label.innerHTML = data.basics.label;
    email.innerHTML = data.basics.email;
    lingua.innerHTML = data.languages;
    sobre.innerText = data.basics.desc;
    //educacao
    
    for(r of data.education){
        containerEducation.insertAdjacentHTML('<div class="card"> <div class="row"><div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500"><div class="card-body cc-education-header"><p>' + r.startDate + '-' + r.endDate+ '</p><div class="h5"></div></div></div></div></div>')
    }
}
