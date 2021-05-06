let button = document.getElementsByClassName("but")[0];
let input = document.getElementsByClassName("input")[0];


button.addEventListener("click", callApi);

function callApi() {
    console.log("entrou");
    let inp = input.innerText;
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onload = function () {
        if (xhr.status = 200) {
            let box = document.getElementById("box");
            
            if (box.children[0] != null) {
                box.innerHTML="";
            }
            let img = document.createElement("img");
            img.src = xhr.response.url;
            box.appendChild(img);
        } else {
            console.log("Error")
        }
    }
    xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=MrTgRA5QH9b6zk051AN9cgOYY7IrkzbR5VXqhJmo" + "&date=" + inp, true);
    xhr.send();
}