$('.menubtn').click(function(){
    $('.mynav ul').toggleClass('show');
    $('.menubtn').toggleClass('showcancel');
});
var btnericsocial=document.getElementById('btnericsocial');
var btnwatermark=document.getElementById('btnimagewatermark');
var btnchurch=document.getElementById('btnchurchsoftware');
var btnblog=document.getElementById('btnblog');
var btncarrental=document.getElementById('btncarrental');
var btnesseditor=document.getElementById('btnesstexteditor');

btnericsocial.addEventListener('click',function(){
    window.location.href="projects.html#ericsocial";
})
btnwatermark.addEventListener('click',function(){
    window.location.href="projects.html#watermark";
});
btnchurch.addEventListener('click',function(){
    window.location.href="projects.html#churchsoftware";
});
btncarrental.addEventListener('click',function(){
    window.location.href="projects.html#carrental";
});
btnesseditor.addEventListener('click',function(){
    window.location.href="projects.html#esstexteditor";
});
btnblog.addEventListener('click',function(){
    window.location.href="projects.html#blog";
});

btnprojects=document.querySelector('.btnprojects');
btnprojects1=document.querySelector('.btnprojects1');
btnhire=document.querySelector('.btnhire');
btncv=document.querySelector('.btncv')
btncv1=document.querySelector('.btncv1')

btncv.addEventListener("click",function(){
    alert("downloading")
});
btncv1.addEventListener("click",function(){
    alert("downloading")
});


btnprojects.addEventListener("click",function(){
    window.location.href="projects.html";
});
btnprojects1.addEventListener("click",function(){
    window.location.href="projects.html";
});
$(document).ready(function(){
    $('#myModal').hide();
})
$('.btnhire').click(function(){
    $('#myModal').show();
})
$('.btnclosemodal').click(function(){
    $('#myModal').hide(2000);
})


var btncall=document.querySelector('.btncall');
var btnemail=document.querySelector('.btnemail');
btncall.addEventListener("click",function(){
    window.open('tel:+254707273244');
})
btnemail.addEventListener("click",function(){
    window.open('mailto:ericgichuri2605@gmail.com');
})
