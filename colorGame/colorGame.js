let colors= ["", "", "", "", "", ""]

let jumbotronP= document.querySelectorAll(".jumbotron p");
let	targeth1= document.querySelector(".jumbotron h1");
let	jumboBackg= document.querySelector("div.jumbotron");
let btnEZ= document.querySelectorAll("#ez button");
let btnhard= document.querySelectorAll("#hard button");
let msgDisplay= document.getElementById("tryAgain");
let newColBtn=document.getElementById("newColor");
let EZselBtn=document.getElementById("EZselect");
let hardSelBtn=document.getElementById("hardselect");
let goal="";
let curr="EZ"
//rgb color value limit is 255
//Math.random() generates random number between 0 to 1 (decimals). we can use Math.floor(num) to change tht
function randomInt(lowest, highest){//exclusive, int highest is never gonna show up, both arg has to be integers
	let rand=Math.random();
	let range=highest-lowest;
	return lowest + Math.floor(range*rand);
}

function changeCol(color){
	for(let i=0;i<3;i++){
		btnhard[i].style.backgroundColor=color;
		btnEZ[i].style.backgroundColor=color;
	}
}

function addListen(){
	let clickedCol=this.style.backgroundColor;
	if (clickedCol === goal){
		msgDisplay.textContent="Correct!";
		changeCol(clickedCol);
		jumboBackg.style.backgroundColor=clickedCol;
	}
	else{
		this.style.background="#232323"
		msgDisplay.textContent="Try Again";
	}
}


function init(){
	msgDisplay.textContent="";
	jumboBackg.style.backgroundColor="steelblue";
	for (let i=0; i<3;i++){
		let a=[randomInt(0,256), randomInt(0,256)];
		let b=[randomInt(0,256), randomInt(0,256)]; 
		let c=[randomInt(0,256), randomInt(0,256)];  

	    colors[i]= "rgb(" + a[0] + ", " + b[0] + ", " + c[0] +")";
	    btnEZ[i].style.backgroundColor = colors[i];
	    colors[i+3]= "rgb(" + a[1] + ", " + b[1] + ", " + c[1] +")";

	    btnhard[i].style.backgroundColor = colors[i+3];
	    btnEZ[i].style.backgroundColor = colors[i];
	
	}

	if (curr === "EZ"){
		goal=colors[randomInt(0,3)];
		EZselBtn.classList.add("btnselected");
		btnhard.forEach(function(i){
			i.style.display="none";
		});
	}
	else {
		goal=colors[randomInt(0,6)];
		hardSelBtn.classList.add("btnselected");
		btnhard.forEach(function(i){
			i.style.display="block";
		});
	}
	targeth1.textContent="RGB"+goal.slice(3,goal.length);
}

EZselBtn.addEventListener("click", function(){
	if (curr !== "EZ"){
		curr="EZ";
		hardSelBtn.classList.remove("btnselected");
		init();
	}
});

hardSelBtn.addEventListener("click", function(){
	if(curr !== "hard"){
		curr="hard";
		EZselBtn.classList.remove("btnselected");
		init();
	}
});

newColBtn.addEventListener("click", init);

for (let i=0; i<3;i++){
    btnEZ[i].addEventListener("click", addListen);
    btnhard[i].addEventListener("click", addListen);
}

init();

