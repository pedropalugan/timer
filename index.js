

/* const fodase = () =>{
    let min = parseInt(document.getElementById("minuto").value);
    let sec = parseInt(document.getElementById("segundo").value);
    for (let m = min; m >= 0; m--){
        if (m == min){
        for(let s = sec; s >= 0; s--){
            document.getElementById("cronometro").innerHTML = m + " : " + s;
            console.log(m + " : " + s)
        }
    }
    else if (m < min){
        for(let s = 59; s >= 0; s--){
            document.getElementById("cronometro").innerHTML = m + " : " + s;
            console.log(m + " : " + s)
        }
    }
} */



function start(){
const minuto = () =>{ 
    let m = parseInt(document.getElementById("minuto").value);
    timerM()
    setInterval(timerM, 1000)
    function timerM(){
    if (m >= 0){
    document.getElementById("cronometro1").innerHTML = m
    m--
    }
    else{

    }
    }
}
minuto()
const segundo = () =>{
    let s = parseInt(document.getElementById("segundo").value);
    timerS()
    setInterval(timerS, 100)
    function timerS(){
        if (s >= 0){
            document.getElementById("cronometro2").innerHTML = s
            s--
            }
            else{
        
            }
    }
}
segundo()
}