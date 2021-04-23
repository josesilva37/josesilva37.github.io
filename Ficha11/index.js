let tb = document.getElementsByClassName("tabuleiro")[0];
let input = document.getElementsByClassName("input")[0];
var x= input.value;
if(!isNaN(x)){
    for(let i=0;i<x;i++){
        let o=  document.createElement("div");
         o.className="quadrado";
         tb.appendChild(o);
     }
}
