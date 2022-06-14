let lastKnownScrollPosition = 0;
let ticking = false;

let container = document.getElementById("container");

container.addEventListener('scroll', function (e) {
	let lastElementIndex = container.children.length - 1;
	if (container.children.item(lastElementIndex - 1).getBoundingClientRect().y == 0) {
		console.log("avant dernier");
	}
});