let upBtn = document.querySelector(".scrollTopBtn");

window.onscroll = function () {
	this.scrollY >= 350
		? upBtn.classList.add("show")
		: upBtn.classList.remove("show");
};

upBtn.onclick = function () {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};
