const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');

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