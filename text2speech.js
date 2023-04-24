let text = document.getElementById("textbox");
let speakButton = document.getElementById("speak-button");

// Add an event listener to the speak button
speakButton.addEventListener("click", function() {
  // Get the text from the text area
  let text2 = text.value;

  // Create a new SpeechSynthesisUtterance object
  let utterance = new SpeechSynthesisUtterance();

  // Set the text and voice of the utterance
  utterance.text = text2;
  utterance.voice = window.speechSynthesis.getVoices()[0];

  // Speak the utterance
  window.speechSynthesis.speak(utterance);
});


//2nd button Email text to speaker

let email = document.getElementById("textbox2");
let speakButtonb2 = document.getElementById("speak-button2");

// Add an event listener to the speak button
speakButtonb2.addEventListener("click", function() {
  // Get the text from the text area
  let text3 = email.value;

  // Create a new SpeechSynthesisUtterance object
  let utterance = new SpeechSynthesisUtterance();

  // Set the text and voice of the utterance
  utterance.text = text3;
  utterance.voice = window.speechSynthesis.getVoices()[0];

  // Speak the utterance
  window.speechSynthesis.speak(utterance);
});


//3rd button username text to speaker

let text3 = document.getElementById("textbox3");
let speakButtonb3 = document.getElementById("speak-button3");

// Add an event listener to the speak button
speakButtonb3.addEventListener("click", function() {
  // Get the text from the text area
  let text4 = text3.value;

  // Create a new SpeechSynthesisUtterance object
  let utterance = new SpeechSynthesisUtterance();

  // Set the text and voice of the utterance
  utterance.text = text4;
  utterance.voice = window.speechSynthesis.getVoices()[0];

  // Speak the utterance
  window.speechSynthesis.speak(utterance);
});



//4th button username text to speaker

let text4 = document.getElementById("textbox4");
let speakButtonb4 = document.getElementById("speak-button4");

// Add an event listener to the speak button
speakButtonb4.addEventListener("click", function() {
  // Get the text from the text area
  let text5 = text4.value;

  // Create a new SpeechSynthesisUtterance object
  let utterance = new SpeechSynthesisUtterance();

  // Set the text and voice of the utterance
  utterance.text = text5;
  utterance.voice = window.speechSynthesis.getVoices()[0];

  // Speak the utterance
  window.speechSynthesis.speak(utterance);
});