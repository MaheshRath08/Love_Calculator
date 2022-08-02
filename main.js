let yName = document.getElementById("yn")
let tName = document.getElementById("tn")
let findBtn = document.getElementById("findBtn")
let main = document.querySelector(".main")
let container = document.querySelector(".container")
let result = document.querySelector(".result")

findBtn.addEventListener("click", ()=>{
    main.style.transform = "scale(0)"
    container.style.display = "flex"
    
    let score = Math.floor(Math.random()*101)
    let message = condition(score)
    result.innerHTML = `<h1>${message}</h1>
                        <span class="yn name">${yName.value}</span><span class="score">${score}%</span><span class="tn name">${tName.value}</span>  
                        <button id="retry" onclick="retry()"><i class="fa-solid fa-arrow-rotate-left"></i>Retry</button>`                        
    yName.value=""
    tName.value=""
})

function retry(){
    container.style.display = "none"
    main.style.transform = "scale(1)"
}

function condition(e){
    let message;
    if(e==100){
        message = "You two are Perfect!! Like potato and steam"
    }else if(e >= 90 && e<100){
        message = "Go for it!!Love alone can rekindle life"
    }else if(e>=70 && e<90){
        message = "Lift eachother's heart to new heights"
    }else if(e>=50 && e<70){
        message = "Not bad! You can make it easily"
    }else if (e>=30 && e<50){
        message = "Have enough courage to trust love one more time"
    }else if (e<30 && e!=0){
        message = "No worries mate!! lemme talk to a dalal"
    }else if(e==0){
        message = "Tumse naa ho payega bro"
    }else{
        message = "Author loves you more than anyone <3"
    }
    return message
}
