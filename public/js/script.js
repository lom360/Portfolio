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

// $(function()
// {
//     function after_form_submitted(data)
//     {
//         if(data.result == 'success')
//         {
//             $('form#contact-form').hide();
//             $('#success_message').show();
//             $('#error_message').hide();
//         }
//         else
//         {
//             $('#error_message').append('<ul></ul>');

//             jQuery.each(data.errors,function(key,val)
//             {
//                 $('#error_message ul').append('<li>'+key+':'+val+'</li>');
//             });
//             $('#success_message').hide();
//             $('#error_message').show();

//             //reverse the response on the button
//             $('button[type="button"]', $form).each(function()
//             {
//                 $btn = $(this);
//                 label = $btn.prop('orig_label');
//                 if(label)
//                 {
//                     $btn.prop('type','submit' );
//                     $btn.text(label);
//                     $btn.prop('orig_label','');
//                 }
//             });

//         }//else
//     }

// 	$('#contact-form').submit(function(e)
//       {
//         e.preventDefault();

//         $form = $(this);
//         //show some response on the button
//         $('button[type="submit"]', $form).each(function()
//         {
//             $btn = $(this);
//             $btn.prop('type','button' );
//             $btn.prop('orig_label',$btn.text());
//             $btn.text('Sending ...');
//         });


//                     $.ajax({
//                 type: "POST",
//                 url: 'mail.php',
//                 data: $form.serialize(),
//                 success: after_form_submitted,
//                 dataType: 'json'
//             });

//       });
// });

// const form = document.querySelector('#contact-form');
// function sendMsg(e) {
// 	const name = document.querySelector('#name'),
// 	  email = document.querySelector('#email'),
// 	  message = document.querySelector('#message');

// 	Email.send({
// 		SecureToken : "1959e8eb-aace-442d-9d5d-a242399442ba",
// 		To : 'sarom_thin@outlook.com',
// 		From : email.value,
// 		Subject : "Contact Form",
// 		Body : message.value
// 	}).then(
// 	message => alert(message)
// 	);
// }
// form.addEventListener('submit', sendMsg);


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);


console.log(window.innerWidth);