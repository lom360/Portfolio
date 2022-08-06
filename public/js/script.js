const scrollToTop = document.querySelector("#toHead")
const scrollToAbout = document.querySelector("#toAbout");
const scrollToSkills = document.querySelector("#toSkills");
const scrollToProjects = document.querySelector("#toProjects");
const scrollToContact = document.querySelector("#toContact");
const enterPortfolio = document.querySelector("#portfolio-btn button");

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
}))
// scrollToTop.addEventListener("click", function () {
// 	$("html, body").animate({scrollTop: 0},1);
// })

// scrollToAbout.addEventListener("click", function () {
// 	$("html, body").animate({scrollTop: $("#about").offset().top - 53},1);
// })

// scrollToSkills.addEventListener("click", function () {
// 	$("html, body").animate({scrollTop: $("#skills").offset().top - 53},1);
// })

// scrollToProjects.addEventListener("click", function () {
// 	$("html, body").animate({scrollTop: $("#projects").offset().top - 53},1);
// })

// scrollToContact.addEventListener("click", function () {
// 	$("html, body").animate({scrollTop: $("#contact").offset().top - 53},1);
// })

// enterPortfolio.addEventListener("click", function() {
// 	$("html, body").animate({scrollTop: $("#about").offset().top - 53},1);
// })


toggleNav = false;
smallScreen = false;
count = 0;
s1 = false;

function getCurrentPosition() {
	return window.pageYOffset;
}
function getCurrentWidth() {
	return window.innerWidth;
}
function checkSize() {
	if(getCurrentWidth() <= 991 && smallScreen == false) {
		smallScreen = true;
		// count++;
	}
	else if(getCurrentWidth() > 991 && smallScreen == true) {
		smallScreen = false;
		// count = 0;
	}
}
function repeatedActions() {
	var element = document.getElementById('navigation');
	navBarToggle(getCurrentPosition(), element);
}

window.onload = function() {
	checkSize();
	repeatedActions();
}
function navBarToggle(currentScrollPos, element) { // function navBarToggle(currentScrollPos, element)
	if(smallScreen ) {
		addNavBar(element);
	}
	else {
		if(currentScrollPos > 10 && toggleNav == false) {
			addNavBar(element);
			toggleNav = !toggleNav;
		}
		else if(currentScrollPos == 0 && toggleNav == false) {
			removeNavBar(element);

		}
		else if(currentScrollPos == 0 && toggleNav == true) {
			removeNavBar(element);
			toggleNav = !toggleNav;
		}
	}
}

// window.onresize = function() {
// 	checkSize();
// 	if(smallScreen && count == 1) {
// 		repeatedActions();
// 	}
// }

var resizeId;
window.addEventListener('resize', function() {
	// checkSize();
    clearTimeout(resizeId);
    resizeId = setTimeout(doneResizing, 50);
});

function doneResizing(){
	checkSize();
	repeatedActions();
}

window.onscroll = function() {
	controlNavColors(getCurrentPosition());
	repeatedActions()
}
function controlNavColors(currentScrollPos) {
	contactPos = $('#contact').offset().top - 53;
	projectsPos = $('#projects').offset().top - 53;
	skillsPos = $('#skills').offset().top - 53;
	aboutPos = $('#about').offset().top - 53;
	if(currentScrollPos >= contactPos) { // 3448
		$('.nav-link').removeClass('addNavColor');
		$('#toContact').addClass('addNavColor');
	}
	else if(currentScrollPos >= projectsPos) { // 2448
		$('.nav-link').removeClass('addNavColor');
		$('#toProjects').addClass('addNavColor');
	}
	else if(currentScrollPos >= skillsPos) { // 1448
		$('.nav-link').removeClass('addNavColor');
		$('#toSkills').addClass('addNavColor');
	}
	else if(currentScrollPos >= aboutPos) { // 908
		$('.nav-link').removeClass('addNavColor');
		$('#toAbout').addClass('addNavColor');
	}
	else {
		$('.nav-link').removeClass('addNavColor');
	}
}

function addNavBar(element) {
	element.classList.add('bg-dark');
	$("#navigation").animate({'height':'53px'},0);
	$("#brand").animate({'font-size':'25px'},200);
	// toggleNav = !toggleNav;
}

function removeNavBar(element,spd1,spd2) {
	element.classList.remove('bg-dark');
	$("#navigation").animate({'height':'77px'},0);
	$("#brand").animate({'font-size':'34px'},100);
	// toggleNav = !toggleNav;
}
// function navBarToggle(element) {
// 	if(toggleNav == false) {
// 		element.classList.add('bg-dark');
// 		$("#navigation").animate({'height':'53px'},0);
// 		$("#brand").animate({'font-size':'25px'},200);
// 		toggleNav = !toggleNav;
// 	}
// 	else if(toggleNav == true) {
// 		element.classList.remove('bg-dark');
// 		$("#navigation").animate({'height':'77px'},0);
// 		$("#brand").animate({'font-size':'34px'},200);
// 		toggleNav = !toggleNav;
// 	}
// }

function validateForm(email, name, subject, message) {
	if(email == '') {
		$('.email').append('<h4 style="color:red">Please enter an email</h4>')
	}
}

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


console.log(window.innerWidth);