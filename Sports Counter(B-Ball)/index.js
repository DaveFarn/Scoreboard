p1ScoreCount = document.getElementById("p1Score")
p1count = 0
p2ScoreCount = document.getElementById("p2Score")
p2count = 0

function p1Add1(){
    p1count +=1
    p1ScoreCount.textContent = p1count
}
function p1Add2(){
    p1count +=2
    p1ScoreCount.textContent = p1count
}
function p1Add3(){
    p1count +=3
    p1ScoreCount.textContent = p1count
}


function p2Add1(){
    p2count +=1
    p2ScoreCount.textContent = p2count
}
function p2Add2(){
    p2count +=2
    p2ScoreCount.textContent = p2count
}
function p2Add3(){
    p2count +=3
    p2ScoreCount.textContent = p2count
}