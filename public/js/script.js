const scrollToTop = document.querySelector("#toHead")
const scrollToAbout = document.querySelector("#toAbout");
const scrollToSkills = document.querySelector("#toSkills");
const scrollToProjects = document.querySelector("#toProjects");
const scrollToContact = document.querySelector("#toContact");
const enterPortfolio = document.querySelector("#portfolio-btn button");

scrollToTop.addEventListener("click", function () {
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
	controlNavColors(currentScrollPos);
	navBarToggle(currentScrollPos, element);
}

function controlNavColors(scrollPos) {
	if(scrollPos >= 3448) {
		$('.nav-link').removeClass('addNavColor');
		$('#toContact').addClass('addNavColor');
	}
	else if(scrollPos >= 2448) {
		$('.nav-link').removeClass('addNavColor');
		$('#toProjects').addClass('addNavColor');
	}
	else if(scrollPos >= 1448) {
		$('.nav-link').removeClass('addNavColor');
		$('#toSkills').addClass('addNavColor');
	}
	else if(scrollPos >= 908) {
		$('.nav-link').removeClass('addNavColor');
		$('#toAbout').addClass('addNavColor');
	}
	else {
		$('.nav-link').removeClass('addNavColor');
	}
}

function navBarToggle(currentScrollPos, element) {
	if(currentScrollPos > 10 && toggleNav == false) {
		element.classList.add('bg-dark');
		$("#navigation").animate({'height':'53px'},0);
		$("#brand").animate({'font-size':'25px'},200);
		toggleNav = !toggleNav;
	}
	else if(currentScrollPos == 0 && toggleNav == true) {
		element.classList.remove('bg-dark');
		$("#navigation").animate({'height':'77px'},0);
		$("#brand").animate({'font-size':'34px'},200);
		toggleNav = !toggleNav;
	}
}