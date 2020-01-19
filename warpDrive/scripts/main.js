

// console.log("Running @",navigator.userAgent);

let engine_isOn= false;

let space_speed= 3;
let warp_speed= 50;

let stars_count= 6000;

function isMobileDevice() { 
	if( navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/Mac/i)
	|| navigator.userAgent.match(/KFAPWI/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)
	){
		console.log("Running on Touch based device");
		space_speed= 1;
		stars_count= 3000;
		return true;
	}else {
		console.log("Not on a Touch based device");
		return false;
	}
}

if( isMobileDevice() ) document.getElementById("control-info").innerHTML= "Touch to toggle Warp Drive";

let speed= space_speed;

function toggleWarpDrive(){
	if(engine_isOn===false){ 
		engine_isOn = true; 
		speed= warp_speed;
	}else{ 
		engine_isOn= false;
		speed= space_speed; 
	}
}

const kick= (e,ex = false)=>( (e.keyCode===32 || ex) && toggleWarpDrive() );

const canvas= document.getElementById("canvas");
const ctx= canvas.getContext('2d');

const w= window.innerWidth;
const h= window.innerHeight;

canvas.style.height= h+"px";
canvas.style.width= w+"px";
canvas.height= h;
canvas.width= w;

ctx.translate(w/2, h/2);
ctx.strokeStyle= "white";

const getRandomXY= _=>[ Math.round(Math.random()*(2*w)-w), Math.round(Math.random()*(2*h)-h) ];


class Star{

	constructor(){
		[this.x, this.y]= [...getRandomXY()];
		this.z= w*Math.random();
		this.lz= this.z + 1;
	}

	update(speed){
		this.lz= this.z;
		this.z-= speed;
		if(this.z < 0){
			[this.x, this.y]= [...getRandomXY()];
			this.z= w*Math.random()
			this.lz= this.z + 1;			
		}
	}

	draw(){
		const x= this.x/this.z*w, y= this.y/this.z*h;
		const lastx= this.x/this.lz*w, lasty= this.y/this.lz*h;

		ctx.beginPath();
		ctx.moveTo( lastx, lasty );
		ctx.lineTo( x, y );
		ctx.stroke();
	}


};

const stars= [];

for(let i=0; i<stars_count; i++) stars.push( new Star() );

function update(time){

	ctx.fillStyle= "#000";
	ctx.fillRect(-w, -h, 2*w, 2*h);

	for(let i=0; i<stars_count; ++i){
		stars[i].update(speed);
		stars[i].draw();
	}

	requestAnimationFrame(update);
}
requestAnimationFrame(update);
