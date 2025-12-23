const decBtn = document.getElementById("b1");
const resetBtn = document.getElementById("b2");
const IncBtn = document.getElementById("b3");

const CountLabel = document.getElementById("myLabel1");

let count = 0; 

IncBtn.onclick = function(){
    count++;
    CountLabel.textContent = count;
}

decBtn.onclick = function(){
    count--;
    CountLabel.textContent = count;
}

resetBtn.onclick = function(){
    count =0;
    CountLabel.textContent = count;
}