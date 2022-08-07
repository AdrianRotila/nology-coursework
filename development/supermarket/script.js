// Client Brief...
// Create an application which can be used to keep track
// of score in a football match..

// 1. It's football there's two teams, so lets keep two scores going
var teamScoreOne = 0;
var teamScoreTwo = 0;
let isGameStopped = false;

// 2. When a team one button is clicked, increment team1 score
function handleTeamOneClick() {
    document.getElementById('inc1').value = ++teamScoreOne;
}

// 3. When team two button is clicked, increment team2 score
function handleTeamTwoClick() {
    document.getElementById('inc2').value = ++teamScoreTwo;
}

// 4. When do we finish/stop?
function handleStopGame(){
    if(isGameStopped = true){
        alert("The final score is: " + teamScoreOne +  " - "  + teamScoreTwo)
        teamScoreOne = 0;
        teamScoreTwo = 0;
    }
}