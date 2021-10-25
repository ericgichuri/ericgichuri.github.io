
const menu=document.getElementById('menu');
const list=document.getElementById('list');
const body=document.getElementById('body');
const hireform=document.getElementById('hireform');
const down1=document.querySelector(".down1");
const down2=document.querySelector(".down2");
const down3=document.querySelector(".down3");
const down4=document.querySelector(".down4");
const webdevcontlist=document.querySelector(".webdevcontlist");
const webdescontlist=document.querySelector(".webdescontlist");
const softdevcontlist=document.querySelector(".softdevcontlist");
const androiddevcontlist=document.querySelector(".androiddevcontlist");
const btnexplorer1=document.querySelector("#explorer1");
const btnexplorer2=document.querySelector("#explorer2");

const divclose=document.querySelector(".divclose");

menu.addEventListener("click",function(){
	list.classList.toggle('show')
	menu.classList.toggle('close')
})

document.getElementById('seeform').addEventListener("click",function(){
	hireform.style.display="block";
})

function check(){
	hireform.style.display="none";

}

down1.addEventListener("click",function(){
	//down1.src="icons/up.png";
	webdevcontlist.classList.toggle('listshow')
	down1.classList.toggle('upshowicon')

})
down2.addEventListener("click",function(){
	//down2.src="icons/up.png";
	webdescontlist.classList.toggle('listshow')
	down2.classList.toggle('upshowicon')
})
down3.addEventListener("click",function(){
	//down3.src="icons/up.png";
	softdevcontlist.classList.toggle('listshow')
	down3.classList.toggle('upshowicon')
})
down4.addEventListener("click",function(){
	//down4.src="icons/up.png";
	androiddevcontlist.classList.toggle('listshow')
	down4.classList.toggle('upshowicon')
})



function toprojects() {
	window.location.href="projects.html"
}

function alerthire(){
	alert("You can not hire me here.Try using the contact or email at the bottom of thepage")
	window.location.href="index.html#Contacts"
	return false
}
function wantsubmit(){
	alerthire()
	document.prevent()
}