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
    let min = 2;
    let sec = 59;
    function timerLM(){
        if (min <= 0){

        }
        else if (min > 0){
            min--
        }
    }
    function timerLS(){
        if (sec <= 0){
        console.log(min + " : " + sec)
        sec = 59;
        }
        else if (sec > 0){
            console.log(min + " : " + sec)
            sec--
        }
    }

    if (min > 0){
        setInterval(timerLS, 100);
        setInterval(timerLM, 6000);
        }

    }

    
