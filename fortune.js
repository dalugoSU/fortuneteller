/* 
we have ball. Ball checks number between 1-10. Number interval returns asnwer. */

var button = document.getElementById('FortuneButton');

let click = button.onclick = function() {
    let randomNumber = Math.floor(Math.random()*11);
    if (randomNumber >= 0 && randomNumber <= 2) {
        alert('Rightly so!')
    } else if (randomNumber > 2 && randomNumber <= 4) {
        alert('I do not think so...')
    } else if (randomNumber > 4 && randomNumber <= 6) {
        alert('Absolutely!')
    } else if (randomNumber > 6 && randomNumber <= 8) {
        alert(`Don't count on it...`)
    } else if (randomNumber > 8 && randomNumber <= 10) {
        alert(`I believe so...`)
    } else { 
      return null;
    }
}

let message = document.getElementById('goodbye-message');
let newMess =  message.onclick = function() {
    document.getElementById('goodbye-message').innerHTML = `I hope your fortune was of your liking...`
};
