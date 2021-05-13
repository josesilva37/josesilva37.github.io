

async function getjson(){
  const response = await fetch('./Autenticacoes-Evolucao-por-Certificado.json');

  var data= await response.json();
  console.log(data);
  showdata(data);
}

getjson();

function showdata(data){
  let container = document.getElementsByClassName("container")[0];
   for(let r of data){
    let ano = document.createElement("div");
    let mes = document.createElement("div");
    let chavemovel = document.createElement("div");
    let cc = document.createElement("div");
    let advogado = document.createElement("div");
    let soc = document.createElement("div");
    let not = document.createElement("div");
    ano.innerText=r.Ano;
    mes.innerText= r.Mes;
    chavemovel.innerText = r["Chave-Movel-Digital"];
    cc.innerText = r["Cartao-Cidadao"];
    advogado.innerText = r.Advogado;
    soc.innerText = r.Solicitador;
    not.innerText = r.Notario;
    container.appendChild(ano);
    container.appendChild(mes);
    container.appendChild(chavemovel);
    container.appendChild(cc);
    container.appendChild(advogado);
    container.appendChild(soc);
    container.appendChild(not);
  }
}