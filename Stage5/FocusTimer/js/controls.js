export default function Controls ({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
}) {

function reset(){
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
}

function starPlay() {
  buttonPause.classList.remove('hide')
  buttonPlay.classList.add('hide')
  buttonSet.classList.add('hide')
  buttonStop.classList.remove('hide')  
}

function starPause() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function starSoundOn () {
  buttonSoundOff.classList.remove('hide')
  buttonSoundOn.classList.add('hide')
}

function starSoundOff () {
  buttonSoundOn.classList.remove('hide')
  buttonSoundOff.classList.add('hide')
}

function starSet() {
  let newMinutes = prompt ('Informe os minutos') 
  if (!newMinutes ) {
    return false
  }
  return newMinutes
}  

  return {
    reset,
    starPlay,
    starPause,
    starSet,
    starSoundOn,
    starSoundOff,
  }
}

/*
// DEFAULT EXPORT
export default resetControls
*/