var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function Start() {
document.getElementById("textbox").innerHTML="";
recognition.Start();

}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    speak();
    }
    
    function speak(){
        var synth = window.speechSynthesis;
       var speakData = document.getElementById("textbox").value;
       var utterThis = new SpeechSynthesisUtterance(speakData);
       synth.speak(utterThis);
    }
    Webcam.set({
        width : 360,
       height : 250,
       image_format : "png",
       png_quality : 90
    });
    camera = document.getElementById("webcam");
    Webcam.attach(camera);
    