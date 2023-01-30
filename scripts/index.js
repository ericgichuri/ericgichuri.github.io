
$(document).ready(function(){

	$(".menubtnhol").click(function(){
		btnstatus=$(this).attr("data")
		if (btnstatus=="hidden"){
			$(".navbar ul").addClass('show')
			$(this).attr("data","show")
			$(".menubtnhol img").attr("src","icons/close.png")
		}else if(btnstatus=="show"){
			$(".navbar ul").removeClass('show')
			$(this).attr("data","hidden")
			$(".menubtnhol img").attr("src","icons/menubtn.png")
		}
		
	})
	$(".btnseemore").click(function(){
		var pid=$(this).attr("data")
		if(pid==6){
			window.location.href="projects.html"
		}else{
			window.location.href="projects.html#"+pid
		}
	})
	$(".btnblog").click(function(){
		alert("services soon")
	})
	$(".btngetcv").click(function(){
		window.open("files/ERIC GICHURI MUCHIRI CV.pdff")
	})
	$(".btnhire").click(function(){
		$("#myModal").show()
	})
	$(".btnprojects").click(function(){
		window.location.href="projects.html"
	})
	$(".btnclosemodal").click(function(){
		$("#myModal").hide()
	})
	$(".btncall").click(function(){
		window.location.href="tel:+254707273244"
	})
	$(".btnemail").click(function(){
		window.location.href="mailto:ericgichuri2605@gmail.com"
	})

})

gsap.from('body',{duration:0,display:'none',delay:0,ease:'bounce'})
gsap.from('.landing',{duration: 0.4, x:'-100vw',background:'#000088' ,delay:0.2,ease:'power2.in'})
gsap.from('.text-landing',{duration:0.4,y:'50px',delay:0.7,opacity:0,ease:'power'})
gsap.from('.img1',{duration:0.4,y:'50px',delay:0.7,opacity:0,ease:'power'})
gsap.to('.landing',{duration: 0.6, height:'0px',display:'none',delay:2,ease:'power2.in'})
gsap.from('.navbar',{duration: 2,display:'none',opacity:'0',delay:3,ease:'power'})
gsap.from('.container1',{duration:0.4,display:'none',y:'100%',delay:4,ease:'power2.inOut'})
gsap.from('.container1 .subcontainer1',{duration:0.8,x:'100vw',delay:4.4,ease:'power'})
gsap.from('.container1 .subcontainer2',{duration:0.8,x:'-100vw',delay:5.7,ease:'power'})
gsap.from('.container1 .subcontainer3',{duration:0.8,x:'100vw',delay:5.8,ease:'power'})
gsap.from('.container1 .subcontainer4',{duration:0.8,x:'-100vw',delay:5.9,ease:'power'})

gsap.from('img',{'duration':0.6,x:'-20px',opacity:0,delay:6,ease:'power2.in',stagger:.2})
gsap.from('button',{'duration':0.6,x:'100vw',delay:6,ease:'power2.in',stagger:.2})

gsap.from('.container1 h3',{duration:0.7,y:'50px',delay:4.4,opacity:0,ease:'power',stagger:.3})
gsap.from('.container1 h4',{duration:0.7,y:'50px',delay:5.1,opacity:0,ease:'power',stagger:.3})
gsap.from('.container1 h5',{duration:0.7,y:'50px',delay:5.7,opacity:0,ease:'power',stagger:.3})
gsap.from('.container1 h6',{duration:0.7,y:'50px',delay:5.9,opacity:0,ease:'power',stagger:.3})
gsap.from('.container1 p',{duration:0.7,y:'50px',delay:6.1,opacity:0,ease:'power',stagger:.3})

gsap.from('.footer',{duration:2,display:'none',delay:6,ease:'power2.in'})