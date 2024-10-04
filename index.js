let buttons = document.querySelectorAll(".container button");
let h3 = document.querySelector("h3");
let resBtn = document.querySelector(".resetBtn");

let playerTurn = true;


let winninglines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


for (let button of buttons) {
    button.addEventListener("click", () => {
        if (playerTurn) {
            button.innerText = "X"
            playerTurn = false
            button.style.color = "blue"
        }
        else {
            button.innerText = "O";
            playerTurn = true;
            button.style.color = "red"
        }
        button.disabled = true;
        checkGame()
    })

}


function checkGame() {
    for (let win of winninglines) {
        let firstVal = buttons[win[0]].innerText;
        let secondVal = buttons[win[1]].innerText;
        let thirdVal = buttons[win[2]].innerText;

        if (firstVal != "" && secondVal != "" && thirdVal != "") {
            if (firstVal === secondVal && secondVal === thirdVal && thirdVal === firstVal) {
                h3.innerText = `${firstVal} player was winned plese reset to Play again  `
                h3.style.color = "white"
                h3.style.textAlign = "center"
                gameWinned()
            } else {
                // console.log("not match")
                //  h3.innerText = "game is end please restart game to play again"
            }
        }
    }
}

function gameWinned() {
    for (let button of buttons) {
        button.disabled = true;
    }
}


resBtn.addEventListener("click", () => {
    for (let button of buttons) {
        button.innerText = ""
        h3.innerText = "";
        button.disabled = false;
    }
})
