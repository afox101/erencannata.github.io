var clickOne = 
	
	anime({
	targets: '#eren',
	rotate: {value: -90, duration: 2000},
	autoplay: false,
	complete: function() {
	
	anime({
	targets: "div.home-title",
	opacity: {value: 1, duration: 3000, easing: 'easeInOutQuart'},
	
		});
	}
});


document.querySelector("#eren").onclick = clickOne.play;

