let lastKnownScrollPosition = 0;
let ticking = false;

document.addEventListener('scroll', function (e) {
	lastKnownScrollPosition = window.scrollY;
	console.log(window.scrollY);
});