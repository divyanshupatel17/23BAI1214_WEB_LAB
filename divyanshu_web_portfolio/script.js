document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const musicToggle = document.getElementById('music-toggle');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const body = document.body;
    const modal = document.getElementById('pdfModal');
    const closeBtn = document.querySelector('.close');
    const pdfContainer = document.getElementById('pdfContainer');
    const musicPlayer = document.getElementById('musicPlayer');
    const aboutCard = document.getElementById('aboutCard');
    const navbar = document.querySelector('nav');
    const header = document.querySelector('header');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.checked = true;
    }

    function applyNavbarStyles() {
        window.scrollY > 10 
            ? navbar.classList.add('scrolled') 
            : navbar.classList.remove('scrolled');
    }

    window.addEventListener('scroll', applyNavbarStyles);
    applyNavbarStyles();

    function animateTextElements() {
        const animElements = document.querySelectorAll('.animate-text');
        animElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, 100 * index);
        });
    }

    themeToggle.addEventListener('change', function() {
        body.classList.toggle('dark-theme');
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    musicToggle.addEventListener('change', function() {
        if (this.checked) {
            musicPlayer.play();
        } else {
            musicPlayer.pause();
        }
    });

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        this.classList.toggle('active');
        navbar.classList.toggle('menu-open');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            menuToggle.classList.remove('active');
            navbar.classList.remove('menu-open');
        });
    });

    aboutCard.addEventListener('mousemove', function(e) {
        if (window.innerWidth <= 768) return;
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const angleX = (y - centerY) / 20;
        const angleY = (centerX - x) / 20;
        this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });

    aboutCard.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    });

    function handleCardHover() {
        if (window.innerWidth <= 768) return;
        
        document.querySelectorAll('.detail-card, .stat-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.classList.add('hovered');
            });
            card.addEventListener('mouseleave', function() {
                this.classList.remove('hovered');
            });
        });
    }

    function truncateText() {
        document.querySelectorAll('.truncate-text').forEach(element => {
            const text = element.textContent;
            if (text.length > 25 && window.innerWidth <= 768) {
                element.setAttribute('title', text);
                element.textContent = text.substring(0, 25) + '...';
            } else {
                element.textContent = text;
            }
        });
    }

    function ensureEmailFit() {
        const emailElements = document.querySelectorAll('.email-container');
        emailElements.forEach(el => {
            const email = el.textContent;
            el.style.overflowWrap = 'break-word';
            el.style.wordBreak = 'break-all';
            el.style.maxWidth = '100%';
            el.style.display = 'inline-block';
        });
    }

    function populateStudentDetails() {
        document.getElementById('studentName').textContent = studentData.name;
        document.getElementById('regNo').textContent = studentData.regNo;
        document.getElementById('courseName').textContent = studentData.courseTitle;
        document.getElementById('labSlot').textContent = studentData.labSlot;
        document.getElementById('facultyName').textContent = studentData.facultyName;
        document.getElementById('institute').textContent = studentData.institute;
        
        const emailEl = document.getElementById('email');
        emailEl.textContent = studentData.email;
        emailEl.classList.add('email-container', 'truncate-text');
    }

    function updateDashboardStats() {
        document.getElementById('totalExercises').textContent = exercisesData.length;
        document.getElementById('totalTasks').textContent = exercisesData.reduce((sum, exercise) => sum + exercise.tasks.length, 0);
        document.getElementById('lastUpdated').textContent = new Date(studentData.lastUpdated).toLocaleDateString();
        document.getElementById('footerLastUpdated').textContent = new Date(studentData.lastUpdated).toLocaleDateString();
    }

    function createExerciseAccordions() {
        const accordionContainer = document.getElementById('exerciseAccordion');
        
        exercisesData.forEach(exercise => {
            const accordionItem = document.createElement('div');
            accordionItem.className = 'exercise-card';
            
            const header = document.createElement('div');
            header.className = 'exercise-header';
            header.innerHTML = `
                <h3>${exercise.title}</h3>
                <span>Submitted: ${new Date(exercise.submissionDate).toLocaleDateString()}</span>
                <div class="toggle-icon"><i class="fas fa-chevron-down"></i></div>
            `;
            
            const content = document.createElement('div');
            content.className = 'exercise-content';
            
            const contentInner = document.createElement('div');
            contentInner.className = 'content-inner';
            
            const reportLink = document.createElement('div');
            reportLink.className = 'report-link';
            reportLink.innerHTML = `
                <a href="#" data-pdf="${exercise.reportUrl}">View Exercise Report</a>
            `;
            
            reportLink.querySelector('a').addEventListener('click', function(e) {
                e.preventDefault();
                openPdfModal(this.getAttribute('data-pdf'));
            });
            
            const table = document.createElement('table');
            table.className = 'tasks-table';
            
            const thead = document.createElement('thead');
            thead.innerHTML = `
                <tr>
                    <th>Task No.</th>
                    <th>Title</th>
                    <th>Demo</th>
                    <th>Code</th>
                </tr>
            `;
            
            const tbody = document.createElement('tbody');
            exercise.tasks.forEach(task => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${task.taskNo}</td>
                    <td class="task-title truncate-text">${task.title}</td>
                    <td><a href="${task.demoUrl}" target="_blank" class="demo-link">View Demo</a></td>
                    <td><a href="${task.codeUrl}" target="_blank" class="code-link">View Code</a></td>
                `;
                tbody.appendChild(tr);
            });
            
            table.appendChild(thead);
            table.appendChild(tbody);
            
            contentInner.appendChild(reportLink);
            contentInner.appendChild(table);
            content.appendChild(contentInner);
            
            accordionItem.appendChild(header);
            accordionItem.appendChild(content);
            
            header.addEventListener('click', () => {
                const isActive = content.classList.contains('active');
                
                document.querySelectorAll('.exercise-content').forEach(item => {
                    item.classList.remove('active');
                    item.previousElementSibling.querySelector('.toggle-icon i').classList.remove('fa-chevron-up');
                    item.previousElementSibling.querySelector('.toggle-icon i').classList.add('fa-chevron-down');
                });
                
                if (!isActive) {
                    content.classList.add('active');
                    header.querySelector('.toggle-icon i').classList.remove('fa-chevron-down');
                    header.querySelector('.toggle-icon i').classList.add('fa-chevron-up');
                }
            });
            
            accordionContainer.appendChild(accordionItem);
        });
    }

    function createProjectCards() {
        const projectsContainer = document.getElementById('projectsContainer');
        
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            projectCard.style.position = 'relative';
            
            // Add project tag (JavaScript or React)
            const tag = project.tags[0];
            const tagEl = document.createElement('div');
            tagEl.className = 'project-tag';
            tagEl.textContent = tag;
            projectCard.appendChild(tagEl);
            
            // Project content
            projectCard.innerHTML += `
                <img src="${project.imageUrl}" alt="${project.title}" class="project-image">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                    <div class="project-links" style="margin-top: auto;">
                        <a href="${project.liveUrl}" target="_blank" class="project-link">View Live</a>
                        <a href="${project.codeUrl}" target="_blank" class="project-link project-details-btn">View Code</a>
                    </div>
                </div>
            `;
            
            projectsContainer.appendChild(projectCard);
        });
    }

    function populateContactSection() {
        const socialLinksContainer = document.getElementById('socialLinks');
        const contactDetailsContainer = document.getElementById('contactDetails');
        
        contactData.socialLinks.forEach(link => {
            const socialLink = document.createElement('a');
            socialLink.href = link.url;
            socialLink.target = '_blank';
            socialLink.className = 'social-icon';
            socialLink.innerHTML = `<i class="${link.icon}"></i>`;
            socialLinksContainer.appendChild(socialLink);
        });
        
        contactData.contactDetails.forEach(detail => {
            const contactItem = document.createElement('div');
            contactItem.className = 'contact-item';
            
            let valueClass = '';
            if (detail.title === 'Email') {
                valueClass = 'email-container truncate-text';
            }
            
            contactItem.innerHTML = `
                <i class="${detail.icon}"></i>
                <div>
                    <h4>${detail.title}</h4>
                    <p class="${valueClass}">${detail.value}</p>
                </div>
            `;
            contactDetailsContainer.appendChild(contactItem);
        });
        
        document.getElementById('footerName').textContent = contactData.footer.name;
        document.getElementById('footerYear').textContent = contactData.footer.year;
    }

    function openPdfModal(pdfUrl) {
        pdfContainer.innerHTML = `<embed src="${pdfUrl}" type="application/pdf" width="100%" height="100%">`;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    function initializeAnimations() {
        document.querySelectorAll('section').forEach(section => {
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });
            
            observer.observe(section);
        });
        
        setTimeout(animateTextElements, 300);
    }
    
    function handleWindowResize() {
        truncateText();
        ensureEmailFit();
    }
    
    window.addEventListener('resize', handleWindowResize);
    
    populateStudentDetails();
    updateDashboardStats();
    createExerciseAccordions();
    createProjectCards();
    populateContactSection();
    handleCardHover();
    truncateText();
    ensureEmailFit();
    initializeAnimations();
});