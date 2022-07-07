const scrollToTop = document.querySelector("#toHead")
const scrollToAbout = document.querySelector("#toAbout");
const scrollToSkills = document.querySelector("#toSkills");
const scrollToProjects = document.querySelector("#toProjects");
const scrollToContact = document.querySelector("#Contact");
const enterPortfolio = document.querySelector("#portfolio-btn button");

scrollToAbout.addEventListener("click", function () {
	$("html, body").animate({scrollTop: 0},1);
})

scrollToAbout.addEventListener("click", function () {
	$("html, body").animate({scrollTop: $("#about").offset().top - 53},1);
})

scrollToSkills.addEventListener("click", function () {
	$("html, body").animate({scrollTop: $("#skills").offset().top - 53},1);
})

scrollToProjects.addEventListener("click", function () {
	$("html, body").animate({scrollTop: $("#projects").offset().top - 53},1);
})

scrollToContact.addEventListener("click", function () {
	$("html, body").animate({scrollTop: $("#contact").offset().top - 53},1);
})

enterPortfolio.addEventListener("click", function() {
	$("html, body").animate({scrollTop: $("#about").offset().top - 53},1);
})

toggleNav = false;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	var element = document.getElementById('navigation');
	if(currentScrollPos > 10 && toggleNav == false) {
		element.classList.add('bg-dark');
		$("#navigation").animate({'height':'53px'},0.0001);
		$("#brand").animate({'font-size':'25px'},0.0001);
		$("#navbarNav").css('right','0px');
		toggleNav = !toggleNav;
	}
	else if(currentScrollPos == 0 && toggleNav == true) {
		element.classList.remove('bg-dark');
		$("#navigation").animate({'height':'77px'},0.0001);
		$("#brand").animate({'font-size':'34px'},0.0001);
		$("#navbarNav").css('right','12px');
		toggleNav = !toggleNav;
	}
}

// function changeHeight() {
// 	var element = document.getElementById('navigation');
// 	element.animate({height:500},500);
// }

// function scrolling() {
// 	window.scrollTo(0,500);
// }