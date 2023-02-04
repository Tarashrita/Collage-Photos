var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start() {
document.getElementById("textbox").innerHTML="";
recognition.Start();

}