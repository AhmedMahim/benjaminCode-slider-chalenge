const rightArr = document.querySelector('#rightArr'),
	leftArr = document.querySelector('#leftArr'),
	stepers = document.querySelectorAll('.step'),
	years = document.querySelectorAll('.year'),
	imgbx = document.querySelector('.imgbx'),
	disc = document.querySelectorAll('.discbx p'),
	title = document.querySelectorAll('.titlebx h1'),
	logo = document.querySelectorAll('.logobx img');

let currantStep = 0;

stopSliding()

function stopSliding() {
	if (currantStep === 4) {
		rightArr.style.pointerEvents = 'none';
		rightArr.style.opacity = '.5';
	} else {
		rightArr.style.pointerEvents = 'all';
		rightArr.style.opacity = '1';
	}

	if (currantStep === 0) {
		leftArr.style.pointerEvents = 'none';
		leftArr.style.opacity = '.5';
	} else {
		leftArr.style.pointerEvents = 'all';
		leftArr.style.opacity = '1';
	}
}

rightArr.addEventListener('click', () => {

	years.forEach(year => {
		if (year.classList.contains('slideExit')) {
			year.classList.remove('slideExit');
		} else {
			years[currantStep].classList.add('slideExit')
			yearExit();
		}
	});

	// discripttions
	disc.forEach(discp => {
		if (discp.classList.contains('slideExit')) {
			discp.classList.remove('slideExit');
		} else {
			disc[currantStep].classList.add('slideExit')
			discExit();
		}
	});

	// title
	title.forEach(titleh1 => {
		if (titleh1.classList.contains('slideExit')) {
			titleh1.classList.remove('slideExit');
		} else {
			title[currantStep].classList.add('slideExit')
			titleExit()
		}
	});

	// logo
	logo.forEach(logoimg => {
		if (logoimg.classList.contains('slideExit')) {
			logoimg.classList.remove('slideExit');
		} else {
			logo[currantStep].classList.add('slideExit')
			logoExit()
		}
	});

	currantStep = currantStep + 1;
	// console.log(currantStep);

	nextSlide()
	stopSliding()
})

function nextSlide() {
	stepers[currantStep].classList.add('active');


	// years
	years.forEach(year => {
		if (year.classList.contains('active')) {
			year.classList.remove('active');
		}
	})
	years[currantStep].classList.add('active');
	yearEntrance();


	// images
	imgbx.style.left = `calc(-${currantStep} * 100%)`;


	// Discriptions

	disc.forEach(discp => {
		if (discp.classList.contains('active')) {
			discp.classList.remove('active');
		}
	})
	disc[currantStep].classList.add('active');
	discEntrance();

	// title
	title.forEach(titleh1 => {
		if (titleh1.classList.contains('active')) {
			titleh1.classList.remove('active');
		}
	})
	title[currantStep].classList.add('active');
	titleEntrance()

	// logo
	logo.forEach(logoimg => {
		if (logoimg.classList.contains('active')) {
			logoimg.classList.remove('active');
		}
	})
	logo[currantStep].classList.add('active');
	logoEntrance()
}

leftArr.addEventListener('click', () => {
	currantStep = currantStep + 1;
	currantStep = currantStep - 1;
	// console.log(currantStep);

	prevSlide()
	stopSliding()


})

