// Import API configuration
import { GITHUB_TOKEN, API_CONFIG } from './config.js';

// Variable to store selected user
let currentUser = null;

// Default username to load on startup
const DEFAULT_USERNAME = 'divyanshupatel17';

// DOM Elements
const usernameInput = document.getElementById('username-input');
const searchBtn = document.getElementById('search-btn');
const statsContainer = document.getElementById('stats-container');
const loadingOverlay = document.getElementById('loading-overlay');
const errorContainer = document.getElementById('error-container');
const errorMessageText = document.getElementById('error-message-text');
const errorCloseBtn = document.getElementById('error-close-btn');
const rateLimitElement = document.getElementById('rate-limit');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.querySelector('.sidebar');
const mainUserAvatar = document.getElementById('main-user-avatar');
const userProfileContent = document.getElementById('user-profile-content');
const contributionChart = document.getElementById('contribution-chart');
const languagesChart = document.getElementById('languages-chart');
const pinnedRepos = document.getElementById('pinned-repos');
const statsOverviewContent = document.getElementById('stats-overview-content');
const activityTimeline = document.getElementById('activity-timeline');
const topRepos = document.getElementById('top-repos');
const starsStatElement = document.getElementById('stars-stat');
const forksStatElement = document.getElementById('forks-stat');
const followersStatElement = document.getElementById('followers-stat');
const followingStatElement = document.getElementById('following-stat');

// Color palette for charts
const chartColors = [
    '#58a6ff', // primary blue
    '#39d353', // green
    '#f0883e', // orange
    '#8957e5', // purple
    '#f85149', // red
    '#3fb950', // light green
];

// Contact Data
const contactData = {
    socialLinks: [
        {
            icon: "fab fa-instagram",
            url: "https://www.instagram.com/patel_divyanshu_"
        },
        {
            icon: "fab fa-linkedin-in",
            url: "https://www.linkedin.com/in/patel-divyanshu"
        },
        {
            icon: "fab fa-github",
            url: "https://github.com/divyanshupatel17"
        }
    ],
    contactDetails: [
        {
            icon: "fas fa-envelope",
            title: "Email",
            value: "divyanshu.patel2023@vitstudent.ac.in"
        },
        {
            icon: "fas fa-map-marker-alt",
            title: "Location",
            value: "VIT Chennai, Tamil Nadu, India"
        },
        {
            icon: "fas fa-phone",
            title: "Phone",
            value: "+91 9301503581"
        }
    ],
    footer: {
        name: "Divyanshu Patel",
        year: "2025"
    }
};

// GitHub API base URL
const API_BASE_URL = 'https://api.github.com';

// Headers for API calls
const API_HEADERS = {
    'Accept': 'application/vnd.github.v3+json',
    'Authorization': `token ${GITHUB_TOKEN}`
};

// GitHub API endpoints
const API_ENDPOINTS = {
    user: username => `${API_BASE_URL}/users/${username}`,
    repos: username => `${API_BASE_URL}/users/${username}/repos?per_page=100&sort=updated`,
    events: username => `${API_BASE_URL}/users/${username}/events?per_page=30`,
    commits: (username, repo) => `${API_BASE_URL}/repos/${username}/${repo}/stats/participation`,
    contributionStats: (username, repo) => `${API_BASE_URL}/repos/${username}/${repo}/stats/contributors`
};

// Chart animation options - reduce durations to prevent excessive animations
const chartAnimationOptions = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
        duration: 1000, // Reduced duration
        easing: 'easeOutQuad'
    },
    plugins: {
        legend: {
            labels: {
                color: '#f0f6fc',
                font: {
                    size: 11 // Smaller font for legends
                }
            }
        }
    }
};

// Initialize the app
function init() {
    // Event listeners
    searchBtn.addEventListener('click', handleSearch);
    errorCloseBtn.addEventListener('click', hideError);
    
    // Enter key for search
    usernameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });
    
    // Set default username
    usernameInput.value = DEFAULT_USERNAME;
    
    // Toggle sidebar
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
        });
    }
    
    // Setup sidebar navigation
    setupSidebarNavigation();
    
    // Animate the developer info with controlled timing
    setupDeveloperInfoAnimation();
    
    // Set footer data from contactData
    updateFooterInfo();
    
    // Stop infinite pulsing after 5 seconds for better performance
    setTimeout(() => {
        const pulsingElements = document.querySelectorAll('.animate__infinite');
        pulsingElements.forEach(element => {
            element.classList.remove('animate__infinite');
        });
    }, 5000);
    
    // Check rate limit on load
    checkRateLimit();
    
    // Automatically load the default user data
    setTimeout(() => {
        handleSearch();
    }, 1000);
}

