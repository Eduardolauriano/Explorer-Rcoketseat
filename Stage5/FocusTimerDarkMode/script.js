
const theme =document.querySelector('#theme');
const buttonPlay = document.querySelector('.play');
const buttonPause = document.querySelector('.pause');
const buttonStop = document.querySelector('.stop');
const buttonPlus = document.querySelector('.plus');
const buttonMinus = document.querySelector('.minus');
const buttonForest = document.querySelector('.forest');
const buttonRain = document.querySelector('.rain');
const buttonCoffeeShop = document.querySelector('.coffeeShop');
const buttonFirePlace = document.querySelector('.firePlace');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const soundForest = new Audio ("./sound/Floresta.wav");
const soundRain = new Audio ("./sound/Chuva.wav");
const soundCoffeeShop = new Audio ("./sound/Cafeteria.wav"); 
const soundFirePlace = new Audio ("./sound/Lareira.wav");
const volume = document.querySelector('#volume')
let minutes = Number(minutesDisplay.textContent)
let seconds = Number(secondsDisplay.textContent)

theme.addEventListener("change", function(){

  document.body.classList.toggle("dark");
});

function lightMode() {
  var light = document.body;
  light.className = "light-mode";
}

buttonPlay.onclick = () => {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
  countdown()
}

buttonPause.onclick = () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  pauseTimer()
}

buttonStop.onclick = () => {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  resetTimer()
}

buttonPlus.onclick = () => {
  plusInclude()
  updateDisplay()
}
buttonMinus.onclick = () => {
  minusInclude()
  updateDisplay()
}

buttonForest.onclick = () => {
  colorForest()  
  soundRain.pause()
  soundCoffeeShop.pause()
  soundFirePlace.pause()
}

buttonRain.onclick = () => {
  colorRain()
  soundForest.pause()
  soundCoffeeShop.pause()
  soundFirePlace.pause()
}

buttonCoffeeShop.onclick = () => {
  colorCoffeeShop()
  soundForest.pause()
  soundRain.pause()
  soundFirePlace.pause()
}

buttonFirePlace.onclick = () => {
  colorfirePlace()
  soundForest.pause()
  soundRain.pause()
  soundCoffeeShop.pause()
}

function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes ?? minutes
  seconds = seconds ?? 0
  minutesDisplay.textContent = (String(newMinutes).padStart(2,"0"))
  secondsDisplay.textContent = (String(seconds).padStart(2,"0"))
}

function countdown () {
  timerTimeOut = setTimeout(function() {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  updateDisplay(minutes,0)

  if(minutes<=0 && seconds<=0) {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    resetTimer()
    return
  }

  if (seconds <= 0){
    seconds = 60
    --minutes
  }

  updateDisplay(minutes, String(seconds - 1))

  countdown()
  }, 1000)  
}

function pauseTimer(){
  clearTimeout (timerTimeOut)
}

function resetTimer(minutesDisplay,secondsDisplay){
  pauseTimer()
  updateDisplay(minutesDisplay,secondsDisplay)
}

function plusInclude() {
  minutes += 5
}

function minusInclude(){
  if(minutes > 5){
    minutes -= 5
  }
}

function colorForest() {
toogleForest()
removeRain()
removeCoffeeShop()
removeFirePlace()
}

function colorRain() {
  removeForest()
  toogleRain()
  removeCoffeeShop()
  removeFirePlace()
}

function colorCoffeeShop() {
removeForest()
removeRain()
toogleCoffeeShop()
removeFirePlace()
}

function colorfirePlace() {
  removeForest()
  removeRain()
  removeCoffeeShop()
  toogleFirePlace()
}

//FUNCÃO DOS AUDIOS
function addForest() {
  buttonForest.classList.add("color")
  buttonForest.classList.add("icon")
  buttonForest.classList.add("bar")
  buttonForest.classList.add("orb")
}

function removeForest() {
  buttonForest.classList.remove("color")
  buttonForest.classList.remove("icon")
  buttonForest.classList.remove("bar")
  buttonForest.classList.remove("orb")
}

