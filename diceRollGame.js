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
    newPlayerOne.strokeCount = 0;
    while (yardsToPin > 0){
        if (50 >= yardsToPin && yardsToPin >=21){
          let clubDistance = fairwayClubs();
          yardsToPin = yardsToPin - clubDistance;
          console.log(yardsToPin + " yards to go.")
            if(49 >= yardsToPin && yardsToPin >=40){
                console.log("You see an omnious sandpit in the distance.")
            }
            if(39 >= yardsToPin && yardsToPin >=30){
                console.log("The sandpit draws closer and you feel you have a deeper understanding of its origin. You hear weird noises.")
            }
            if(29 >= yardsToPin && yardsToPin >=21){
                console.log("The sandpit's presence and view are unbelievable. You want to avoid it at all costs. The sandPit starts around 20 yards.");
                console.log("You look at your Eight Iron... that could possibly work.. or maybe your Twenty... or maybe... the voices grow louder...")
            }
            
         
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

        // if (yardsToPin < 0){
        //     let clubDistance = puttingClubs();
        //     yardsToPin = yardsToPin + clubDistance;
        //     console.log(yardsToPin + " yards to go!");
        // }
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
            console.log("Using your Twenty Iron, you hit the ball " + randomDieRoll20 + " yards!");
            console.log("Number of Strokes: " + newPlayerOne.strokeCount);
            return randomDieRoll20;
            break;
        case "2": 
            newPlayerOne.strokeCount++
            let randomDieRoll12 = randomDiceValue(12)
            console.log("Using your Twenty Iron, you hit the ball " + randomDieRoll12 + " yards!");
            console.log("Number of Strokes: " + newPlayerOne.strokeCount);
            return randomDieRoll12;
            break;
        case "3":
            newPlayerOne.strokeCount++ 
            let randomDieRoll10 = randomDiceValue(10)
            console.log("Using your Twenty Iron, you hit the ball " + randomDieRoll10 + " yards!");
            console.log("Number of Strokes: " + newPlayerOne.strokeCount);    
            return randomDieRoll10;
            break;
        case "4": 
            newPlayerOne.strokeCount++
            let randomDieRoll08 = randomDiceValue(8)
            console.log("Using your Twenty Iron, you hit the ball " + randomDieRoll08 + " yards!");
            console.log("Number of Strokes: " + newPlayerOne.strokeCount);
            return randomDieRoll08;
            break;
           
        default:
            break;
    }  
}
function sandpit(){
        alert("You are in the sandpit...");
       let userInput = prompt("Upon entering, the sandpit whips up a sandstorm and blurs your senses. After several minutes, you find your golf ball. You swing wildly. Entered your desired yards.")
       console.log(userInput);
        if(typeof(userInput) == "string"){
        let randomDie = randomDiceValue(6);
        console.log("You swung with the power to move the golf ball " + randomDie + " yards");
        console.log("-------------------------------------------------------------------------------------")
            if (randomDie == 1) {
            newPlayerOne.strokeCount++
            console.log("-------------------------------------------------------------------------------------")
            console.log ("You take a big swing and whiff. The destructive air vortex of your incompetence creates a wormhole. The ball disappears in a newly created wormhole."); 
            console.log ("However, a masked time traveler grabs you and tries to throw you into a wormhole but you resist.");
            console.log("-------------------------------------------------------------------------------------")
                let userInput = prompt("The time traveler asks to decide your fate with a coin flip and you agree. (1) heads, (2) tails.");    
                    if (typeof(userInput == "string")){
                        let randomDie = randomDiceValue(2);
                        console.log("The man notes in a calm voice 'No matter what, the coin must flip. The coin flipped " + randomDie + " times.");
                        console.log("-------------------------------------------------------------------------------------")
                        if(randomDie == 1)
                        console.log("You returned heads. I knew you would do this. I will guide you out. I am you from three years in the future.");
                        console.log("Follow me, me.");
                        console.log("-------------------------------------------------------------------------------------")
                    return 11;
                    }
                    if (userInput == 2){
                    console.log("You returned tails. I knew you would do this. Imposter... rather, Impostor! You aren't me... Into the wormhole!")
                    console.log("You respect the coin and accept your fate.")
                    return gameOver();
                    }

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
                console.log("-------------------------------------------------------------------------------------")
                console.log ("Frustrated, you ask them to move and they turn toward you with fiery eyes turning you to stone.");
                console.log("-------------------------------------------------------------------------------------")
                return gameOver();
            }
            if(randomDie == 4){
                newPlayerOne.strokeCount++
                console.log("You cry as the ball rolls backwards into a previously hidden cave. You venture into the cave.");
                console.log("You emerge on the other side of the world three years later only to be met by bill collectors.")
                console.log("-------------------------------------------------------------------------------------")
                console.log("You are now afraid of caves...")
                console.log("-------------------------------------------------------------------------------------")
                return gameOver();
            }
            if (randomDie == 5){
                newPlayerOne.strokeCount++
                console.log("-------------------------------------------------------------------------------------")
                console.log("The voice that was in your head is now behind you. You recongize that you shouldn't have entered the sandpit.");
                console.log("-------------------------------------------------------------------------------------")
                console.log("Death incarnate greets you with its sharpened sickle. The sandpit is not for the weak and you are weak. Weakling.");
                return gameOver();
            }
            if (randomDie == 6){
                console.log("You hit a stroke of luck. Literally. The golf ball moved 6 yards... LOOK OUT!!");
                console.log("-------------------------------------------------------------------------------------");
                console.log("Just kidding... the ball really does move 6 yards.");
                newPlayerOne.strokeCount++
                return 6;
            }
            else{
                  
            }
        }
}


