
let newPlayerOne = new player(0, 0);
// let holeOne = new course(50, 25, 15, 10);

    function player(yardsToPin, strokeCount){
        this.yardsToPin = yardsToPin;
        this.strokeCount = strokeCount;
}

    function newGameButton(){
        document.getElementById("buttonYouWantToHide").classList.add("hide").innerHTML = "Pick your club."
    
}

    function clubButtons (){

        document.getElementById("onClick club20").innerHTML = "Your twenty iron, huh?"
        document.getElementById("onClick club12").innerHTML = "Your twelve iron, huh?"
        document.getElementById("onClick club10").innerHTML = "Your twelve iron, huh?"
        document.getElementById("onClick club08").innerHTML = "Your Eight iron, huh?"
   
}

function runGame() {
   
    newGameButton();
        if( newGameButton()) clubButtons();

}

function course(yardsToPin, fairway, sandPit, puttingGreen)  {
    let course;
    this.yardsToPin = yardsToPin, 
    this.fairway = fairway;
    this.sandPit = sandPit;
     this.puttingGreen = puttingGreen;
       return course;
}
    // let 
    // let yardsToPin = 60;

    // console.log(diceRoll(3));

function diceRoll (sides) {
    let roll = Math.floor(Math.random()*(sides)+ 1);
     return roll;
}

    // console.log(randomDiceValue(6,60));
function randomDiceValue (dieSides, yardsToPin){
    yardsToPin = Math.abs(Math.floor((yardsToPin) - Math.random(0)*(dieSides)));
   return yardsToPin;
    
}
let yardsToPin = 60;


function puttingGreenClubs(){
    switch(){
        case 1: 
    }
}
   
function fairwayClubs(){
    switch () {
        case 1: clubTwentyIronButton();
            break;
        case 2: clubTwelveIronButton();
            break;
        case 3: clubTenIronButton();
            break;
        case 4: clubEightIronButton();
            break;
    
        default:
            break;
    }
}

    function clubTwentyIronButton (){
        return randomDiceValue(20);
    }  
    function clubTwelveIronButton (){
        return randomDiceValue(12);
    }
    function clubTenIronButton (){
        return randomDiceValue(10);
    }
    function clubEightIronButton (){
        return randomDiceValue(8);
    }    
    function clubSandWedgeButton (){
        return randomDiceValue(4);
    }
    function clubPutterButton (){
        return randomDiceValue(6);
    }

    // let newPlayerTwo = new player(0, 0, 0, 0);

    // function course(yardsToPin, fairway, sandPit, puttingGreen)  {
    //     let course;
    //     this.yardsToPin = yardsToPin,
    //     this.fairway = fairway;
    //     this.sandPit = sandPit;
    //     this.puttingGreen = puttingGreen;
    //     return course;
    // }

    
   





////////////////////////////////////////////////////////////////////////////////////////////////////////////
//between 10-15 yards you will land in the sand and between 25-15 you have a 100% to land in the sand
////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let yardsToPin = 50;
// function newGameButton() {
//     document.getElementById("newGame").innerHTML = "Single player or Multiplayer?";
// }    
// // {        
//    let startButton = newGameButton();
//    let singlePlayerButton = docu


//    let startButton = onclick() // WILL WORK ON 
// }


// function shotCalcFiftyToThirty ();
//     let shotPower = randomDiceValue ();
//         if {
//             shotPower 
//         }
//         else {

    // function WhichButton(event) {
    //     let caseNumber = event.buttons;
    //     document.getElementById("demo").innerHTML;
    //     return caseNumber;
    // }

    // let startingYards = 50;  

    // function golfShot(yardsRolled){
    //     let remainingYards = startingYards - yardsRolled;
    //         return remainingYards;
    // }

    // if(yardsToPin === 50){
    //     let userInput = prompt("Pick your club: 1(20) , 2(12), 3(10), 4(8)")
    //     switch (key) {
    //         case 1: console.log(yardsToPin - clubDriverTwenty());
    //             break;
    //         case 2: console.log(yardsToPin - clubDriverTwenty());
    //             break;
    //         case 3: console.log(yardsToPin - clubDriverTwenty());
    //             break;
    //         case 4: console.log(yardsToPin - clubDriverTwenty());
    //             break;
        
    //         default:
    //             break;
    //     }
    // }
    

    
    

//     let firstShot = yardsToPin - randomDiceValue();
//     let secondShot = firstShot - randomDiceValue();
//     let thirdShot = secondShot - randomDiceValue();
//     let fourthShot = thirdShot - randomDiceValue();
//     if (yardsToPin = 30 < thirdShot) {

//         alert("Work on your swing. game over")
// function DrivingMenu() { // between 50-25 yards

//     // 4 buttons that gray out on clicks (SWITCH CASE)
//     // case: 1 - die 20 - driver
//     // case: 2 - die 12 -  weak iron - looks like it can be used as a putter
//     // case: 3 - die 10 -  beat-up iron - looks like it can be used as a putter
//     // case: 4 - die 8 - wonky iron looks like it can be used as a putter
    

// }

// // possiblitiy to get into the sandpit between 25-10 yards
// function ifYouHitSandPit(){
//     // you pull out your die 4 and it let's them know the below switch case. 

//     // switch 
//     //case rolling a 1 = you hit the ball backward 10 yards.
//     //case rolling a 2 = you miss the ball
//     //case rolling a 3 = you hit the ball sideways but it's out of the sandpit
//     //case rolling a 4 = you hit the ball onto the green. Good job.
// }
// //10 yards - 0yards
// function PuttingMenu (){

//     // the clicker doesn't go away for your putter.
// }

// function endMenu (){

//  // gives them their score.

// }
