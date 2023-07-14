

// var a = 5;
// console.log(a);


let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

console.log(saveEl);
function increment() {
    count = count + 1;
    document.getElementById("count-el").innerText = count;
}

function decrement() {
    if (count > 0) {
        count = count - 1;
        document.getElementById("count-el").innerText = count;
    }
    else
        document.getElementById("count-el").innerText = 0;
}

function save() {
    let countStr = count + "-";
    saveEl.innerText += countStr;
    countEl.innerText = 0;
    count = 0; 
    console.log(count);
}