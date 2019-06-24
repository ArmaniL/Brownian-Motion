var x;
var y;
var pastx=300;
var pasty=300;
var fx;
var fy;
function setup(){
	createCanvas(600,600);
background(51);
}
function draw(){

stroke(random(100,255));
fx=x;
x=random(-8,8)+ pastx;
fy=y;
y=random(-7,7)+ pasty;
if (x>600 || x<5||y>600 || y<5 ){x=301;pastx=300;
y=300;pasty=300;}
line(pastx,pasty,x,y);
pastx=fx;
pasty=fy;
}