function toogleForest() {
  if(buttonForest.classList.contains("color")){
    buttonForest.classList.remove("color")
    buttonForest.classList.remove("icon")
    buttonForest.classList.remove("bar")
    buttonForest.classList.remove("orb")
    soundForest.pause()
  } else {
    buttonForest.classList.add("color")
    buttonForest.classList.add("icon")
    buttonForest.classList.add("bar")
    buttonForest.classList.add("orb")
    soundForest.play()
  }
}

function toogleRain() {
  if(buttonRain.classList.contains("color")){
    buttonRain.classList.remove("color")
    buttonRain.classList.remove("icon")
    buttonRain.classList.remove("bar")
    buttonRain.classList.remove("orb")
    soundRain.pause()
  } else {
    buttonRain.classList.add("color")
    buttonRain.classList.add("icon")
    buttonRain.classList.add("bar")
    buttonRain.classList.add("orb")
    soundRain.play()
  }
}

function toogleCoffeeShop() {
  if(buttonCoffeeShop.classList.contains("color")){
    buttonCoffeeShop.classList.remove("color")
    buttonCoffeeShop.classList.remove("icon")
    buttonCoffeeShop.classList.remove("bar")
    buttonCoffeeShop.classList.remove("orb")
    soundCoffeeShop.pause()
  } else {
    buttonCoffeeShop.classList.add("color")
    buttonCoffeeShop.classList.add("icon")
    buttonCoffeeShop.classList.add("bar")
    buttonCoffeeShop.classList.add("orb")
    soundCoffeeShop.play()
  }
}

function toogleFirePlace() {
  if(buttonFirePlace.classList.contains("color")){
    buttonFirePlace.classList.remove("color")
    buttonFirePlace.classList.remove("icon") 
    buttonFirePlace.classList.remove("bar")
    buttonFirePlace.classList.remove("orb")  
    soundFirePlace.pause()
  } else {
    buttonFirePlace.classList.add("color")
    buttonFirePlace.classList.add("icon")
    buttonFirePlace.classList.add("bar")
    buttonFirePlace.classList.add("orb")
    soundFirePlace.play()
  }
}

function addRain() {
  buttonRain.classList.add("color")
  buttonRain.classList.add("icon")
  buttonRain.classList.add("bar")
  buttonRain.classList.add("orb")
}

function removeRain() {
  buttonRain.classList.remove("color")
  buttonRain.classList.remove("icon")
  buttonRain.classList.remove("bar")
  buttonRain.classList.remove("orb")
}

function addCoffeeShop() {
  buttonCoffeeShop.classList.add("color")
  buttonCoffeeShop.classList.add("icon")
  buttonCoffeeShop.classList.add("bar")
  buttonCoffeeShop.classList.add("orb")
}

function removeCoffeeShop() {
  buttonCoffeeShop.classList.remove("color")
  buttonCoffeeShop.classList.remove("icon")
  buttonCoffeeShop.classList.remove("bar")
  buttonCoffeeShop.classList.remove("orb")  
}

function addFirePlace() {
  buttonFirePlace.classList.add("color")
  buttonFirePlace.classList.add("icon")
  buttonFirePlace.classList.add("bar")
  buttonFirePlace.classList.add("orb")
}

function removeFirePlace() {
  buttonFirePlace.classList.remove("color")
  buttonFirePlace.classList.remove("icon") 
  buttonFirePlace.classList.remove("bar")
  buttonFirePlace.classList.remove("orb") 
}

let volForest = document.getElementById('volAudioForest')
let volRain = document.getElementById('volAudioRain')
let volCoffe = document.getElementById('volAudioCoffe')
let volFire = document.getElementById('volAudioFire')

volForest.addEventListener('mousemove', function setvolume(){
  soundForest.volume=volForest.value/100
})
volRain.addEventListener('mousemove', function setvolume(){
  soundRain.volume=volRain.value/100
})
volCoffe.addEventListener('mousemove', function setvolume(){
  soundCoffeeShop.volume=volCoffe.value/100
})
volFire.addEventListener('mousemove', function setvolume(){
  soundFirePlace.volume=volFire.value/100
})


soundForest.loop = true
soundRain.loop = true
soundCoffeeShop.loop = true
soundFirePlace.loop = true

