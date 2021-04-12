var conta= document.getElementById("conta");
var resultado = document.getElementById("resultado");
var input = document.createElement("input");
var res = document.createElement("res");

res.type= "text"
res.name="res_display"
input.type="text";
input.name="conta_input";

conta.appendChild(input);
resultado.appendChild(res);