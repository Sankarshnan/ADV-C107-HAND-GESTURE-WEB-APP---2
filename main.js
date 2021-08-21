prediction_1 = ""
prediction_2 = ""

Webcam.set({
    width:350,
    height:300,
    Image_format: 'png',
    png_quality:90
});

camara = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

 console.log('ml5 version:', ml5.version);

classifier = ml5.imageclassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpmodel.json')