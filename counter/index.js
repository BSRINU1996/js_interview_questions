/*
let increBtn = document.getElementById("increase");
let resetBtn = document.getElementById("reset");
let decreeBtn = document.getElementById("decrease");
// console.log(counterValue);
console.log(typeof counterValue);
// increBtn.addEventListener("click", function () {
//     // let newCounterValue = parseInt(counterValue) + 1;
//     document.getElementById("countValue").textContent = parseInt(counterValue) + 1;

// })
increBtn.onclick = function () {
    let counterValue = document.getElementById("countValue").textContent


    // let newCounterValue = parseInt(counterValue) + 1;
    document.getElementById("countValue").textContent = parseInt(counterValue) + 1;
    // console.log(newCounterValue);


}
decreeBtn.onclick = function () {
    let counterValue = document.getElementById("countValue").textContent;
    document.getElementById("countValue").textContent = parseInt(counterValue) - 1;
}
resetBtn.addEventListener("click", function () {
    document.getElementById("countValue").textContent = 0;
})

*/

let counter = 0;

let btns = document.querySelectorAll(".btn")
console.log(btns);
console.log(typeof btns)  //object
let value = document.querySelector("#countValue");
console.log(value);
btns.forEach(function (ele) {
    console.log(ele);
    ele.onclick = function (e) {
        const styles = e.currentTarget.classList;
        console.log(styles);
        if (styles.contains("decreesee")) {
            counter--;
        } else if (styles.contains("increasee")) {
            counter++;
        } else {
            counter = 0;
        }
        value.textContent = counter;
    }


});
