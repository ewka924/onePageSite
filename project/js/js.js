const toggleMenuButton = document.getElementById("toggleMenuButton");
const toggleMenu = document.querySelector(".toggleMenu");
const menu = document.querySelector(".mobileMenuCont");
const setHeight = document.querySelector(".setHeight");
console.log(toggleMenu);




function toggleNav(){
	if(toggleMenu.style.display === "block"){
		toggleMenu.style.display = "none";
		setHeight.style.height = "auto";
	}else{
		toggleMenu.style.display = "block";
		let heightMenu = menu.offsetHeight + 109 + "px";
		setHeight.style.height = heightMenu;
	}
}

toggleMenuButton.addEventListener('click', toggleNav);

//Make animate counter of skills




let ctx;
let centerX;
let radius;
let width;
let height;
let all = 0;
let data;


 function degreesToRadians(deg) {

 			return (deg/180) * Math.PI;
 
        
      }

function percentToRadians(percentage){
	  

  		
  		console.log("data " + data);	 
  	
  			console.log("Percentage " + percentage);
  			var degrees = percentage * 360 / 100;
  			return degreesToRadians(degrees + 270);
  		
        
        
}




function drawCircle(){
	canvas.forEach(canvas =>{

	ctx = canvas.getContext('2d');

	width = canvas.width = 120;
	heigth = canvas.height = 120;

	centerX = canvas.width/2;
	centerY = canvas.height/2;
	radius = 50;
	data = canvas.dataset.percentage;
	let startAngle = (0/180)*Math.PI;
	let endAngle = percentToRadians(all);
	ctx.lineWidth = 2;
	ctx.fillStyle = '#7b6c63';
	ctx.strokeStyle = '#7b6c63';
	ctx.beginPath();
	ctx.arc(centerX, centerY, radius, startAngle, endAngle, false);
	ctx.stroke();
	all ++;

});
	}

//interval fucntion
function interval(){
	setInterval(drawCircle, 1000);
}

//get canvas from html
const canvas = document.querySelectorAll(".counterCircle");
console.log(canvas);

//set interval function to all canvas
canvas.forEach(canvas =>{
interval();
});