// Setup animations for developer info
function setupDeveloperInfoAnimation() {
    const developerInfo = document.querySelector('.developer-info');
    const devInfoWrapper = document.querySelector('.dev-info-wrapper');
    const devName = document.querySelector('.dev-name');
    const devSocialLinks = document.querySelectorAll('.dev-social-link');
    
    // Set up initial animations with staggered timing
    if (developerInfo) {
        // Add entrance animation
        setTimeout(() => {
            developerInfo.style.opacity = "1";
        }, 500);
    }
    
    // Add hover effect for the dev info wrapper in footer
    if (devInfoWrapper) {
        devInfoWrapper.addEventListener('mouseenter', () => {
            devName.classList.add('animate__animated', 'animate__pulse');
        });
        
        devInfoWrapper.addEventListener('mouseleave', () => {
            devName.classList.remove('animate__animated', 'animate__pulse');
        });
    }
    
    // Add hover animations for social links
    if (devSocialLinks.length > 0) {
        devSocialLinks.forEach((link, index) => {
            link.addEventListener('mouseenter', () => {
                link.classList.add('animate__animated', 'animate__heartBeat');
            });
            
            link.addEventListener('mouseleave', () => {
                link.classList.remove('animate__animated', 'animate__heartBeat');
            });
        });
    }
}

// Update footer info with contact data
function updateFooterInfo() {
    const footerName = document.querySelector('.footer-name');
    const copyright = document.querySelector('.copyright');
    
    if (footerName && copyright && contactData.footer) {
        footerName.textContent = contactData.footer.name;
        copyright.textContent = `© ${contactData.footer.year} All Rights Reserved`;
    }
}

// Show loading overlay
function showLoading() {
    loadingOverlay.classList.add('active');
}

// Hide loading overlay
function hideLoading() {
    loadingOverlay.classList.remove('active');
}

// Show error message
function showError(message) {
    errorMessageText.textContent = message;
    errorContainer.classList.add('active');
}

// Hide error message
function hideError() {
    errorContainer.classList.remove('active');
}

// Check GitHub API rate limit
async function checkRateLimit() {
    try {
        const response = await fetch(`${API_BASE_URL}/rate_limit`, {
            headers: API_HEADERS
        });
        const data = await response.json();
        
        if (data.rate) {
            const { remaining, limit, reset } = data.rate;
            const resetTime = new Date(reset * 1000).toLocaleTimeString();
            
            rateLimitElement.textContent = `API Rate Limit: ${remaining}/${limit} | Resets at ${resetTime} | Authentication Active ✓`;
        }
    } catch (error) {
        console.error('Rate limit check failed:', error);
        rateLimitElement.textContent = 'Could not check API rate limit. Authentication may not be working.';
    }
}

// Handle search for a single user
async function handleSearch() {
    const username = usernameInput.value.trim();
    
    if (!username) {
        showError('Please enter a GitHub username');
        return;
    }
    
    showLoading();
    
    try {
        // Reset containers
        statsContainer.innerHTML = '';
        userProfileContent.innerHTML = '';
        contributionChart.innerHTML = '';
        languagesChart.innerHTML = '';
        pinnedRepos.innerHTML = '';
        topRepos.innerHTML = '';
        activityTimeline.innerHTML = '';
        
        // Fetch user data
        const userData = await fetchUser(username);
        
        // Update sidebar avatar
        if (mainUserAvatar && userData.avatar_url) {
            mainUserAvatar.src = userData.avatar_url;
        }
        
        // Create user stats card
        createUserStatsCard(userData);
        
        // Update stats overview
        updateStatsOverview(userData);
        
        // Fetch repositories for user
        const repos = await fetchUserRepos(username);
        
        // Limit the number of repositories to prevent performance issues
        const limitedRepos = repos.slice(0, 50);
        
        // Create top repositories
        createTopReposSection(limitedRepos.slice(0, 5));
        
        // Fetch user events for activity timeline
        const events = await fetchUserEvents(username);
        createActivityTimeline(events);
        
        // Create language chart
        createLanguageChart(username, limitedRepos);
        
        // Create commits activity chart
        createCommitActivityChart(username, limitedRepos);
        
        // Create pinned repositories
        createPinnedReposCards(username, limitedRepos.slice(0, 6));
        
        // Display success message briefly
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `<i class="fas fa-check-circle"></i><p>Successfully loaded data for ${username}</p>`;
        document.body.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            successMessage.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(successMessage);
            }, 500);
        }, 2000);
        
        // Check rate limit after operations
        checkRateLimit();
    } catch (error) {
        showError(error.message || 'An error occurred while fetching data');
        console.error('API Error:', error);
    } finally {
        hideLoading();
    }
}

