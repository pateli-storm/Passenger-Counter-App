let incrementBtn = document.getElementById("increment-btn")
let saveBtn = document.getElementById("save-btn")
let countP = document.getElementById("count")
let prevP = document.getElementById("previous-text")

incrementBtn.addEventListener("click" , increment);
saveBtn.addEventListener("click" , save);


let count = 0;

function increment(){
    ++count
    countP.innerHTML = count
}

function save(){
    let prevSave = ` ${count} - `
    prevP.innerHTML += prevSave
}