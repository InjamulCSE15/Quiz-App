//Const Declare:
const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const finalScore = document.getElementById('finalScore');

finalScore.innerText = mostRecentScore;

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
};