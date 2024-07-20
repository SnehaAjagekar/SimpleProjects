console.log('done');
let boxes = document.querySelectorAll(".box");
let result = document.querySelector(".result");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#resetButton");

let turnO = true;

let winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
box.addEventListener("click",() => {
    console.log("box was clicked");

    if(turnO){
        box.innerText = "0";
        turnO = false;
    }else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled =true;
    checkWinner();
})
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    result.classList.remove("hide");
}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !== "" && pos2val !== "" && pos3val !== "" ){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
                boxes.forEach((box) => box.disabled= true)
                return;
            }
        }
    }
}

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;  
    });

    turn = true;
    msg.innerText = "";
    result.classList.add("hide");
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);



