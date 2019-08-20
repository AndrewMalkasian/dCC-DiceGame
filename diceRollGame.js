function randomDiceValue (dieSides){
        let dieRoll = Math.ceil(Math.random(0)*(dieSides));
        return dieRoll;
}

function clubTwentyIron (){
    return randomDiceValue(20);
}  

function clubTwelveIron (){
    return randomDiceValue(12);
}
function clubTenIron (){
    return randomDiceValue(10);
}
function clubEightIron (){
    return randomDiceValue(8);
}    
function clubSandWedge (){
    return randomDiceValue(4);
}
function clubPutter (){
    return randomDiceValue(6);
}


let holeOne = new course(50, 25, 15, 10)
function course(yardsToPin, fairway, sandPit, puttingGreen)  {
    let course;
    this.yardsToPin = yardsToPin,
    this.fairway = fairway;
    this.sandPit = sandPit;
    this.puttingGreen = puttingGreen;
    return course;
}
    // }
let newPlayerOne = new player(0, 0, 0, 0);
let newPlayerTwo = new player(0, 0, 0, 0);

function player(currentScore, yardsGain, turn, yardsToPin)  {
    let player;
    this.currentScore = currentScore;
    this.yardsGain = yardsGain;
    this.turn = turn;
    this.yardsToPin = yardsToPin;
    return player;
}


console.log(holeOne.yardsToPin);



console.log(clubTwentyIron());



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
