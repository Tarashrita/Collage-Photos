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
    if(Content=="take my selfie"){
        console.log("taking selfie")
        speak();
    }
   
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
    function takeSnapshot() {
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){document.getElementById("result1").innerHTML = '<img id="selfie_image1" src="'+data_uri+'">';}
        if(img_id=="selfie2"){document.getElementById("result2").innerHTML = '<img id="selfie_image2" src="'+data_uri+'">';}
        if(img_id=="selfie3"){document.getElementById("result3").innerHTML = '<img id="selfie_image3" src="'+data_uri+'">';}
    })
}
    function Save() {
        link = document.getElementById("link");
        image = document.getElementById("selfie_image").src;
        link.href=image;
        link.click();
    }
