//Const Declare:
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

finalScore.innerText = mostRecentScore;
// console.log(mostRecentScore);

username.addEventListener("keyup", () => {
    console.log(username.value);
    
    // if (username.value == null) {
    //     saveScoreBtn.disabled = true;
    // }
    // else{
    //     saveScoreBtn.disabled = false;
    // }
    saveScoreBtn.disabled  = !username.value;
});

saveHighScore = (e) => {
    console.log('btn click');
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    console.log(highScores);
};