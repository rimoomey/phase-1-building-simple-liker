// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

console.log(document.querySelector('#modal'))

let hearts = document.querySelectorAll('span.like-glyph')
hearts.forEach(heart => {
  heart.addEventListener('click', () => {
    errorBanner = document.querySelector('#modal');
    mimicServerCall()
    .then(() => {
      heart.classList.toggle('activated-heart');
      if (heart.textContent === FULL_HEART) {heart.textContent = EMPTY_HEART}
      else {heart.textContent = FULL_HEART}
    })
    .catch(() => {
      errorBanner.classList.remove('hidden');
      setTimeout(() => {
        errorBanner.classList.add('hidden')
      }, 3000)
    })
  })
})



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
