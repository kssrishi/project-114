noseX = 0
noseY=0
function preload() {
   mustage = loadImage(
     "https://i.postimg.cc/xCdMFx9c/istockphoto-485318064-612x612-removebg-preview-2.png"
   ); 
}
function setup() {
    canvas = createCanvas(300, 300)
   canvas.center() 
   video = createCapture(VIDEO);
   video.size(300, 300);
   video.hide();
   poseNet = ml5.poseNet(video, modelLoaded)
   poseNet.on("pose",gotPoses)
}
function draw() {
    image(video,0,0,300,300)
    image(mustage,noseX-35,noseY-10,70,50)
}
function take_snapshot() {
   save("clown.png") 
}
function modelLoaded() {
   console.log("pose net is intialized")
}
function gotPoses(results) {
   if (results.length >0) {
      console.log(results);
      noseX = results[0].pose.nose.x
      noseY = results[0].pose.nose.y;
      console.log("nose x = " + results[0].pose.nose.x)
      console.log("nose y = " + results[0].pose.nose.y);
   }
}