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
	
})