noseX=0;
noseY=0;
difference = 0;
rightwristX = 0;
leftwristX = 0;


function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 110);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('maroon');

    document.getElementById("square_side").innerHTML = "Font size of the text is "+difference+"px";
    fill('#F90093');
    stroke('F9009');
    textSize(difference);
    text("text", noseX, noseY);
}

function modelLoaded() {
    console.log('!...PoseNet is initialized!gyrf...!');
}

function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose = " + noseX +" NoseY = " +noseY);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);

        console.log("leftWristX = " + leftwristX + " rightWristX "+rightwristX + "difference = " + difference);
     }
}




















