document.addEventListener('DOMContentLoaded', function() {
	const hamburger = document.querySelector('.hamburger');
	const mobileMenu = document.querySelector('.nav-list ul');
	const menuItems = document.querySelectorAll('.nav-list ul li a');
	const header = document.querySelector('.header.container');
	const servicesSection = document.getElementById('services');
	const maintenanceOverlay = document.getElementById('maintenance-overlay');
	const maintenanceMessage = document.getElementById('maintenance-message');
	const closeBtn = document.querySelector('.maintenance-content .close-btn');
	const btnsVisit = document.querySelectorAll('.btn-visit');
	const viewCvBtn = document.getElementById('view-cv-btn');
	const cvImage = document.getElementById('cv-image');
	const heroSpans = document.querySelectorAll('.hero.container h1 span');
  
	// Function to scroll to top on page load/refresh
	window.scrollTo(0, 0);
  
	// Toggle mobile menu
	hamburger.addEventListener('click', () => {
	  hamburger.classList.toggle('active');
	  mobileMenu.classList.toggle('active');
	});
  
	// Change header background on scroll
	document.addEventListener('scroll', () => {
	  var scrollPosition = window.scrollY;
	  if (scrollPosition > 250) {
		header.style.backgroundColor = '#29323c';
	  } else {
		header.style.backgroundColor = 'transparent';
	  }
	});
  
	// Close maintenance overlay
	closeBtn.addEventListener('click', () => {
	  maintenanceOverlay.style.display = 'none';
	});
  
	// Show maintenance overlay on button click
	btnsVisit.forEach(btn => {
	  btn.addEventListener('click', (event) => {
		event.preventDefault();
		const projectName = btn.getAttribute('data-project');
		maintenanceMessage.textContent = `Maintenance - Coming Soon for "${projectName}"`;
		maintenanceOverlay.style.display = 'flex';
	  });
	});
  
	// Show CV image on button click
	viewCvBtn.addEventListener('click', () => {
	  cvImage.style.display = 'block';
	});
  
	// Update hero section content with animation
	function animateHeroContent() {
	  let delay = 0;
	  heroSpans.forEach(span => {
		setTimeout(() => {
		  span.style.opacity = 1;
		}, delay);
		delay += 1000; // Adjust the delay between each line here (in milliseconds)
	  });
	}
  
	// Call the animation function when the page is loaded or refreshed
	animateHeroContent();
  
	// Add 'open' class to services section on DOM load
	servicesSection.classList.add('open');
  
	// Toggle mobile menu on menu item click
	menuItems.forEach(item => {
	  item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobileMenu.classList.toggle('active');
	  });
	});
  
  });
  