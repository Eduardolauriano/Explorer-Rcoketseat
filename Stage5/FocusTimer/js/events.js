export default function Event ({
  controls,
  timer,
  sound,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  buttonSet,
}){
  

buttonPlay.onclick = () => {
  controls.starPlay()  
  timer.countdown()
  sound.pressButton() 
}

buttonPause.onclick = () => {
  controls.starPause()
  timer.pause()
  sound.pressButton()
}

buttonStop.onclick = () => {
  controls.reset()
  timer.reset()
  sound.pressButton()
}

buttonSoundOn.onclick = () => {
  controls.starSoundOn()
  sound.bgAudio.pause()
}

buttonSoundOff.onclick = () => {
  controls.starSoundOff()
  sound.bgAudio.play()
}

buttonSet.onclick = () => {
  let newMinutes = controls.starSet()

  if (!newMinutes) {
    timer.reset()
    return 
  }

  timer.updateDisplay(newMinutes,0)
  timer.updateMinutes(newMinutes)
}

  return {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSoundOn,
    buttonSoundOff,
    buttonSet,
  }

  }

