document.addEventListener('DOMContentLoaded', function() {
    // Initialize hero section slideshow
    initHeroSlideshow();
    
    // Initialize all timelines
    initializeTimelines();
    
    // Setup auto-scroll controls
    setupScrollControls();
    
    // Setup global auto-scroll toggle
    setupGlobalAutoScroll();
    
    // Setup back to top button
    setupBackToTop();
    
    // Setup theme toggle
    setupThemeToggle();
    
    // Setup modal
    setupModalClose();
});

// Initialize hero section slideshow
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-background .slide');
    let currentSlide = 0;
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Helper function to extract year from date string
function extractYear(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.getFullYear();
}

// Helper function to format date nicely
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Initialize all timelines
function initializeTimelines() {
    console.log('Initializing all timelines...');
    
    // Verify timeline data is available
    if (!universityTimelineData || universityTimelineData.length === 0) {
        console.error('University timeline data is missing or empty');
    } else {
        console.log(`University timeline data: ${universityTimelineData.length} events`);
    }
    
    // Verify campus data
    if (!campusTimelineData) {
        console.error('Campus timeline data is missing');
    } else {
        // Check each campus has data
        const campuses = ['vellore', 'chennai', 'bhopal', 'amaravati', 'bengaluru'];
        campuses.forEach(campus => {
            if (!campusTimelineData[campus] || campusTimelineData[campus].length === 0) {
                console.warn(`No timeline data for ${campus} campus`);
                
                // Create default data if missing
                if (!campusTimelineData[campus]) {
                    campusTimelineData[campus] = [];
                }
            } else {
                console.log(`${campus} campus: ${campusTimelineData[campus].length} events`);
            }
        });
    }
    
    // Clear existing timelines first
    document.querySelectorAll('.horizontal-timeline').forEach(el => {
        el.innerHTML = '';
    });
    
    // Render VIT University main timeline
    renderHorizontalTimeline('main-university', universityTimelineData);
    
    // Render campus timelines
    renderHorizontalTimeline('vellore-campus', campusTimelineData.vellore);
    renderHorizontalTimeline('chennai-campus', campusTimelineData.chennai);
    renderHorizontalTimeline('bhopal-campus', campusTimelineData.bhopal);
    renderHorizontalTimeline('amaravati-campus', campusTimelineData.amaravati);
    renderHorizontalTimeline('bangalore-campus', campusTimelineData.bengaluru);
}

