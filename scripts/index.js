$(document).ready(function(){
	$(".menu_button").click(function(){
		$(".menu_holder").toggleClass("show")
		$(".menu_button span").toggleClass("fa-window-close fa-bars")
	})
	ScrollOut({
		targets:".career_path_div p,.skills_explanation label,.services_div li,.intro_div_info h4,.intro_div_info p,.skill_div",
		threshold:.4
	})
})