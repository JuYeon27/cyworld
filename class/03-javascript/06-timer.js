let isStarted = false;

const auth = () =>{

    if(isStarted === false){
        // 타이머가 작동중이 아닐때
        isStarted = true
        document.getElementById("finish").disabled = false
        let token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
        document.getElementById("target").innerText = token
        document.getElementById("target").style.color = "#" + token
    
        let time = 5
        let timer

        timer = setInterval(function(){

            if(time >= 0){
                let min
                let sec
                min = Math.floor(time / 60)
                sec = String(time % 60).padStart(2,"0")
                document.getElementById("timer").innerText = min + ":" + sec
                time -= 1
            }else{
                document.getElementById("finish").disabled = true
                isStarted = false
                console.log("타이머 작동중")
                clearInterval(timer)
            }
        },1000)
        
    }else{
        // 타이머가 작동중일때
    }
}