// Function to render horizontal timeline
function renderHorizontalTimeline(containerId, timelineData) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container not found: ${containerId}`);
        return;
    }
    
    const horizontalTimeline = container.querySelector('.horizontal-timeline');
    if (!horizontalTimeline) {
        console.error(`Horizontal timeline not found in container: ${containerId}`);
        return;
    }
    
    console.log(`Rendering timeline for ${containerId} with ${timelineData ? timelineData.length : 0} events`);
    
    // Sort timelineData by date
    if (!timelineData || timelineData.length === 0) {
        console.warn(`No timeline data for ${containerId}`);
        return;
    }
    
    timelineData.sort((a, b) => new Date(a.date) - new Date(b.date));
    
    timelineData.forEach((event, index) => {
        console.log(`Creating timeline item for event ${index + 1}: ${event.title}`);
        const year = extractYear(event.date);
        
        // Create timeline item
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        // Create year circle at the intersection of timeline and card
        const yearCircle = document.createElement('div');
        yearCircle.className = 'year-circle';
        yearCircle.textContent = year;
        timelineItem.appendChild(yearCircle);
        
        // Create rays that connect from timeline to card (vertical)
        // Only create 1 ray for simpler, cleaner design
        const ray = document.createElement('div');
        ray.className = 'timeline-ray';
        timelineItem.appendChild(ray);
        
        // Create timeline card
        const card = document.createElement('div');
        card.className = 'timeline-card';
        
        // Make entire card clickable
        card.addEventListener('click', () => {
            openEventModal(event);
        });
        
        // Create card top with image
        const cardTop = document.createElement('div');
        cardTop.className = 'timeline-card-top';
        
        const cardImage = document.createElement('img');
        cardImage.className = 'timeline-card-image';
        cardImage.src = event.image || 'img/placeholder.jpg';
        cardImage.alt = event.title;
        cardTop.appendChild(cardImage);
        
        const cardDate = document.createElement('div');
        cardDate.className = 'timeline-card-date';
        cardDate.textContent = formatDate(event.date);
        cardTop.appendChild(cardDate);
        
        card.appendChild(cardTop);
        
        // Create card content
        const cardContent = document.createElement('div');
        cardContent.className = 'timeline-card-content';
        
        const cardTitle = document.createElement('h3');
        cardTitle.className = 'timeline-card-title';
        cardTitle.textContent = event.title;
        cardContent.appendChild(cardTitle);
        
        const cardDesc = document.createElement('p');
        cardDesc.className = 'timeline-card-desc';
        cardDesc.textContent = event.description;
        cardContent.appendChild(cardDesc);
        
        // Add key person if available
        if (event.keyFigure) {
            const cardPerson = document.createElement('div');
            cardPerson.className = 'timeline-card-person';
            
            const personImg = document.createElement('img');
            personImg.src = event.keyFigure.image || 'img/placeholder-person.jpg';
            personImg.alt = event.keyFigure.name;
            cardPerson.appendChild(personImg);
            
            const personInfo = document.createElement('div');
            personInfo.className = 'timeline-card-person-info';
            
            const personName = document.createElement('h4');
            personName.className = 'timeline-card-person-name';
            personName.textContent = event.keyFigure.name;
            personInfo.appendChild(personName);
            
            const personRole = document.createElement('p');
            personRole.className = 'timeline-card-person-role';
            personRole.textContent = event.keyFigure.role;
            personInfo.appendChild(personRole);
            
            cardPerson.appendChild(personInfo);
            cardContent.appendChild(cardPerson);
        }
        
        card.appendChild(cardContent);
        
        // Create card footer
        const cardFooter = document.createElement('div');
        cardFooter.className = 'timeline-card-footer';
        
        const cardSource = document.createElement('a');
        cardSource.className = 'timeline-card-source';
        cardSource.href = '#';
        cardSource.innerHTML = '<i class="fas fa-info-circle"></i> Source';
        cardSource.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openEventModal(event, 'source');
        });
        cardFooter.appendChild(cardSource);
        
        const cardActions = document.createElement('div');
        cardActions.className = 'timeline-card-actions';
        
        const expandBtn = document.createElement('button');
        expandBtn.className = 'timeline-card-action-btn';
        expandBtn.innerHTML = '<i class="fas fa-expand-alt"></i>';
        expandBtn.title = "View full details";
        expandBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openEventModal(event);
        });
        cardActions.appendChild(expandBtn);
        
        cardFooter.appendChild(cardActions);
        card.appendChild(cardFooter);
        
        // Add card to timeline item
        timelineItem.appendChild(card);
        
        // Add timeline item to horizontal timeline
        horizontalTimeline.appendChild(timelineItem);
    });
    
    console.log(`Finished rendering timeline for ${containerId}`);
}

// Setup auto-scroll controls for each timeline
function setupScrollControls() {
    document.querySelectorAll('.timeline-controls').forEach(control => {
        const container = control.closest('.campus-section').querySelector('.timeline-scroll-container');
        const autoScrollBtn = control.querySelector('.auto-scroll');
        const resetBtn = control.querySelector('.reset');
        let autoScrollInterval;
        
        // Store the container and its auto-scroll button in global array
        if (!window.timelineContainers) {
            window.timelineContainers = [];
        }
        
        window.timelineContainers.push({
            container,
            autoScrollBtn,
            resetBtn,
            autoScrollInterval: null,
            isScrolling: false
        });
        
        // Auto scroll button click
        autoScrollBtn?.addEventListener('click', function() {
            toggleAutoScroll(this);
        });
        
        // Reset button click
        resetBtn?.addEventListener('click', function() {
            resetTimeline(container);
            
            // Also stop auto scroll if it's running
            if (autoScrollBtn?.classList.contains('active')) {
                toggleAutoScroll(autoScrollBtn);
            }
        });
    });
}

// Function to toggle auto-scroll for a specific timeline
function toggleAutoScroll(button) {
    // Find the container object
    const containerObj = window.timelineContainers.find(item => 
        item.autoScrollBtn === button
    );
    
    if (!containerObj) return;
    
    if (button.classList.contains('active')) {
        // Stop auto scrolling
        clearInterval(containerObj.autoScrollInterval);
        button.innerHTML = '<i class="fas fa-play"></i> Auto Scroll';
        button.classList.remove('active');
        containerObj.isScrolling = false;
    } else {
        // Start auto scrolling
        button.innerHTML = '<i class="fas fa-pause"></i> Pause';
        button.classList.add('active');
        containerObj.isScrolling = true;
        
        containerObj.autoScrollInterval = setInterval(() => {
            containerObj.container.scrollLeft += 2;
            
            // If reached the end, reset
            if (containerObj.container.scrollLeft >= 
                containerObj.container.scrollWidth - containerObj.container.clientWidth) {
                containerObj.container.scrollLeft = 0;
            }
        }, 30);
    }
}

// Function to reset a timeline to the beginning
function resetTimeline(container) {
    container.scrollTo({
        left: 0,
        behavior: 'smooth'
    });
}

// Setup global auto-scroll toggle
function setupGlobalAutoScroll() {
    const globalToggle = document.querySelector('.global-auto-scroll');
    
    if (!globalToggle) return;
    
    // Auto-start all timelines on page load (as the button is active by default)
    setTimeout(() => {
        toggleAllTimelines(true);
    }, 1000);
    
    globalToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        
        // Toggle scrolling state for all timelines
        const shouldScroll = this.classList.contains('active');
        
        // Update icon
        if (shouldScroll) {
            this.innerHTML = '<i class="fas fa-play-circle"></i>';
        } else {
            this.innerHTML = '<i class="fas fa-pause-circle"></i>';
        }
        
        toggleAllTimelines(shouldScroll);
    });
}

// Function to toggle all timelines
function toggleAllTimelines(shouldScroll) {
    if (!window.timelineContainers) return;
    
    window.timelineContainers.forEach(containerObj => {
        // If current state is different from desired state, click the button
        if (containerObj.isScrolling !== shouldScroll && containerObj.autoScrollBtn) {
            toggleAutoScroll(containerObj.autoScrollBtn);
        }
    });
}

// Setup back to top button
function setupBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');
    
    if (backToTopBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top on click
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Open event modal with event details
function openEventModal(event, mode = 'full') {
    const modal = document.getElementById('event-modal');
    const modalBody = document.querySelector('.modal-body');
    
    if (mode === 'source') {
        // Display source information
        modalBody.innerHTML = `
            <h2 class="modal-title">Source Information</h2>
            <div class="modal-source-info">
                <p><strong>Event:</strong> ${event.title}</p>
                <p><strong>Date:</strong> ${formatDate(event.date)}</p>
                <p><strong>Source:</strong> ${event.source || 'Official VIT records and publications'}</p>
                ${event.keyFigure ? `<p><strong>Key Figure:</strong> ${event.keyFigure.name}, ${event.keyFigure.role}</p>` : ''}
                <p class="modal-disclaimer">All information and images are sourced from official VIT publications, press releases, and campus websites.</p>
            </div>
        `;
    } else {
        // Display full event details
        modalBody.innerHTML = `
            <div class="modal-date">${formatDate(event.date)}</div>
            <h2 class="modal-title">${event.title}</h2>
            <div class="modal-description">${event.fullDescription || event.description}</div>
        `;
        
        // Add image if available
        if (event.image) {
            modalBody.innerHTML += `<img src="${event.image}" alt="${event.title}" class="modal-image">`;
        } else {
            // If no image is provided, add a placeholder
            modalBody.innerHTML += `<img src="img/placeholder.jpg" alt="${event.title} (Placeholder)" class="modal-image">`;
        }
        
        // Add key figure if available
        if (event.keyFigure) {
            modalBody.innerHTML += `
                <div class="modal-key-figure">
                    <img src="${event.keyFigure.image || 'img/placeholder-person.jpg'}" alt="${event.keyFigure.name}">
                    <div class="modal-key-figure-info">
                        <h4>${event.keyFigure.name}</h4>
                        <p>${event.keyFigure.role}</p>
                    </div>
                </div>
            `;
        }
        
        // Add source information if available
        if (event.source) {
            modalBody.innerHTML += `
                <div class="modal-source">
                    <h3>Source</h3>
                    <p>${event.source}</p>
                </div>
            `;
        }
    }
    
    // Display modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling while modal is open
}

// Setup modal
function setupModalClose() {
    const modal = document.getElementById('event-modal');
    const closeBtn = document.querySelector('.close-modal');
    
    if (!modal || !closeBtn) {
        console.error('Modal elements not found');
        return;
    }
    
    // Close modal when clicking the close button
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
}

// Setup theme toggle
function setupThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-theme');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
    
    // Toggle theme
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('light-theme');
        
        // Update icon
        if (document.documentElement.classList.contains('light-theme')) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });
} 