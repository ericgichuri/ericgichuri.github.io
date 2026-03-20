
$(document).on("click", "#mobileMenuBtn", function () {
    $("#mobileMenu").slideToggle(250);
});



$(document).on("click", "#themeToggle, #themeToggleMobile", function () {

    $("html").toggleClass("dark");

    if ($("html").hasClass("dark")) {
        localStorage.setItem("theme", "dark");
        $(".theme-icon").removeClass("fa-moon").addClass("fa-sun");
    } else {
        localStorage.setItem("theme", "light");
        $(".theme-icon").removeClass("fa-sun").addClass("fa-moon");
    }

});


$(document).ready(function () {

    if (localStorage.getItem("theme") === "dark") {
        $("html").addClass("dark");
        $(".theme-icon").removeClass("fa-moon").addClass("fa-sun");
    }
    $("#mobileMenuBtn").on("click", function () {
        $("#mobileMenu").slideToggle(250);
    })

    $("#mobileMenu a").on("click", function () {
        $("#mobileMenu").hide();
    });
    $(document).on("click", function (event) {
        if (!$(event.target).closest('nav').length) {
            $("#mobileMenu").slideUp(200);
        }
    });
});