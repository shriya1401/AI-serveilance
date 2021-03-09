video="";
status="";
objects=[];



function preload(){
video=createVideo("video.mp4");
video.hide();
video.size(500,500);

}

function setup(){
canvas=createCanvas(500,500);
canvas.center();

}

function draw(){
image(video,0,0,500,500);
if (status !="") {
   objectdetector.detect(video,gotresults);

   for (let i = 0; i < objects.length; i++) {
    document.getElementById("status").innerHTML="Status:objects detected"
       object_name=objects[i].label;
       x=objects[i].x;
       y=objects[i].y;
       width=objects[i].width;
       height=objects[i].height;
       accuracy=floor(objects[i].confidence*100)+"%";
       fill("red");
       stroke("red");
       textSize(20);
       text(object_name+" "+ accuracy,x,y-10 );
       noFill();
       rect(x,y,width,height);


       
   }
}

}

function gotresults(error,results){
    if (error) {
        console.log(error);
        
        
    }

    else{
        console.log(results);
       objects=results;
    }
  
}

function play(){
objectdetector=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status").innerHTML="Status:Detecting objects!! :D"
}

function modelloaded(){
console.log("modelloaded");
video.loop();
video.speed(1);
video.volume(0.5);
status=true;

}