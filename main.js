difference = 0;
rightWristX = 0;
leftWristX = 0;

  function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 400);
  canvas.position(560,100);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}


function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX  = " + leftWristX  + 
    " rightWristX = "+ rightWristX + " difference = " + difference);
  }
}

function draw() {
background('#bdbbb5');

  document.getElementById("font-size").innerHTML = 
  "Font Size of The Text will be = " + difference +"px";
  textSize(difference);
  fill('#F90093');
  text('sonic vs shadow', 50, 400);
}
