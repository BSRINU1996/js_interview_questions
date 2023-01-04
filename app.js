// #ff0000
// let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// document.getElementById("btn").onclick = function () {
//     let hexcode = "#";
//     for (let i = 0; i < 6; i++) {
//         hexcode = hexcode + arr[randomNumb()];
//     }
//     console.log(hexcode)
//     document.body.style.backgroundColor = hexcode;
// }
// function randomNumb() {
//     return Math.floor(Math.random() * arr.length);
// }

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
document.getElementById("btn").onclick = function () {
    //#00bfff
    let hexcode = "#";
    for (let i = 0; i < 6; i++) {
        hexcode = hexcode + arr[someRandomNumberArr()]
    }
    console.log(hexcode)

    document.body.style.backgroundColor = hexcode;
}

function someRandomNumberArr() {
    return Math.floor(Math.random() * arr.length)
}



