const Long = () => {
    let div = document.getElementById("mainContent");
    div.parentNode.removeChild(div);
    document.getElementById("main").innerHTML = ` 
    <div id = "mainContent">
    <button onclick = "StartL()">Start</button>
    <button onclick = "Long()">Long Break</button>
    <button onclick = "Medium()">Medium Break</button>
    <button onclick = "Short()">Short Break</button>
    <output id = "timer"></output>
</div>
    `
}

const Medium = () => {
    let div = document.getElementById("mainContent");
    div.parentNode.removeChild(div);
    document.getElementById("main").innerHTML = ` 
    <div id = "mainContent">
    <button onclick = "StartS()">Start</button>
    <button onclick = "Long()">Long Break</button>
    <button onclick = "Medium()">Medium Break</button>
    <button onclick = "Short()">Short Break</button>
    <output id = "timer"></output>
</div>
    `
}

const Short = () => {
    let div = document.getElementById("mainContent");
    div.parentNode.removeChild(div);
    document.getElementById("main").innerHTML = ` 
    <div id = "mainContent">
    <button onclick = "StartS()">Start</button>
    <button onclick = "Long()">Long Break</button>
    <button onclick = "Medium()">Medium Break</button>
    <button onclick = "Short()">Short Break</button>
    <output id = "timer"></output>
</div>
    `
}


function StartL(){
    let min = 24;
    let sec = 59;
}
