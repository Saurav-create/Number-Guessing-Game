let low = 1;

let high = 10;
let chanceLeft = 3;





const numberLoop = () => {
    let correcr_ans = Math.floor(Math.random() * (high - low + 1) + low);
    let win = false;
    


    for (let i = 1; i <= 3; i++) {


        let guessValue = prompt("Enter the number // To Exit Game type 0");

        if(guessValue == 0){
            win = true;
            break;
        }

        if (guessValue == correcr_ans) {
            alert("You Win !");
            win = true;
            break;
        }
        else if (guessValue > correcr_ans) {
           
            alert("Correct answer is smaller!" + "And you have " + (chanceLeft-i) + " chances left");
        }
        else {
            

            alert("Correct answer is greater! "  + "And you have " + (chanceLeft-i) + " chances left")
        }


    }

    if (win == false ) {

        alert("You Lose!");
    }


}

 const restartGame = () =>{
  numberLoop();
 }

