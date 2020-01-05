
let n_stars = 200;
if(screen.width<500) n_stars = 100;

let tx=screen.width/2;
let ty=screen.height/2-400;

let size="1px";

function updateTarget(e){

	if( e.clientY < 0.3*screen.height ) 
		(document.getElementById("click-position-value")).innerHTML = "TARGET "+e.clientX+" | "+e.clientY;
	else
		return;

	tx=e.clientX;
	ty=e.clientY;

}

function makeStar(){

	let star = document.createElement('div');
	star.className = "star";
	
	if(Math.random() < 0.22) size="2px";
	else size="1px";
	
	star.style.height = star.style.width = size;
	star.style.left = Math.round(Math.random()*screen.width) + "px";
	star.style.top = Math.round(Math.random()*screen.height) + "px";
	
	document.getElementById("stars-holder").appendChild(star);
}

for(let i=0;i<n_stars;i++){ makeStar(); }

// Kills all the stars
function killShootingStars(){
	var x = document.getElementsByClassName("tail");
	for(var i=0;i<x.length;i++) x[i].remove();
}

// Adds a Shooting Star
function ShootingStar(){
	// 
	let tail = document.createElement("div");
	tail.className="tail";
	tail.style.width = "1px";
	// Distance from top of the screen
	tail.style.top = Math.round(10*Math.random())+ty+"px";
	// Size of the tail
	tail.style.height = Math.round(150*Math.random())+90+"px";
	
	if( parseInt(tail.style.height.replace("px",'')) < 100 )
		tail.style.width = "2px";
	// Tail Distance from left of the screen
	tail.style.left = Math.round(150*Math.random())+tx+"px";
	document.body.appendChild(tail);
}

setInterval( () => ShootingStar() , 2500);   //750 //2500
setInterval( () => killShootingStars() , 8000);  //3000
