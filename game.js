let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#your-score");
const comScorePara = document.querySelector("#com-score");




// ----------generate random computerchoice----//

const genComChoice = ()=>{

    let   options  = ["rock", "paper", "scissors"];
    let  randomInx = Math.floor(Math.random() * 3);
          return options[randomInx];

}

// --------- draw function-----///

const drawGame = () =>{
    msg.innerText = "Game is Draw.";
    msg.style.backgroundColor = "grey";
}


// ---------sshowing winner--------//

const showWinner =(userWin, userChoice, comChoice) =>{
    if (userWin) {
       userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `Congrats! your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green";


    } else {
        comScore++;
        comScorePara.innerText = comScore;
        msg.innerText = `Oopss!  ${comChoice} beats your ${userChoice}`;

        msg.style.backgroundColor = "red";

        
    }
}


// --------------play game function--------------//


const playGame = (userChoice) => {

          const comChoice = genComChoice();

          if (userChoice === comChoice) {
               drawGame();

          } else{
            
            let userWin = true;

            if (userChoice === "rock") {
                
                // paper, scissors

                if (comChoice ==="paper") {
                    
                    userWin = false;
                }else{
                    userWin = true;
                }

            }else if(userChoice === "paper"){
                // rock, scissors
                if (comChoice === "scissors") {
                    userWin = false;
                }else{
                    userWin = true;
                }
            }else{
                // rock, paper
                if (comChoice ==="rock") {
                    userWin = false;

                } else {
                    userWin = true;
                }
            }
            showWinner(userWin, userChoice, comChoice);
          }


}




choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
      const userChoice  =  choice.getAttribute("id");
       
      playGame(userChoice);

    })
})