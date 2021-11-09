const menu=document.getElementById('menu');
const list=document.getElementById('list');
const body=document.getElementById('body');

menu.addEventListener("click",function(){
	list.classList.toggle('show')
	menu.classList.toggle('close')
})