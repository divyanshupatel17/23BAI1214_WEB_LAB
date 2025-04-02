/**
 * GitHub API Configuration
 * ------------------------
 * Copy this file to config.js and replace the placeholder with your actual GitHub token
 * The config.js file is excluded from Git in .gitignore to protect your credentials
 */

// Personal Access Token with public_repo, read:user, and repo:status scopes
// Create one at: https://github.com/settings/tokens
export const GITHUB_TOKEN = 'YOUR_GITHUB_PERSONAL_ACCESS_TOKEN';

// API Configuration
export const API_CONFIG = {
    baseUrl: 'https://api.github.com',
    headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${GITHUB_TOKEN}`
    },
    // Default rate limit for unauthenticated requests is 60/hr
    // With authentication, it increases to 5,000/hr
    rateLimit: 5000,
}; 