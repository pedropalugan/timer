const Long = () => {
    let div = document.getElementById("mainContent");
    div.parentNode.removeChild(div);
    document.getElementById("main").innerHTML = ` 
    <div id = "mainContent">
    <output id = "timer" class = "timer">25:00</output>
    <div class="box2">
    <button onclick = "StartL()" class="btn btn-success">Start</button>
    <button onclick = "Long()" class="btn btn-primary">Long Break</button>
    <button onclick = "Medium()" class="btn btn-primary">Medium Break</button>
    <button onclick = "Short()" class="btn btn-primary">Short Break</button>
    <button onclick = "Reset()" class="btn btn-danger">Reset Timer</button>
    </div>
    </div>
    `
}

const Medium = () => {
    let div = document.getElementById("mainContent");
    div.parentNode.removeChild(div);
    document.getElementById("main").innerHTML = ` 
    <div id = "mainContent">
    <output id = "timer" class = "timer">15:00</output>
    <div class="box2">
    <button onclick = "StartM()" class="btn btn-success">Start</button>
    <button onclick = "Long()" class="btn btn-primary">Long Break</button>
    <button onclick = "Medium()" class="btn btn-primary">Medium Break</button>
    <button onclick = "Short()" class="btn btn-primary">Short Break</button>
    <button onclick = "Reset()" class="btn btn-danger">Reset Timer</button>
    </div>
    </div>
    `
}

const Short = () => {
    let div = document.getElementById("mainContent");
    div.parentNode.removeChild(div);
    document.getElementById("main").innerHTML = ` 
<div id = "mainContent">
    <output id = "timer" class = "timer">5:00</output>
    <div class="box2">
    <button onclick = "StartS()" class="btn btn-success">Start</button>
    <button onclick = "Long()" class="btn btn-primary">Long Break</button>
    <button onclick = "Medium()" class="btn btn-primary">Medium Break</button>
    <button onclick = "Short()" class="btn btn-primary">Short Break</button>
    <button onclick = "Reset()" class="btn btn-danger">Reset Timer</button>
    </div>
</div>
    `
}


function StartL(){
    let min = 24;
    let sec = 59;
    function timerLM(){
        if (min <= 0){

        }
        else if (min > 0){
            min--
        }
    }
    function timerLS(){
        if (sec <= 0 && min > 0){
        document.getElementById("timer").innerHTML = min + " : " + sec;
        sec = 59;
        }
        else if (sec > 0){
            if(min > 0){
                if (sec < 10){
                document.getElementById("timer").innerHTML = min + " : " + "0"+sec;
            sec--
                }
                else{
                    document.getElementById("timer").innerHTML = min + " : " + sec; 
                    sec--
                }
            }
            else if(min == 0){
                if (sec < 10){
                    sec--
                    document.getElementById("timer").innerHTML = min + " : " + "0"+sec;
                
                    }
                    else{
                        sec--
                        document.getElementById("timer").innerHTML = min + " : " + sec; 
                    }
            }
        }
    }

    if (min > 0){
        setInterval(timerLS, 1000);
        setInterval(timerLM, 60000);
        }

    }

    function StartM(){
        let min = 14;
        let sec = 59;
        function timerLM(){
            if (min <= 0){
    
            }
            else if (min > 0){
                min--
            }
        }
        function timerLS(){
            if (sec <= 0 && min > 0){
            document.getElementById("timer").innerHTML = min + " : " + sec;
            sec = 59;
            }
            else if (sec > 0){
                if(min > 0){
                    if (sec < 10){
                    document.getElementById("timer").innerHTML = min + " : " + "0"+sec;
                sec--
                    }
                    else{
                        document.getElementById("timer").innerHTML = min + " : " + sec; 
                        sec--
                    }
                }
                else if(min == 0){
                    if (sec < 10){
                        sec--
                        document.getElementById("timer").innerHTML = min + " : " + "0"+sec;
                        }
                        else{
                            sec--
                            document.getElementById("timer").innerHTML = min + " : " + sec; 
                            
                        }
                }
            }
        }
    
        if (min > 0){
            setInterval(timerLS, 1000);
            setInterval(timerLM, 60000);
            }
    
        }


        function StartS(){
            let min = 4;
            let sec = 59;
            function timerLM(){
                if (min <= 0){
        
                }
                else if (min > 0){
                    min--
                }
            }
            function timerLS(){
                if (sec <= 0 && min > 0){
                document.getElementById("timer").innerHTML = min + " : " + sec;
                sec = 59;
                }
                else if (sec > 0){
                    if(min > 0){
                        if (sec < 10){
                        document.getElementById("timer").innerHTML = min + " : " + "0"+sec;
                    sec--
                        }
                        else{
                            document.getElementById("timer").innerHTML = min + " : " + sec; 
                            sec--
                        }
                    }
                    else if(min == 0){
                        if (sec < 10){
                            sec--
                            document.getElementById("timer").innerHTML = min + " : " + "0"+sec;
                        
                            }
                            else{
                                sec--
                                document.getElementById("timer").innerHTML = min + " : " + sec; 
                            
                            }
                    }
                }
            }
        
            if (min > 0){
                setInterval(timerLS, 1000);
                setInterval(timerLM, 60000);
                }
        
            }
        
const Reset = () =>{
    let div = document.getElementById("mainContent")
    div.parentNode.removeChild(div)
    document.getElementById("main").innerHTML = `
    <div id = "mainContent">
    <output id = "timer" class = "teste">25:00</output>
    <div class = "box2">
    <button onclick = "Long()" class="btn btn-primary">Long Break</button>
    <button onclick = "Medium()" class="btn btn-primary">Medium Break</button>
    <button onclick = "Short()" class="btn btn-primary">Short Break</button>
    </div>
    </div>
    `
}
