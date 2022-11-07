const buttonPlay = document.querySelector(".warraperButtons .play")
const buttonPause = document.querySelector(".warraperButtons .pause")
const buttonStop = document.querySelector(".warraperButtons .stop")
const buttonFurther = document.querySelector(".warraperButtons .further")
const buttonFewer = document.querySelector(".warraperButtons .fewer")
const cardForest = document.querySelector(".warraperSounds .forest")
const cardRain = document.querySelector(".warraperSounds .rain")
const cardCoffeeShop = document.querySelector(".warraperSounds .coffeeShop")
const cardFirePlace = document.querySelector(".warraperSounds .firePlace")
const minutesDisplay = document.querySelector(".warraperTimer .timer .minutes")
const secondsDisplay = document.querySelector(".warraperTimer .timer .seconds")
const soundForest = new Audio ("./sound/Floresta.wav")
const soundRain = new Audio ("./sound/Chuva.wav")
const soundCoffeeShop = new Audio ("./sound/Cafeteria.wav")
const soundFirePlace = new Audio ("./sound/Lareira.wav")
const svg = document.querySelector(".warraperSounds button")
let seconds = Number(secondsDisplay.textContent)
let minutes = Number(minutesDisplay.textContent)


buttonPlay.onclick = () => {
  buttonPlay.classList.add("hide")
  buttonPause.classList.remove("hide")
  countdown()
}

buttonPause.onclick = () => {
  buttonPause.classList.add("hide")
  buttonPlay.classList.remove("hide")
  pauseTimer()
}

buttonStop.onclick = () => {
  buttonPause.classList.add("hide")
  buttonPlay.classList.remove("hide")
  reset()
}

buttonFurther.onclick = () => {
  furtherInclude()
  updateDisplay()
}

buttonFewer.onclick = () => {
  fewerDecrement()
  updateDisplay()
}

cardForest.onclick = () => {
  colorForest()
  soundForest.play()
  soundRain.pause()
  soundCoffeeShop.pause()
  soundFirePlace.pause()
}

cardRain.onclick = () => {
  colorRain() 
  soundRain.play()
  soundForest.pause()
  soundCoffeeShop.pause()
  soundFirePlace.pause()
}

cardCoffeeShop.onclick = () => {
  colorCoffeeShop()
  soundCoffeeShop.play()
  soundRain.pause()
  soundForest.pause()
  soundFirePlace.pause()
}

cardFirePlace.onclick = () => {
  colorfirePlace()
  soundFirePlace.play()
  soundCoffeeShop.pause()
  soundRain.pause()
  soundForest.pause()
}

function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes ?? minutes
  seconds = seconds ?? 0
  minutesDisplay.textContent = (String(newMinutes).padStart(2,"0"))
  secondsDisplay.textContent = (String(seconds).padStart(2,"0"))
}

function countdown () {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    updateDisplay(minutes, 0)

    if (minutes <=0 && seconds <=0){
      buttonPause.classList.add("hide")
      buttonPlay.classList.remove("hide")
      reset()
      return
    }

  if (seconds <= 0){
    seconds = 60
    --minutes
  }
  
  updateDisplay( minutes, String(seconds - 1))

  countdown()
  }, 1000)
}

function pauseTimer () {
  clearTimeout (timerTimeOut)
}

function reset(minutesDisplay,secondsDisplay) {
  pauseTimer()
  updateDisplay(minutesDisplay,secondsDisplay)
  
}

function furtherInclude() {
  minutes += 5
}

function fewerDecrement() {
  if(minutes > 5){
    minutes -= 5
  }
}

function colorForest() {
    cardForest.classList.toggle("color")
    cardForest.classList.toggle("colorFont")
    cardRain.classList.remove("color")
    cardRain.classList.remove("colorFont")
    cardCoffeeShop.classList.remove("color")
    cardCoffeeShop.classList.remove("colorFont")
    cardFirePlace.classList.remove("color")
    cardFirePlace.classList.remove("colorFont")  
}

function colorRain() {

  cardRain.classList.toggle("color")
  cardRain.classList.toggle("colorFont")
  cardForest.classList.remove("color")
  cardForest.classList.remove("colorFont")
  cardCoffeeShop.classList.remove("color")
  cardCoffeeShop.classList.remove("colorFont")
  cardFirePlace.classList.remove("color")
  cardFirePlace.classList.remove("colorFont")
}

function colorCoffeeShop() {
  cardCoffeeShop.classList.toggle("color")
  cardCoffeeShop.classList.toggle("colorFont")
  cardForest.classList.remove("color")
  cardForest.classList.remove("colorFont")
  cardRain.classList.remove("color")
  cardRain.classList.remove("colorFont")
  cardFirePlace.classList.remove("color")
  cardFirePlace.classList.remove("colorFont")
}

function colorfirePlace() {
  cardFirePlace.classList.toggle("color")
  cardFirePlace.classList.toggle("colorFont")
  cardForest.classList.remove("color")
  cardForest.classList.remove("colorFont")
  cardCoffeeShop.classList.remove("color")
  cardCoffeeShop.classList.remove("colorFont")
  cardRain.classList.remove("color")
  cardRain.classList.remove("colorFont")
}

soundForest.loop = true
soundRain.loop = true
soundCoffeeShop.loop = true
soundFirePlace.loop = true