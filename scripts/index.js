
$(document).ready(function(){
	//window.location.href="https://www.ericgichuri.co.ke"
	$(".menu_button").click(function(){
		$(".menu_holder").toggleClass("show")
		$(".menu_button span").toggleClass("fa-window-close fa-bars")
	})
	ScrollOut({
		targets:".career_path_div p,.skills_explanation label,.services_div li,.intro_div_info h4,.intro_div_info p,.skill_div",
		threshold:.6
	})
	$(".btn_cv").click(function(){
		window.open("files/ERIC GICHURI MUCHIRI CV.pdf")
	})
	$(".btn_projects").click(function(){
		window.open("projects.html")
	})
	$(".btn_hire").click(function(){
		$("#myModal").show()
	})
	$(".btnclosemodal").click(function(){
		$("#myModal").hide()
	})
	$(".btncall").click(function(){
		window.open("tel:+254707273244")
	})
	$(".btnemail").click(function(){
		window.open("mailto:ericgichuri2605@gmail.com")
	})
	$(".btn_readmore").click(function(){
		action=$(this).attr("data-action")
		if(action){
			window.open(action)
		}else{
			window.open("projects.html")	
		}
		
	})
})