function puttingClubs(){
    let userInput = prompt("You beat the sandpit and are on the green! Be careful though.. 1: Your Twenty Iron? 2: Your Twelve Iron? 3: Your Ten Iron? 4: Your Eight Iron? 5: Your Putter. NOTE: Use your putter.");
    switch (userInput) {
        case "1": 
            let userInput=prompt("That's not a good idea... Are you sure? 1: Yes. 2: No");
                if(userInput == 1){
                    console.log("You create a divot in the beautifully made greens. The groundskeeper wheels you away holding his recently emptied dart gun.");
                    return gameOver();
                }
                if (userInput == 2){
                    console.log("A prick on your neck and your body goes numb. The last thing you see is the groundskeeper wheeling you away with a creepy smile. You were so close.");
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
            console.log("'At the edge of the sandpit there is a golden rope'... You traverse to the edge of the Sand Pit");
            console.log("You pick up the golden rope, but it belongs to antlion that wraps you up, throws in the air and swallows you whole.")
            console.log("Don't believe everything you read.");
            return gameOver();
            
            break;
        case "4": 
            console.log("You didn't follow the official PGA guidelines set up in the 1700s. You don't honor tradition.");
            console.log("-------------------------------------------------------------------------------------")
            console.log("Disqualified, you go home and find all your things are missing.")
            console.log("It is then and there that you decide to create a time machine. You go into hiding");
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
  console.log("You win. You leave the practice hole and head towards the main course");
  console.log("You bump into an orc carrying a OneHundredClub. He's staring at the sign that reads 'Legendary Golf: Nine Rounds of Death.");
  console.log("You leave the sweating orc and stick to the practice course.");
console.log("---------------------------------------------");
    console.log("Final Stroke Count: " + newPlayerOne.strokeCount);
    let userInput = prompt("Play again? 1: Yes 2: No")
        if(userInput == "1"){
            console.log("Thanks for playing!");
            return runGame();
        }
        if(userInput == "2"){
            console.log("You don't get the option to quit... This isn't Tetris..");
            newPlayerOne.strokeCount = 0;
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
            newPlayerOne.strokeCount = 0;
            return runGame();
        }
        if(userInput == 2){
            console.log("You don't get the option to quit... This isn't Tetris..");
            newPlayerOne.strokeCount = 0;
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