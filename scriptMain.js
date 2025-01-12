// Initialize PDF.js
pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.min.js';

// Theme handling
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', () => {
    document.documentElement.setAttribute('data-theme', 
        themeToggle.checked ? 'dark' : 'light');
});

// Populate student info
function populateStudentInfo() {
    document.getElementById('studentName').textContent = CONFIG.studentInfo.name;
    document.getElementById('regNo').textContent = CONFIG.studentInfo.regNo;
    document.getElementById('courseName').textContent = CONFIG.studentInfo.courseName;
    document.getElementById('labSlot').textContent = CONFIG.studentInfo.labSlot;
    document.getElementById('facultyName').textContent = CONFIG.studentInfo.facultyName;
    document.getElementById('institute').textContent = CONFIG.studentInfo.institute;
}

// GitHub API functions
async function fetchGitHubContent(path) {
    const baseUrl = `https://api.github.com/repos/${CONFIG.github.username}/${CONFIG.github.repo}/contents`;
    const response = await fetch(`${baseUrl}/${path}`);
    return await response.json();
}

async function fetchFileContent(url) {
    const response = await fetch(url);
    return await response.text();
}

// File handling functions
async function showCode(path) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');
    const fileContent = await fetchFileContent(path);
    
    modalTitle.textContent = path.split('/').pop();
    
    // Determine language for syntax highlighting
    const extension = path.split('.').pop();
    const language = {
        'js': 'javascript',
        'css': 'css',
        'html': 'markup'
    }[extension] || 'markup';

    modalContent.innerHTML = `<pre><code class="language-${language}">${fileContent}</code></pre>`;
    Prism.highlightAll();
    modal.style.display = "block";
}

async function showPDF(path) {
    const pdfModal = document.getElementById('pdfModal');
    const canvas = document.getElementById('pdfViewer');
    const loadingTask = pdfjsLib.getDocument(path);
    
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(1);
    
    const viewport = page.getViewport({ scale: 1.5 });
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    
    const renderContext = {
        canvasContext: canvas.getContext('2d'),
        viewport: viewport
    };
    
    await page.render(renderContext);
    pdfModal.style.display = "block";
}

async function showTextFile(path) {
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    const modalTitle = document.getElementById('modalTitle');
    const content = await fetchFileContent(path);
    
    modalTitle.textContent = path.split('/').pop();
    modalContent.innerHTML = `<pre>${content}</pre>`;
    modal.style.display = "block";
}

// Download function
function downloadFile(url, filename) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Modal close handlers
document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.onclick = function() {
        this.closest('.modal').style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', async () => {
    populateStudentInfo();
    
    try {
        const exercises = await fetchGitHubContent(CONFIG.github.path);
        // Process and display exercises
        // Add your exercise display logic here
    } catch (error)
