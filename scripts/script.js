
//name reader
const textInputField = document.querySelector("#textbox")
const form = document.querySelector("#form")
const utterThis = new SpeechSynthesisUtterance()
const synth = window.speechSynthesis
let ourText = ""

const checkBrowserCompatibility = () => {
  "speechSynthesis" in window
    ? console.log("Web Speech API supported!")
    : console.log("Web Speech API not supported :-(")
}

checkBrowserCompatibility()

form.onsubmit = (event) => {
  event.preventDefault()
  ourText = textInputField.value
  utterThis.text = ourText
  synth.speak(utterThis)
 // textInputField.value = "
}


//email reader 2nd



const textInputField2 = document.querySelector("#textbox2")
const form2 = document.querySelector("#form")
const utterThis2 = new SpeechSynthesisUtterance()
const synth2 = window.speechSynthesis
let ourText2 = ""

const checkBrowserCompatibility2 = () => {
  "speechSynthesis" in window
    ? console2.log("Web Speech API supported!")
    : console2.log("Web Speech API not supported :-(")
}

checkBrowserCompatibility2()

form2.onsubmit = (event2) => {
  event2.preventDefault2()
  ourText2 = textInputField.value
  utterThis2.text = ourText2
  synth2.speak(utterThis2)
 // textInputField.value = "
}
