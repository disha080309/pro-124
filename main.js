noseX=0;
noseY=0;
left_wristX=0;
right_wristX=0;
difference=0;

function setup(){
    canvas=createCanvas(500,500)
    canvas.center();
    canvas.background("aliceblue");
    Video=createCapture(VIDEO);
    poseNet=ml5.poseNet(Video,modelLoaded);
    poseNet.on('pose',gotposes)
    }
function modelLoaded(){
    console.log("Model Has Been Loaded");
}
function gotposes (result){
    if (result.length>0){
        console.log(result);
        noseX=result[0].pose.nose.x;
        noseY=result[0].pose.nose.y;
        console.log("Nose X = "+noseX+" And NoseY = "+noseY);
        left_wristX=result[0].pose.leftWrist.x;
        right_wristX=result[0].pose.rightWrist.x;
        difference=floor(left_wristX-right_wristX);
        console.log("The Difference is "+difference);
    }
}
