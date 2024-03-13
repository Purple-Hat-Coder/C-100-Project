var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var Content;

function start() {
    recognition.start();
}

recognition.onresult = function (event) {
    console.log(event);
    Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
    if (Content == "take my selfie") {
        console.log("taking selfie --- ");
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function () {
        img_id = "selfie1";
        take_snapshot();
        speak_data = "Taking your selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 5000);
    setTimeout(function () {
        img_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);
    setTimeout(function () {
        img_id = "selfie3";
        take_snapshot();
    }, 15000);
}

Webcam.set({
    width: 500,
    height: 400,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        if (img_id == "selfie1")
            document.getElementById("result1").innerHTML = '<img id="selfie1" src="' + data_uri + '"/>';

        if (img_id == "selfie2")
            document.getElementById("result2").innerHTML = '<img id="selfie2" src="' + data_uri + '"/>';

        if (img_id == "selfie3")
            document.getElementById("result3").innerHTML = '<img id="selfie3" src="' + data_uri + '"/>';
    });
}

function save() {
    link = document.getElementById("link");
    img = document.getElementById("selfie1").src;
    img = document.getElementById("selfie2").src;
    img = document.getElementById("selfie3").src;
    link.href = image;
    link.click();
}
