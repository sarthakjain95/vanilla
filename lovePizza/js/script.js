
// Pizza clipart from: https://pixabay.com/vectors/pizza-food-slice-cheese-mushroom-23477/
// Free for commercial use 
// https://pixabay.com/service/license/
// By: https://pixabay.com/users/clker-free-vector-images-3736/

console.log('%cHello Mr. Developer!!', 'color: white; background-color:black; padding:10px');

var image = new Image();
image.src = "https://cdn.pixabay.com/photo/2012/04/01/16/51/pizza-23477_960_720.png";
image.height = 100;
image.width = 100;
// image.style.transform= "rotate(180deg)";
image.id = "pizza";
image.style.position = "absolute";
document.body.appendChild(image);

let targetHolder = document.getElementById("target-values-holder");
let target = {x:70, y:100};
let pizza = document.getElementById("pizza").style;

document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
    
function onMouseUpdate(e) {
	target.x = e.pageX;
	target.y = e.pageY; 
}

let px=0,py=0;

function followit(){
	//console.log("Follow ",target.x,target.y);
	targetHolder.innerHTML = "Target: "+target.x+"px  "+target.y+"px"
	px  = Number(pizza.left.replace("px",""));
	if(Math.round( (target.x-px-50)/10 )*10>0){
		pizza.left = px + 1 + "px";
	}else if(Math.round( (target.x-px-50)/10 )*10<0){
		pizza.left = px - 1 + "px";
	}

	py  = Number(pizza.top.replace("px",""));
	if(Math.round( (target.y-py-50)/10 )*10>0){
		pizza.top = py + 1 + "px";
	}else if(Math.round( (target.y-py-50)/10 )*10<0){
		pizza.top = py - 1 + "px";
	}
}

setInterval(followit,5);

// WebDev Projects - lovePizza
// By Sarthak Jain
