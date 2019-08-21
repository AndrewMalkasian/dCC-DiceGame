// import { type } from "os";

let newPlayerOne = new player(0, 0);
// let newPlayerTwo = new player(0, 0);

function player(yardsToPin, strokeCount){
    this.yardsToPin = yardsToPin;
    this.strokeCount = strokeCount;
}
// let holeOne = new course(50, 25, 15, 10);
// function course(yardsToPin, fairway, sandPit, puttingGreen)  {
    //     let course;
    //     this.yardsToPin = yardsToPin,
    //     this.fairway = fairway;
    //     this.sandPit = sandPit;
    //     this.puttingGreen = puttingGreen;
    //     return course;
    // }
    
   
    
    

runGame();

function runGame() {
    
    let yardsToPin= 21 ;
    while (yardsToPin > 0){
        if (50 >= yardsToPin && yardsToPin >=21){
          let clubDistance = fairwayClubs();
          yardsToPin = yardsToPin - clubDistance;
          console.log(yardsToPin);
         
        }
        if (20 >= yardsToPin && yardsToPin >= 11) {
            let clubDistance = sandwedge();
            yardsToPin = yardsToPin - clubDistance;
           console.log(yardsToPin);
                       
        }
        if (10 >= yardsToPin && yardsToPin >=0){
            let clubDistance = puttingClubs();
            yardsToPin = yardsToPin - clubDistance;
            console.log(yardsToPin);
        }
        if (yardsToPin === 0){
            console.log("You win!");
        }

        if (yardsToPin < 0){
            let clubDistance = puttingClubs();
            yardsToPin = yardsToPin + clubDistance;
            console.log(yardsToPin);
        }
        else{

        }
        
    }    
} 


// function course(yardsToPin, fairway, sandPit, puttingGreen)  {
//     let course;
//     this.yardsToPin = yardsToPin, 
//     this.fairway = fairway;
//     this.sandPit = sandPit;
//      this.puttingGreen = puttingGreen;
//        return course;

   
function randomDiceValue (dieSides){
    return Math.floor(Math.abs(Math.random(0)*(dieSides)+1)); 
}



    

function fairwayClubs(){
    let userInput = prompt("1: Your Twenty Iron? 2: Your Twelve Iron? 3: Your Ten Iron? 4: Your Eight Iron?");
    switch (userInput) {
        case "1": 
            return randomDiceValue(20);
            break;
        case "2": 
            return randomDiceValue(12);
            break;
        case "3": 
            return randomDiceValue(10);
            break;
        case "4": 
            return randomDiceValue(1);
            break;
           
        default:
            break;
    }  
}
function sandwedge(){
       let userInput = prompt("Your sandwedge is unreliable. Try to enter whatever yardage you want..")
       console.log(userInput);
        if(typeof(userInput) == "string"){
            let randomDie = randomDiceValue(6);
            console.log("You hit the ball " + randomDie + " yards");
            if (randomDie === 1) {
                console.log ("You take a big swing and wiff, moving the ball one yard. The ball disappears in a hole. Along with You. You died");
                return console.log(gameOver());
            }
            if (randomDie === 2) {
                console.log ("Why are you hitting the golf ball with a sandwich?");
                return 2;    
            }
            if (randomDie === 3) {
                console.log ("You hit the ball three yards.");
                return sandwedge();
            }
            if(randomDie === 4){
                console.log("You've hit the ball four yards.");
                return sandwedge();
            }
            if (randomDie === 5){
                return 5;
            }
            if (randomDie === 6){
                return 6;
            }
            else{
                return;
            }
        }
}


function puttingClubs(){
    let userInput = prompt("You beat the sandpit! 1: Your Twenty Iron? 2: Your Twelve Iron? 3: Your Ten Iron? 4: Your Eight Iron? 5: Your Putter. NOTE: Use your putter.");
    switch (userInput) {
        case "1": 
            let userInput=prompt("That's not a good idea... Are you sure? 1: Yes. 2: No");
                if(userInput === 1){
                    console.log("You hit the ball over the green and into the lake. It gets swallowed by a monster.");
                    return gameOver();
                }
                if(userInput === 2){
                    return puttingClubs();
                }
            return;
            break;
        case "2": 
            return randomDiceValue(12);
            break;
        case "3": 
            return randomDiceValue(10);
            break;
        case "4": 
            return randomDiceValue(8);
            break;
        case "5":
            return randomDiceValue(4);
           
        default:
            break;
    }  
}

function gameOver(){
    console.log("Better luck next time. Maybe you should make better life decisions.");
    return runGame();
}44
// function puttingGreenClubs {
//     let userInput = prompt("You escaped the sand 'trap'... press 1) and putt to win!");

// // }

    // function clubTwentyIron (){
    //     return randomDiceValue(20);
    // }  
    // function clubTwelveIron (){
    //     return randomDiceValue(12);
    // }
    // function clubTenIron (){
    //     return randomDiceValue(10);
    // }
    // function clubEightIron (){
    //     return randomDiceValue(8);
    // }    
    // function clubSandWedge (){
    //     return randomDiceValue(4);
    // }
    // function clubPutter (){
    //     return randomDiceValue(6);