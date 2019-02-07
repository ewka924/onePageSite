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




let circleBar = document.querySelectorAll(".circleBar");


circleBar.forEach(el =>{
	let lenght = el.getTotalLength();
	let actualPercent = el.dataset.procent;
	console.log(actualPercent);
	let percent = (actualPercent*lenght)/100;
	console.log(`"${percent}"`);
	el.style.strokeDashoffset= percent;
	
});


