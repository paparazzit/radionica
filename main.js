let burger = document.querySelector(".burger");
let drop_down = document.querySelector(".drop_down");

burger.addEventListener("click", showDropDown);

function showDropDown() {
	console.log(this);
	drop_down.classList.toggle("show");
}

$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	dots: false,
	autoplay: true,
	autoplayTimeout: 3500,

	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 2,
		},
		1000: {
			items: 2,
		},
	},
});
