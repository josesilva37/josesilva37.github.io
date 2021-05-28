//basico
var nome = document.getElementById("nome");
var idade = document.getElementById("idade");
var label = document.getElementById('label');
var email = document.getElementById('email');
var email2 = document.getElementById('email2');
var lingua = document.getElementById('lingua');
var sobre = document.getElementById('sobre');
var numero = document.getElementById('numero');
//educacao
var containerEducation = document.getElementById("container_education");
//skills
var listaSkills = document.getElementById("listaSkills");
//Portofolio
var containerPortofolio = document.getElementById("containerPortofolio");
var containerPortofolio2 = document.getElementById("containerPortofolio2");


async function getjson() {
    const response = await fetch("./cv.json");
    var data = await response.json();
    console.log(data);
    show(data);
}

getjson();
function show(data) {
    //basico
    numero.innerHTML = data.basics.numero;
    email2.innerHTML = data.basics.email;
    nome.innerText = data.basics.name;
    idade.innerHTML = data.basics.idade;
    label.innerHTML = data.basics.label;
    email.innerHTML = data.basics.email;
    lingua.innerHTML = data.languages;
    sobre.innerText = data.basics.desc;
    //educacao
    for (r of data.education) {
        containerEducation.insertAdjacentHTML('beforeend', '<div class="card"> <div class="row"><div class="col-md-3 bg-primary" data-aos="fade-right" data-aos-offset="50" data-aos-duration="500"><div class="card-body cc-education-header"><p>' + r.startDate + '-' + r.endDate + '</p><p>' + r.area + '</p><p> ' + r.studyType + ' </p><div class="h5"></div></div></div><p>' + "Estudou no instituto " + r.institution + " no curso de " + r.area + '</p></div></div>');
    }
    //skills
    for (t of data.skills) {
        listaSkills.insertAdjacentHTML('beforeend', '<li>' + t.name + '</li>');
    }
    console.log(Object.keys(data.projetos).length)
  
    if(Object.keys(data.projetos).length > 1){
        for(var i=0;i<(Object.keys(data.projetos).length)/2;i++){
            containerPortofolio.insertAdjacentHTML('beforeend','<div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"> <a href="#web-development"> <figure class="cc-effect"><img src="'+ data.projetos.imgUrl[i] +'" alt="Image" /> <figcaption> <div class="h4">'+ data.projetos.name[i]+ '</div> <p>'+ data.projetos.desc[i]+'</p> </figcaption> </figure> </a></div>');
            containerPortofolio2.insertAdjacentHTML('beforeend','<div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"> <a href="#web-development"> <figure class="cc-effect"><img src="'+ data.projetos.imgUrl[i+1]+'" alt="Image" /> <figcaption> <div class="h4">'+ data.projetos.name[i]+1+ '</div> <p>'+ data.projetos.desc[i+1]+'</p> </figcaption> </figure> </a></div>');
        }
    }else{
        for(p of data.projetos){
            containerPortofolio.insertAdjacentHTML('beforeend','<div class="cc-porfolio-image img-raised" data-aos="fade-up" data-aos-anchor-placement="top-bottom"> <a href="#web-development"> <figure class="cc-effect"><img src="'+ p.imgUrl +'" alt="Image" /> <figcaption> <div class="h4">'+ p.name+ '</div> <p>'+ p.desc+'</p> </figcaption> </figure> </a></div>');
    
        }
    }
    
}