// Fetch user data from GitHub API
async function fetchUser(username) {
    const response = await fetch(`${API_BASE_URL}/users/${username}`, {
        headers: API_HEADERS
    });
    
    if (!response.ok) {
        if (response.status === 404) {
            throw new Error(`User '${username}' not found`);
        } else if (response.status === 403) {
            throw new Error('API rate limit exceeded. Please try again later.');
        } else {
            throw new Error(`Failed to fetch user data: ${response.statusText}`);
        }
    }
    
    return response.json();
}

// Fetch user repositories from GitHub API
async function fetchUserRepos(username) {
    let page = 1;
    const perPage = 100;
    let allRepos = [];
    let hasMorePages = true;
    
    // Limit to max 2 pages (200 repos) to prevent excessive requests
    const maxPages = 2;
    
    while (hasMorePages && page <= maxPages) {
        const response = await fetch(
            `${API_BASE_URL}/users/${username}/repos?per_page=${perPage}&page=${page}&sort=updated`,
            { headers: API_HEADERS }
        );
        
        if (!response.ok) {
            if (response.status === 403) {
                throw new Error('API rate limit exceeded. Please try again later.');
            } else {
                throw new Error(`Failed to fetch repositories: ${response.statusText}`);
            }
        }
        
        const repos = await response.json();
        allRepos = allRepos.concat(repos);
        
        // Check if there are more pages
        if (repos.length < perPage) {
            hasMorePages = false;
        } else {
            page++;
        }
    }
    
    return allRepos;
}

