// $("#generate").click(function(){
// 	var lorem = $("#lorem");
// 	lorem.html("");
// 	var quantity = $("#quantity")[0].valueAsNumber;
// 	var data = ["Lorem ipsum", "quia dolor sit", "amet", "consectetur"];
// 	for(var i = 0; i < quantity; i++){
// 		lorem.append("<p>"+data[i]+"</p>");
// 	}
// })

// $("#copy").click(function() {
// 	var range = document.createRange();
// 	range.selectNode($("#lorem")[0]);
// 	window.getSelection().removeAllRanges();
// 	window.getSelection().addRange(range);
// 	document.execCommand("copy");
// 	window.getSelection().removeAllRanges();
// 	}
// )


toggleNav = false;
window.onscroll = function() {
	var currentScrollPos = window.pageYOffset;
	var element = document.getElementById('navigation');
	if(currentScrollPos > 20 && toggleNav == false) {
		element.classList.add('navbar-dark');
		element.classList.add('bg-dark');
		toggleNav = !toggleNav;
		// console.log('function has been added')
	}
	else if(currentScrollPos == 0 && toggleNav == true) {
		element.classList.remove('navbar-dark');
		element.classList.remove('bg-dark');
		toggleNav = !toggleNav;
		// console.log('function has been removed');
	}
}