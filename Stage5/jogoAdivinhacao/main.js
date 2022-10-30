let randomNumber = Math.round(Math.random() * 10)
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
let Attempts = 1

//EVENTOS

btnTry.addEventListener('click', handleTryClick)
btnAgain.addEventListener('click', handleResetClick)
document.addEventListener('keypress', keypressCheckLoadingScreen )

// FUNÇÃO CALBACK

function handleTryClick (event) {
  event.preventDefault()  /* DEIXAR DIFERENTE DO PADRÃO // NÃO ENVIE O FORMULÁRIO */

  const inputNumber = document.querySelector("#inputNumber")
  console.log(inputNumber)
 
    if (Number(inputNumberCheck.value) == randomNumber) {
      toggleScreen()
      document.querySelector(".screen2 h1").innerText = `Acertou em ${Attempts} tentativas.`
    }
    inputNumberCheck.value = ""
    Attempts++  
}

function keypressCheckLoadingScreen (event){
  if (event.key == 'Enter' && screen1.classList.contains("hide")){
    handleResetClick()
  }
}

function handleResetClick () {
  toggleScreen()
  Attempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}