// Create user stats card with enhanced profile view matching GitHub's style
function createUserStatsCard(userData) {
    // Update the user profile card in the dashboard layout
    userProfileContent.innerHTML = '';
    
    const hasName = userData.name !== null && userData.name !== undefined;
    const hasBio = userData.bio !== null && userData.bio !== undefined;
    const hasCompany = userData.company !== null && userData.company !== undefined;
    const hasLocation = userData.location !== null && userData.location !== undefined;
    const hasEmail = userData.email !== null && userData.email !== undefined;
    const hasBlog = userData.blog && userData.blog.trim() !== '';
    
    const profileHTML = `
        <div class="user-profile">
            <div class="user-avatar-wrapper">
                <img src="${userData.avatar_url}" alt="${userData.login}" class="user-avatar">
            </div>
            <div class="user-info">
                ${hasName ? `<h2 class="user-name">${userData.name}</h2>` : ''}
                <p class="user-login">@${userData.login}</p>
                ${hasBio ? `<p class="user-bio">${userData.bio}</p>` : ''}
                
                <div class="user-details">
                    ${hasCompany ? `
                        <div class="user-detail">
                            <i class="fas fa-building"></i>
                            <span>${userData.company}</span>
                        </div>
                    ` : ''}
                    
                    ${hasLocation ? `
                        <div class="user-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <span>${userData.location}</span>
                        </div>
                    ` : ''}
                    
                    ${hasEmail ? `
                        <div class="user-detail">
                            <i class="fas fa-envelope"></i>
                            <a href="mailto:${userData.email}">${userData.email}</a>
                        </div>
                    ` : ''}
                    
                    ${hasBlog ? `
                        <div class="user-detail">
                            <i class="fas fa-link"></i>
                            <a href="${userData.blog}" target="_blank">${userData.blog.replace(/^https?:\/\//, '')}</a>
                        </div>
                    ` : ''}
                    
                    <div class="user-detail">
                        <i class="fas fa-calendar-alt"></i>
                        <span>Joined ${new Date(userData.created_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                </div>
                
                <div class="user-stats">
                    <div class="stat-item">
                        <i class="fas fa-users"></i>
                        <span>${userData.followers}</span>
                        <span class="stat-label">Followers</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-user-friends"></i>
                        <span>${userData.following}</span>
                        <span class="stat-label">Following</span>
                    </div>
                    <div class="stat-item">
                        <i class="fas fa-code-branch"></i>
                        <span>${userData.public_repos}</span>
                        <span class="stat-label">Repos</span>
                    </div>
                </div>
                
                <div class="user-links">
                    <a href="${userData.html_url}" target="_blank" class="user-link">
                        <i class="fas fa-external-link-alt"></i> View on GitHub
                    </a>
                </div>
            </div>
        </div>
    `;
    
    userProfileContent.innerHTML = profileHTML;
    
    // Legacy stats card for backward compatibility
    statsContainer.innerHTML = `
        <div class="user-card">
            <div class="user-header">
                <img src="${userData.avatar_url}" alt="Profile picture" class="user-avatar">
                <div class="user-info">
                    <h2>${hasName ? userData.name : userData.login}</h2>
                    <p class="username">@${userData.login}</p>
                    ${hasBio ? `<p class="bio">${userData.bio}</p>` : ''}
                </div>
            </div>
            <div class="user-details">
                ${hasLocation ? `
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${userData.location}</span>
                    </div>
                ` : ''}
                ${hasEmail ? `
                    <div class="detail-item">
                        <i class="fas fa-envelope"></i>
                        <span>${userData.email}</span>
                    </div>
                ` : ''}
                ${hasBlog ? `
                    <div class="detail-item">
                        <i class="fas fa-link"></i>
                        <a href="${userData.blog}" target="_blank">${userData.blog}</a>
                    </div>
                ` : ''}
                <div class="detail-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span>Joined ${new Date(userData.created_at).toLocaleDateString()}</span>
                </div>
            </div>
            <div class="user-stats">
                <div class="stat-item">
                    <h3>${userData.public_repos}</h3>
                    <p>Repositories</p>
                </div>
                <div class="stat-item">
                    <h3>${userData.followers}</h3>
                    <p>Followers</p>
                </div>
                <div class="stat-item">
                    <h3>${userData.following}</h3>
                    <p>Following</p>
                </div>
            </div>
            <a href="${userData.html_url}" target="_blank" class="github-link">View on GitHub</a>
        </div>
    `;
}

// Create language chart with interactive elements
async function createLanguageChart(username, repos) {
    try {
        // Build a more detailed language breakdown
        const languageData = {};
        const languageColors = {
            JavaScript: '#f1e05a',
            TypeScript: '#2b7489',
            HTML: '#e34c26',
            CSS: '#563d7c',
            Python: '#3572A5',
            Java: '#b07219',
            'C++': '#f34b7d',
            C: '#555555',
            'C#': '#178600',
            PHP: '#4F5D95',
            Ruby: '#701516',
            Go: '#00ADD8',
            Swift: '#ffac45',
            Kotlin: '#F18E33',
            Rust: '#dea584',
            // Default colors for other languages
            Other: '#8b949e'
        };
        
        // Get language breakdown with byte counts
        await Promise.all(repos.slice(0, 15).map(async repo => { // Increased from 10 to 15 repos
            if (!repo.language) return;
            
            try {
                const response = await fetch(`${API_BASE_URL}/repos/${username}/${repo.name}/languages`, {
                    headers: API_HEADERS
                });
                
                if (!response.ok) return;
                
                const languages = await response.json();
                
                // Add languages to the total count
                Object.entries(languages).forEach(([lang, bytes]) => {
                    if (!languageData[lang]) {
                        languageData[lang] = {
                            bytes: 0,
                            count: 0,
                            repos: []
                        };
                    }
                    
                    languageData[lang].bytes += bytes;
                    languageData[lang].count++;
                    languageData[lang].repos.push(repo.name);
                });
            } catch (err) {
                console.warn(`Error fetching languages for ${repo.name}:`, err);
            }
        }));
        
        // Check if we have language data
        if (Object.keys(languageData).length === 0) {
            languagesChart.innerHTML = '<div class="placeholder-message"><i class="fas fa-code"></i><h3>No language data available</h3></div>';
            return;
        }
        
        // Sort languages by byte count
        const sortedLanguages = Object.entries(languageData)
            .sort((a, b) => b[1].bytes - a[1].bytes)
            .slice(0, 8); // Limit to top 8 languages
            
        const totalBytes = sortedLanguages.reduce((sum, [_, data]) => sum + data.bytes, 0);
        
        // Prepare for chart
        const labels = sortedLanguages.map(([lang, _]) => lang);
        const data = sortedLanguages.map(([_, data]) => data.bytes);
        const percentages = sortedLanguages.map(([_, data]) => ((data.bytes / totalBytes) * 100).toFixed(1));
        
        // Create chart colors array with language-specific colors
        const colors = labels.map(lang => languageColors[lang] || languageColors.Other);
        
        // Clear previous chart content
        languagesChart.innerHTML = `<h3 class="card-title"><i class="fas fa-code"></i> Languages</h3>`;
        
        // Create language summary and donut chart
        const languagesSummary = document.createElement('div');
        languagesSummary.className = 'languages-summary';
        
        // Create canvas for chart
        const canvasContainer = document.createElement('div');
        canvasContainer.className = 'chart-container';
        
        const canvas = document.createElement('canvas');
        canvas.id = 'language-chart';
        canvas.height = 200;
        canvasContainer.appendChild(canvas);
        
        // Create language list
        const languageList = document.createElement('div');
        languageList.className = 'language-list';
        
        sortedLanguages.forEach(([lang, data], index) => {
            const percentage = percentages[index];
            const langColor = colors[index];
            
            const repoCount = data.repos.length;
            const formattedBytes = formatBytes(data.bytes);
            
            languageList.innerHTML += `
                <div class="language-item" title="${repoCount} repos, ${formattedBytes}">
                    <div class="language-color" style="background-color: ${langColor}"></div>
                    <div class="language-name">${lang}</div>
                    <div class="language-percentage">${percentage}%</div>
                </div>
            `;
        });
        
        // Append everything to the languages chart
        languagesSummary.appendChild(canvasContainer);
        languagesSummary.appendChild(languageList);
        languagesChart.appendChild(languagesSummary);
        
        // Create language chart using Chart.js
        new Chart(canvas, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: data,
                    backgroundColor: colors,
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '70%',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const label = context.label || '';
                                const lang = sortedLanguages[context.dataIndex];
                                const percentage = percentages[context.dataIndex];
                                const repoCount = lang[1].repos.length;
                                const bytes = formatBytes(lang[1].bytes);
                                return [
                                    `${label}: ${percentage}%`,
                                    `${repoCount} repositories`,
                                    `${bytes} of code`
                                ];
                            }
                        }
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error creating language chart:', error);
        languagesChart.innerHTML = '<div class="error-message"><i class="fas fa-exclamation-circle"></i><p>Could not create language chart</p></div>';
    }
}

// Helper to format bytes to human-readable format
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Create contribution graph (similar to GitHub's contribution calendar)
async function createCommitActivityChart(username, repos) {
    try {
        // Get current date and calculate dates for the past year
        const today = new Date();
        const oneYearAgo = new Date();
        oneYearAgo.setFullYear(today.getFullYear() - 1);
        
        // Create an array to track contributions for each day
        const days = 365;
        const contributionData = Array(days).fill(0);
        
        // Get contribution data from repositories
        // We'll use a combination of commit activity and events
        // For a more accurate representation, we'd need to actually parse the contribution calendar from GitHub
        
        // First, get events which contain recent activity
        let events = await fetchUserEvents(username);
        events.forEach(event => {
            if (event.type === 'PushEvent' && event.created_at) {
                const date = new Date(event.created_at);
                if (date >= oneYearAgo) {
                    const dayIndex = Math.floor((today - date) / (1000 * 60 * 60 * 24));
                    if (dayIndex >= 0 && dayIndex < days) {
                        if (event.payload && event.payload.commits) {
                            contributionData[dayIndex] += event.payload.commits.length;
                        } else {
                            contributionData[dayIndex] += 1;
                        }
                    }
                }
            }
        });
        
        // Then try to get commit stats for top repos
        const popularRepos = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 5);
        
        await Promise.all(popularRepos.map(async repo => {
            try {
                const response = await fetch(API_ENDPOINTS.commits(username, repo.name), {
                    headers: API_HEADERS
                });
                
                if (!response.ok) return;
                
                const commitData = await response.json();
                
                // Add weekly commit data if available
                if (commitData && commitData.owner) {
                    // Last 52 weeks of commit data
                    const weeklyData = commitData.owner;
                    weeklyData.slice(-52).forEach((commits, weekIndex) => {
                        // Distribute commits evenly across the week
                        const startDay = Math.min(days - 1, Math.max(0, days - 1 - ((weekIndex + 1) * 7)));
                        const endDay = Math.min(days - 1, Math.max(0, days - 1 - (weekIndex * 7)));
                        
                        // Split commits across days in the week
                        const commitsPerDay = commits / 7;
                        for (let day = startDay; day <= endDay; day++) {
                            contributionData[day] += commitsPerDay;
                        }
                    });
                }
            } catch (error) {
                console.warn(`Error fetching commit data for ${repo.name}:`, error);
            }
        }));
        
        // Round contribution values
        contributionData.forEach((val, i) => {
            contributionData[i] = Math.round(val);
        });
        
        // Create GitHub-style contribution chart
        const contributionHTML = createContributionCalendar(contributionData);
        contributionChart.innerHTML = contributionHTML;
        
        // Add contribution stats summary
        const totalContributions = contributionData.reduce((sum, val) => sum + val, 0);
        
        // Find the longest streak of days with contributions
        let currentStreak = 0;
        let longestStreak = 0;
        
        contributionData.slice().reverse().forEach(val => {
            if (val > 0) {
                currentStreak++;
                if (currentStreak > longestStreak) {
                    longestStreak = currentStreak;
                }
            } else {
                currentStreak = 0;
            }
        });
        
        // Add stats below the calendar
        const statsDiv = document.createElement('div');
        statsDiv.className = 'contribution-stats';
        statsDiv.innerHTML = `
            <div class="stat-box">
                <h3>${totalContributions}</h3>
                <p>Contributions in the last year</p>
            </div>
            <div class="stat-box">
                <h3>${longestStreak}</h3>
                <p>Longest streak</p>
            </div>
            <div class="stat-box">
                <h3>${currentStreak}</h3>
                <p>Current streak</p>
            </div>
        `;
        
        contributionChart.appendChild(statsDiv);
    } catch (error) {
        console.error('Error creating contribution chart:', error);
        contributionChart.innerHTML = '<div class="error-message"><i class="fas fa-exclamation-circle"></i><p>Could not create contribution chart</p></div>';
    }
}

// Helper function to create GitHub-style contribution calendar
function createContributionCalendar(contributionData) {
    // Calculate the max contribution to determine color intensity
    const maxContribution = Math.max(...contributionData);
    
    // Determine color level thresholds
    const levels = 5; // 0, 1, 2, 3, 4 (no contributions to highest level)
    const thresholds = [];
    
    // Set reasonable thresholds
    if (maxContribution > 0) {
        // A nice logarithmic scale to accommodate various contribution levels
        for (let i = 1; i < levels; i++) {
            thresholds.push(Math.ceil(maxContribution * (Math.log(i) / Math.log(levels))));
        }
        // Add a high threshold for the most intense color
        thresholds.push(maxContribution);
    } else {
        // Default thresholds if no contributions
        thresholds.push(1, 2, 4, 8);
    }
    
    // Helper function to get CSS class based on contribution count
    function getContributionClass(count) {
        if (count === 0) return 'contribution-level-0';
        for (let i = 0; i < thresholds.length; i++) {
            if (count <= thresholds[i]) {
                return `contribution-level-${i + 1}`;
            }
        }
        return `contribution-level-${levels}`;
    }
    
    // Create month labels
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const today = new Date();
    const monthLabels = [];
    
    for (let i = 12; i >= 0; i--) {
        const date = new Date();
        date.setMonth(today.getMonth() - i);
        monthLabels.push(months[date.getMonth()]);
    }
    
    // Filter unique month labels (we might have duplicates)
    const uniqueMonthLabels = [...new Set(monthLabels)];
    
    // Create weekday labels
    const weekdays = ['', 'Mon', '', 'Wed', '', 'Fri', ''];
    
    // Build the calendar HTML
    let calendarHTML = `
        <div class="contribution-calendar">
            <div class="calendar-graph">
                <div class="months-wrapper">
                    ${uniqueMonthLabels.map(month => `<div class="month-label">${month}</div>`).join('')}
                </div>
                <div class="calendar-wrapper">
                    <div class="weekdays">
                        ${weekdays.map(day => `<div class="weekday-label">${day}</div>`).join('')}
                    </div>
                    <div class="days-grid">
    `;
    
    // Add contribution cells
    // GitHub's layout is 7 days per column (weekdays) and roughly 53 weeks per row
    // We'll go with a standard 7x53 grid for simplicity
    
    // Calculate the starting position to create a complete 7x53 grid
    // We want the last cell to be today
    const totalDays = contributionData.length;
    const totalCells = 7 * 53; // 7 days * 53 weeks
    const offset = totalCells - totalDays;
    
    // Create empty cells for offset
    for (let i = 0; i < offset; i++) {
        calendarHTML += `<div class="contribution-cell contribution-level-0" title="No contributions"></div>`;
    }
    
    // Create contribution cells
    for (let i = 0; i < totalDays; i++) {
        const dataIndex = i;
        const count = contributionData[dataIndex];
        const cellClass = getContributionClass(count);
        
        // Get date for this cell
        const cellDate = new Date();
        cellDate.setDate(today.getDate() - (totalDays - 1 - i));
        const dateString = cellDate.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric', 
            year: 'numeric' 
        });
        
        calendarHTML += `
            <div class="contribution-cell ${cellClass}" 
                 title="${count} contribution${count !== 1 ? 's' : ''} on ${dateString}">
            </div>
        `;
    }
    
    calendarHTML += `
                    </div>
                </div>
            </div>
            <div class="contribution-legend">
                <div class="legend-label">Less</div>
                <div class="legend-cells">
                    <div class="contribution-cell contribution-level-0"></div>
                    <div class="contribution-cell contribution-level-1"></div>
                    <div class="contribution-cell contribution-level-2"></div>
                    <div class="contribution-cell contribution-level-3"></div>
                    <div class="contribution-cell contribution-level-4"></div>
                </div>
                <div class="legend-label">More</div>
            </div>
        </div>
    `;
    
    return calendarHTML;
}

