// import { type } from "os";


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
    
   
    
let newPlayerOne = new player(0, 0);
    
    


function runGame() {
        
    let yardsToPin= 50;
    while (yardsToPin > 0){
        if (50 >= yardsToPin && yardsToPin >=21){
          let clubDistance = fairwayClubs();
          yardsToPin = yardsToPin - clubDistance;
          console.log(yardsToPin + " yards to go.");
         
        }
        if (20 >= yardsToPin && yardsToPin >= 11) {
            let clubDistance = sandpit();
            yardsToPin = yardsToPin - clubDistance;
           console.log(yardsToPin + " yards to go.");
                       
        }
        if (10 >= yardsToPin && yardsToPin >=0){
            let clubDistance = puttingClubs();
            yardsToPin = Math.abs(yardsToPin - clubDistance);
            console.log(yardsToPin + " yards to go!");
        }

        if (yardsToPin < 0){
            let clubDistance = puttingClubs();
            yardsToPin = yardsToPin + clubDistance;
            console.log(yardsToPin + " yards to go!");
        }
        if (yardsToPin === 0){
            return gameOverWin();
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
    let userInput = prompt("Swing your club) 1: Your Twenty Iron? 2: Your Twelve Iron? 3: Your Ten Iron? 4: Your Eight Iron?");
    switch (userInput) {
        case "1": 
            newPlayerOne.strokeCount++
            let randomDieRoll20 = randomDiceValue(20)
            console.log(randomDieRoll20 + " is how many yards you hit the golf ball!");
            console.log("Score: " + newPlayerOne.strokeCount);
            return randomDieRoll20;
            break;
        case "2": 
            newPlayerOne.strokeCount++
            let randomDieRoll12 = randomDiceValue(12)
            console.log(randomDieRoll12 + " is how many yards you hit the golf ball!");
            console.log("Score: " + newPlayerOne.strokeCount);
            return randomDieRoll12;
            break;
        case "3":
            newPlayerOne.strokeCount++ 
            let randomDieRoll10 = randomDiceValue(10)
            console.log(randomDieRoll10 + " is how many yards you hit the golf ball!");
            console.log("Score: " + newPlayerOne.strokeCount);    
            return randomDieRoll10;
            break;
        case "4": 
            newPlayerOne.strokeCount++
            let randomDieRoll08 = randomDiceValue(8)
            console.log(randomDieRoll08 + " is how many yards you hit the golf ball!");
            console.log("Score: " + newPlayerOne.strokeCount);
            return randomDieRoll08;
            break;
           
        default:
            return fairwayClubs();
    }  
}
function sandpit(){
        alert("You are in the sandpit...");
       let userInput = prompt("The sandpit whips up a sandstorm and blurs your senses. You swing wildly. Entered your desired yards.")
       console.log(userInput);
        if(typeof(userInput) == "string"){
            let randomDie = randomDiceValue(6);
            console.log("You swung with the power to move the golf ball " + randomDie + " yards");
            if (randomDie == 1) {
                newPlayerOne.strokeCount++
                console.log ("You take a big swing and wiff, moving the ball one inch. The ball disappears in a hole. Along with You. You die.");
                return console.log(gameOver());
            }
            if (randomDie == 2) {
                newPlayerOne.strokeCount++
                console.log ("It's a sandwedge. Why are you hitting the golf ball with a sandwich? Drink some water.. + 2 yards");
                return 2;    
            }
            if (randomDie == 3) {
                newPlayerOne.strokeCount++
                console.log ("You would've hit the ball for three yards....")
                console.log ("The aftermath of two mythical beasts fighting cause the ball to move backwards.");
                console.log ("Frustrated, you ask them to move and they turn toward you with fiery eyes turning you to stone.");
                return gameOver();
            }
            if(randomDie == 4){
                newPlayerOne.strokeCount++
                console.log("You cry as the ball rolls backwards into a previously hidden cave. You venture into the cave never to be heard from again.");
                console.log("You are now afraid of caves...")
                return gameOver();
            }
            if (randomDie == 5){
                newPlayerOne.strokeCount++
                console.log("You sigh as death incarnate greets you with its sharpened sickle. Don't go into the sandpit!")
                return gameOver();
            }
            if (randomDie == 6){
                console.log("Good job. You're getting there. The golf ball moved 6 yards.");
                newPlayerOne.strokeCount++
                return 6;
            }
            else{
                  
            }
        }
}


function puttingClubs(){
    let userInput = prompt("You beat the sandpit! 1: Your Twenty Iron? 2: Your Twelve Iron? 3: Your Ten Iron? 4: Your Eight Iron? 5: Your Putter. NOTE: Use your putter.");
    switch (userInput) {
        case "1": 
            let userInput=prompt("That's not a good idea... Are you sure? 1: Yes. 2: No");
                if(userInput == 1){
                    console.log("You create a divot in the beautifully made greens. The groundskeeper wheels you away holding his recently emptied dart gun.");
                    return gameOver();
                }
                if (userInput == 2){
                    console.log("A prick on your neck and your body goes numb. The last thing you see is the groundskeeper wheeling you away with a creepy smile.");
                    return gameOver();
                }
        
        case "2": 
            console.log("You overshoot the hole using your Twelve Iron and it goes into the lake. You lose your golf ball.");
            console.log("You go to buy a new golf ball.");
            console.log("At the gift shop and are arrested for property tax fraud");
            return gameOver();
            
        case "3": 
            console.log("You fumble through your clubs and find your Ten Iron.");
            console.log("You find a card on the ground. Pick it up? You can't help but pick it up. It reads...");
            console.log("'Go to the Sand Pit'... You traverse and start at the beginning of the Sand Pit and get eaten by an Antlion.");
            console.log("Don't listen to random voices in your head.");
            return gameOver();
            
            break;
        case "4": 
            console.log("Thunder rolls and the lightning strikes, another coffin goes cold with your body for not choosing the putter.");
            return gameOver();
            break;
        case "5":
            console.log("You chose the correct club. The putter.");
            newPlayerOne.strokeCount++
            return randomDiceValue(4);
           
        default:
            return puttingClubs();
    }  
}
function gameOverWin(){
    alert("You win. You leave the practice hole and head towards the main course.");
    console.log("Final Score: " + newPlayerOne.strokeCount);
    let userInput = prompt("Play again? 1: Yes 2: No")
        if(userInput == "1"){
            console.log("Try to not mess up");
            return runGame();
        }
        if(userInput == "2"){
            console.log("You don't get the option to quit... This isn't Tetris..");
            return runGame();
        }
        return runGame();
}
function gameOver(){
    console.log("Better luck next time. Maybe you should make better life decisions.");
    console.log("Final Score: " + newPlayerOne.strokeCount);
    newPlayerOne.strokeCount = 0;
    let userInput = prompt("Play again? 1: Yes 2: No");
        if(userInput == 1){
            console.log("Try to not mess up");
            return runGame();
        }
        if(userInput == 2){
            console.log("You don't get the option to quit... This isn't Tetris..");
            return runGame();
        }
        else{
    
            return gameOver();
        }
}
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