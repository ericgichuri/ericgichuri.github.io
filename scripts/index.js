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
			window.location.href="Projects.html"
		}else{
			window.location.href="Projects.html#"+pid
		}
	})
	$(".btnblog").click(function(){
		alert("services soon")
	})
	$(".btngetcv").click(function(){
		window.open("files/eric cv.pdf")
	})
	$(".btnhire").click(function(){
		$("#myModal").show()
	})
	$(".btnprojects").click(function(){
		window.location.href="Projects.html"
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