// Create pinned repositories cards
function createPinnedReposCards(username, repos) {
    try {
        // Clear previous content
        pinnedRepos.innerHTML = '';
        
        // Sort repos by stars
        const sortedRepos = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
        
        // Create a card for each repo (max 6)
        sortedRepos.slice(0, 6).forEach(repo => {
            const card = document.createElement('div');
            card.className = 'repo-card';
            
            const updatedAt = new Date(repo.updated_at).toLocaleDateString();
            const language = repo.language || 'Not specified';
            const languageClass = repo.language ? `language-${repo.language.toLowerCase().replace(/\s+/g, '-')}` : '';
            
            card.innerHTML = `
                <h3 class="repo-name">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </h3>
                <p class="repo-description">${repo.description || 'No description available'}</p>
                <div class="repo-stats">
                    <div class="repo-stat">
                        <i class="fas fa-star"></i>
                        <span>${repo.stargazers_count}</span>
                    </div>
                    <div class="repo-stat">
                        <i class="fas fa-code-branch"></i>
                        <span>${repo.forks_count}</span>
                    </div>
                    <div class="repo-stat">
                        <i class="fas fa-eye"></i>
                        <span>${repo.watchers_count}</span>
                    </div>
                </div>
                <div class="repo-info">
                    <span class="repo-language ${languageClass}">
                        <span class="language-dot"></span>
                        ${language}
                    </span>
                    <span class="repo-updated">Updated: ${updatedAt}</span>
                </div>
            `;
            
            pinnedRepos.appendChild(card);
        });
    } catch (error) {
        console.error('Error creating pinned repos cards:', error);
        pinnedRepos.innerHTML = '<p class="error-message">Could not load repository data</p>';
    }
}