function prevSlide() {
	if (currantStep <= 0 || currantStep >= 5) {

		years.forEach(year => {
			if (year.classList.contains('slideExit')) {
				years.classList.remove('slideExit');
			}
		})

		// discriptions
		disc.forEach(discp => {
			if (discp.classList.contains('slideExit')) {
				disc.classList.remove('slideExit');
			}
		})

		// title
		title.forEach(titleh1 => {
			if (titleh1.classList.contains('slideExit')) {
				title.classList.remove('slideExit');
			}
		})

		// logo
		logo.forEach(logoimg => {
			if (logoimg.classList.contains('slideExit')) {
				logo.classList.remove('slideExit');
			}
		})

	} else {

		stepers[currantStep].classList.remove('active');

		// update currant steps
		currantStep = currantStep - 1;

	}



	// years

	years[currantStep + 1].classList.remove('active');
	years[currantStep + 1].classList.add('slideExit');
	yearExit()



	years[currantStep].classList.remove('slideExit');
	years[currantStep].classList.add('active');
	yearEntrance()

	if (years[years.length - 1].classList.contains('active')) {

		years[years.length - 1].classList.remove('active');
		years[years.length - 1].classList.add('slideExit');
		yearExit()

	}

	// Posters    
	cssLeftValue = imgbx.style.left;
	imgbx.style.left = `calc(${cssLeftValue} + 100%)`;


	// Discriptions

	disc[currantStep + 1].classList.remove('active');
	disc[currantStep + 1].classList.add('slideExit');
	discExit()



	disc[currantStep].classList.remove('slideExit');
	disc[currantStep].classList.add('active');
	discEntrance()

	if (disc[disc.length - 1].classList.contains('active')) {

		disc[disc.length - 1].classList.remove('active');
		disc[disc.length - 1].classList.add('slideExit');
		discExit()

	}

	// title
	title[currantStep + 1].classList.remove('active');
	title[currantStep + 1].classList.add('slideExit');
	titleExit()



	title[currantStep].classList.remove('slideExit');
	title[currantStep].classList.add('active');
	titleEntrance()

	if (title[title.length - 1].classList.contains('active')) {

		title[title.length - 1].classList.remove('active');
		title[title.length - 1].classList.add('slideExit');
		titleExit()

	}


	// logo
	logo[currantStep + 1].classList.remove('active');
	logo[currantStep + 1].classList.add('slideExit');
	logoExit()



	logo[currantStep].classList.remove('slideExit');
	logo[currantStep].classList.add('active');
	logoEntrance()

	if (logo[logo.length - 1].classList.contains('active')) {

		logo[logo.length - 1].classList.remove('active');
		logo[logo.length - 1].classList.add('slideExit');
		logoExit()

	}
}







function yearEntrance() {
	// Get colors from css variables
	var primary = getComputedStyle(document.querySelector('html')).getPropertyValue('--primary'),
		secandary = getComputedStyle(document.querySelector('html')).getPropertyValue('--secandary');

	gsap.fromTo(".year.active", {
		opacity: 0,
		x: 50,
		color: secandary
	}, {
		opacity: 1,
		x: 0,
		color: primary
	});
}

function yearExit() {
	// Get colors from css variables
	var secandary = getComputedStyle(document.querySelector('html')).getPropertyValue('--secandary');

	gsap.to(".year.slideExit", {
		opacity: 0,
		x: -50,
		color: secandary
	});
}





function discEntrance() {
	// Get colors from css variables
	var primary = getComputedStyle(document.querySelector('html')).getPropertyValue('--primary'),
		secandary = getComputedStyle(document.querySelector('html')).getPropertyValue('--secandary');

	gsap.fromTo("p.active", {
		opacity: 0,
		x: 50,
		color: secandary
	}, {
		opacity: 1,
		x: 0,
		color: primary
	});
}

function discExit() {
	// Get colors from css variables
	var secandary = getComputedStyle(document.querySelector('html')).getPropertyValue('--secandary');

	gsap.to("p.slideExit", {
		opacity: 0,
		x: -50,
		color: secandary
	});
}

// title
function titleEntrance() {
	// Get colors from css variables
	var primary = getComputedStyle(document.querySelector('html')).getPropertyValue('--primary'),
		secandary = getComputedStyle(document.querySelector('html')).getPropertyValue('--secandary');

	gsap.fromTo("h1.active", {
		opacity: 0,
		x: 80,
		color: secandary
	}, {
		opacity: 1,
		x: 0,
		color: primary
	});
}

function titleExit() {
	// Get colors from css variables
	var secandary = getComputedStyle(document.querySelector('html')).getPropertyValue('--secandary');

	gsap.to("h1.slideExit", {
		opacity: 0,
		x: -80,
		color: secandary
	});
}


// logo
function logoEntrance() {
	// Get colors from css variables
	var primary = getComputedStyle(document.querySelector('html')).getPropertyValue('--primary'),
		secandary = getComputedStyle(document.querySelector('html')).getPropertyValue('--secandary');

	gsap.fromTo(".logo.active", {
		opacity: 0,
		x: 100,
		color: secandary
	}, {
		opacity: 1,
		x: 0,
		color: primary
	});
}

function logoExit() {
	// Get colors from css variables
	var secandary = getComputedStyle(document.querySelector('html')).getPropertyValue('--secandary');

	gsap.to(".logo.slideExit", {
		opacity: 0,
		x: -100,
		color: secandary
	});
}






// width