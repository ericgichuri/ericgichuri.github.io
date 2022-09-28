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

$(".btnchatbot").click(function(){
    $(".chatcenter").addClass("hidechatcenter")
    $(".btnchatbot").hide()
})
$(".btnclosebot").click(function(){
    $(".chatcenter").removeClass("hidechatcenter")
    $(".btnchatbot").show()
})
$(".msgbox").keyup(function(e){
    if($(".msgbox").val()){
        $(".btnsend").css("display","block")
    }else{
        $(".btnsend").css("display","none")
    }
    var smsg=ucfirst($(this).val(),true)
    $(this).val(smsg)
})
$(".btnsend").click(function(){
    var know={
        "hi":"Hello",
        "hello":"Hi !",
        "how are you":"I'm great !",
        "bye":"Have a nice day !",
        "morning":"Hey! Morning",
        "afternoon":"Hey! Afternoon",
        "evening":"Evening to",
        "good night":"Good Night to !",
        "projects":"<a class='text-white' target='_blank' href='projects.html'>click here!</a>",
        "email":"<a class='text-white' target='_blank' href='mail:ericgichuri2605@gmail.com'>click here to mail</a>",
        "contact":"<a class='text-white' target='_blank' href='tel:+254707273244'>click here to call</a>",
        "company":"Eric software solution is my company",
        "your projects":"<a class='text-white' target='_blank' href='projects.html'>click here!</a>",
        "thanks":"You are welcome!",
        "do you teach":"contact <a class='text-white' target='_blank' href='tel:+254707273244'>click here to call</a>"
    };
    var usermsg=$(".msgbox").val()
    $appendusermsg="<div class='messagecontainer'><div class='chat usermsg'>"+usermsg+"</div></div>"
    $(".chatarea").append($appendusermsg)
    if(usermsg in know){
        $(".chatarea").append("<div class='chat essbotmsg'>"+know[usermsg]+"</div>")
    }else{
        $(".chatarea").append("<div class='chat essbotmsg'>I don't understand</div>")
    }
    $(".msgbox").val("")
    $(".btnsend").css("display","none")
})