// Setup sidebar navigation
function setupSidebarNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = {
        'dashboard': document.querySelector('.search-card'),
        'repositories': document.querySelector('.repositories-card'),
        'profile': document.querySelector('.user-profile-card'),
        'contributions': document.querySelector('.contribution-card'),
        'languages': document.querySelector('.languages-card')
    };
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            link.classList.add('active');
            
            // Get the section to show based on data-tooltip
            const section = link.getAttribute('data-tooltip').toLowerCase();
            
            // Scroll to the corresponding section if it exists
            if (sections[section]) {
                sections[section].scrollIntoView({ behavior: 'smooth' });
                
                // Add a highlight effect
                sections[section].classList.add('highlight-card');
                setTimeout(() => {
                    sections[section].classList.remove('highlight-card');
                }, 1500);
            }
        });
    });
}

// Fetch user events from GitHub API
async function fetchUserEvents(username) {
    try {
        const response = await fetch(
            `${API_BASE_URL}/users/${username}/events?per_page=30`,
            { headers: API_HEADERS }
        );
        
        if (!response.ok) {
            if (response.status === 403) {
                console.warn('Rate limit exceeded when fetching events');
                return [];
            } else {
                console.warn(`Failed to fetch events: ${response.statusText}`);
                return [];
            }
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching user events:', error);
        return [];
    }
}

// Update stats overview section
function updateStatsOverview(userData) {
    // Calculate total stars, forks for this user
    calculateUserStats(userData.login).then(stats => {
        if (starsStatElement) {
            starsStatElement.querySelector('.stat-count').textContent = stats.stars.toLocaleString();
        }
        
        if (forksStatElement) {
            forksStatElement.querySelector('.stat-count').textContent = stats.forks.toLocaleString();
        }
        
        if (followersStatElement) {
            followersStatElement.querySelector('.stat-count').textContent = userData.followers.toLocaleString();
        }
        
        if (followingStatElement) {
            followingStatElement.querySelector('.stat-count').textContent = userData.following.toLocaleString();
        }
    });
}

// Calculate total stars and forks for a user
async function calculateUserStats(username) {
    try {
        const repos = await fetchUserRepos(username);
        
        // Calculate totals
        const stars = repos.reduce((total, repo) => total + repo.stargazers_count, 0);
        const forks = repos.reduce((total, repo) => total + repo.forks_count, 0);
        
        return { stars, forks };
    } catch (error) {
        console.error('Error calculating user stats:', error);
        return { stars: 0, forks: 0 };
    }
}

// Create activity timeline section
function createActivityTimeline(events) {
    if (!events || events.length === 0) {
        activityTimeline.innerHTML = '<p class="error-message">No recent activity found or rate limit exceeded.</p>';
        return;
    }
    
    // Clear previous content
    activityTimeline.innerHTML = '';
    
    // Define event types and their icons
    const eventIcons = {
        PushEvent: 'fas fa-code-branch',
        CreateEvent: 'fas fa-plus-circle',
        DeleteEvent: 'fas fa-trash',
        IssuesEvent: 'fas fa-exclamation-circle',
        IssueCommentEvent: 'fas fa-comment',
        PullRequestEvent: 'fas fa-code',
        PullRequestReviewEvent: 'fas fa-code-branch',
        PullRequestReviewCommentEvent: 'fas fa-comment-dots',
        ForkEvent: 'fas fa-code-branch',
        WatchEvent: 'fas fa-star',
        ReleaseEvent: 'fas fa-tag'
    };
    
    // Process up to 10 events
    const recentEvents = events.slice(0, 10);
    
    // Create timeline items
    recentEvents.forEach(event => {
        const eventDate = new Date(event.created_at);
        const timeAgo = getTimeAgo(eventDate);
        const icon = eventIcons[event.type] || 'fas fa-code';
        
        let title = '';
        let description = '';
        
        // Parse event data based on type
        switch (event.type) {
            case 'PushEvent':
                title = `Pushed to ${event.repo.name}`;
                if (event.payload.commits && event.payload.commits.length > 0) {
                    const commitCount = event.payload.commits.length;
                    description = `Made ${commitCount} commit${commitCount > 1 ? 's' : ''}`;
                }
                break;
                
            case 'CreateEvent':
                title = `Created ${event.payload.ref_type}`;
                if (event.payload.ref_type === 'repository') {
                    description = `Created repository ${event.repo.name}`;
                } else if (event.payload.ref) {
                    description = `Created ${event.payload.ref_type} ${event.payload.ref} in ${event.repo.name}`;
                }
                break;
                
            case 'IssuesEvent':
                title = `${event.payload.action} issue in ${event.repo.name}`;
                if (event.payload.issue && event.payload.issue.title) {
                    description = `"${event.payload.issue.title}"`;
                }
                break;
                
            case 'PullRequestEvent':
                title = `${event.payload.action} pull request in ${event.repo.name}`;
                if (event.payload.pull_request && event.payload.pull_request.title) {
                    description = `"${event.payload.pull_request.title}"`;
                }
                break;
                
            case 'ForkEvent':
                title = `Forked ${event.repo.name}`;
                break;
                
            case 'WatchEvent':
                title = `Starred ${event.repo.name}`;
                break;
                
            default:
                title = `${event.type} on ${event.repo.name}`;
        }
        
        // Create timeline item
        const timelineItem = document.createElement('div');
        timelineItem.className = 'activity-item';
        
        timelineItem.innerHTML = `
            <div class="activity-icon">
                <i class="${icon}"></i>
            </div>
            <div class="activity-content">
                <h4 class="activity-title">${title}</h4>
                <div class="activity-date">${timeAgo}</div>
                ${description ? `<p class="activity-description">${description}</p>` : ''}
            </div>
        `;
        
        activityTimeline.appendChild(timelineItem);
    });
}

// Create top repositories section
function createTopReposSection(repos) {
    if (!repos || repos.length === 0) {
        topRepos.innerHTML = '<p class="error-message">No repositories found.</p>';
        return;
    }
    
    // Clear previous content
    topRepos.innerHTML = '';
    
    // Sort repos by stars
    const starsSorted = [...repos].sort((a, b) => b.stargazers_count - a.stargazers_count);
    
    // Take top 5
    starsSorted.slice(0, 5).forEach(repo => {
        const repoItem = document.createElement('div');
        repoItem.className = 'top-repo-item';
        
        repoItem.innerHTML = `
            <div class="top-repo-info">
                <h4 class="top-repo-name">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </h4>
                <p class="top-repo-desc">${repo.description || 'No description available'}</p>
            </div>
            <div class="top-repo-stats">
                <div class="top-repo-stat">
                    <i class="fas fa-star"></i> ${repo.stargazers_count}
                </div>
                <div class="top-repo-stat">
                    <i class="fas fa-code-branch"></i> ${repo.forks_count}
                </div>
            </div>
        `;
        
        topRepos.appendChild(repoItem);
    });
}

// Helper function to format time ago
function getTimeAgo(date) {
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
    
    let interval = Math.floor(seconds / 31536000);
    if (interval >= 1) {
        return `${interval} year${interval > 1 ? 's' : ''} ago`;
    }
    
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
        return `${interval} month${interval > 1 ? 's' : ''} ago`;
    }
    
    interval = Math.floor(seconds / 86400);
    if (interval >= 1) {
        return `${interval} day${interval > 1 ? 's' : ''} ago`;
    }
    
    interval = Math.floor(seconds / 3600);
    if (interval >= 1) {
        return `${interval} hour${interval > 1 ? 's' : ''} ago`;
    }
    
    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
        return `${interval} minute${interval > 1 ? 's' : ''} ago`;
    }
    
    return 'just now';
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init); 