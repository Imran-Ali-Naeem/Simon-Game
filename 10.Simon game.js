let gameSeq = []
let userSeq = []

let btns = ["yellow", "red", "purple", "green"]

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (started === false) {
        started = true;
        levelUp();
    }
});

let h2 = document.querySelector("h2");

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function checkANs(ind) {
    if (userSeq[ind] == gameSeq[ind]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000); // for wait 1 sec
        }
    }
    else {
        h2.innerHTML = `Game Over <br> <b>Your Score is ${level}</b> <br> Press any key to start`
        reset();
    }
}

function UserFlash(btn) {
    btn.classList.add("Userflash");
    setTimeout(function () {
        btn.classList.remove("Userflash");
    }, 250);
}




function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `level:\t${level}`;

    let randIndx = Math.floor(Math.random() * 4);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    //    Now, randColor holds a string like "yellow", "red", "purple", or "green".
    gameSeq.push(randColor);

    gameFlash(randBtn);
}


function btnPress() {
    if (!started) return;

    let btn = this;
    UserFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkANs(userSeq.length - 1);
}


let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}




function reset() {
    gameSeq = []
    userSeq = []
    started = false;
    level = 0;

}