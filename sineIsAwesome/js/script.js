

console.log("%cJS CONNECTED!", "background-color: black; color: white; padding:20px");

const canvas= document.getElementById("canvas");
const ctx= canvas.getContext("2d");

canvas.height= canvas.offsetHeight;
canvas.width= canvas.offsetWidth;

let offsetY= canvas.height / 2;

const wave= {
	frequency: 0.1,
	amp: 40,
	len: 0.01,
}

const waveGradient= {
	h: 0,
	s: 50,
	l: 50,
	dh: 2
}

let delta= 0;
function makeSineWaves(time){

	ctx.fillStyle=  "rgba(0,0,0,0.05)";
	ctx.fillRect(0,0, canvas.width, canvas.height);

	ctx.beginPath();
	ctx.moveTo(0, offsetY);

	for(let x=0; x<canvas.width; x++)
		ctx.lineTo( x, Math.sin( x * wave.len + delta) * wave.amp  + offsetY );

	ctx.strokeStyle= `hsl(${waveGradient.h},${waveGradient.s}%,${waveGradient.l}%)`;
	ctx.stroke();
	
	wave.amp+= waveGradient.dh;
	waveGradient.h+= waveGradient.dh;

	if(waveGradient.h>200 || waveGradient.h<0) waveGradient.dh*=-1;
	
	delta+=wave.frequency;
	
	requestAnimationFrame(makeSineWaves);
}

requestAnimationFrame(makeSineWaves)

