$(document).ready(function(){
	$(".menubtnhol").click(function(){
		btnstatus=$(this).attr("data")
		if (btnstatus=="hidden"){
			$(".navbar ul").addClass('show')
			$(this).attr("data","show")
			$(".menubtnhol img").attr("src","/static/icons/close.png")
		}else if(btnstatus=="show"){
			$(".navbar ul").removeClass('show')
			$(this).attr("data","hidden")
			$(".menubtnhol img").attr("src","/static/icons/menubtn.png")
		}
		
	})
	$(".menubtnhol1").click(function(){
		btnstatus1=$(this).attr("data")
		if (btnstatus1=="hidden"){
			$(".bsubmenus").addClass('show1')
			$(this).attr("data","show")
			$(".menubtnhol1 img").attr("src","/static/icons/close.png")
		}else if(btnstatus1=="show"){
			$(".bsubmenus").removeClass('show1')
			$(this).attr("data","hidden")
			$(".menubtnhol1 img").attr("src","/static/icons/menubtn.png")
		}
		
	})
	
})