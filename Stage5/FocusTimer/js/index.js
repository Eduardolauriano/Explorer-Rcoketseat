import Controls from "./controls.js"
import Event from "./events.js"
import  Timer  from "./timer.js"
import Sound from "./sounds.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOn,
  buttonSoundOff,
  secondsDisplay,
  minutesDisplay,
} from "./constants.js"

// FACTURY

const controls = Controls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()

const event = Event({
  controls,
  timer,
  sound,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSoundOn,
  buttonSoundOff,
  buttonSet,
})



