# GitHub Statistics Viewer

A modern, responsive web application for viewing and comparing GitHub user statistics with a beautiful dark theme.

## Features

- 🔍 View detailed GitHub user statistics
- 📊 Visualize user data with modern charts
- 🌓 Dark theme for comfortable viewing
- 🔄 Compare up to 3 different GitHub users
- 📱 Fully responsive design for all devices

## Statistics Available

- Basic user information and bio
- Repository count, followers, and following
- Language distribution with chart visualization
- Commit activity on popular repositories
- Total stars received
- User comparison with side-by-side charts

## How to Use

1. Open the application in your web browser
2. Enter a GitHub username in the search box
3. Click "Search" or press Enter to view the user's statistics
4. To compare users:
   - Check the "Compare users" checkbox
   - Enter up to 3 additional GitHub usernames
   - Click "Compare" to see statistics for all users side by side

## Technical Details

This application uses:
- HTML5, CSS3, and JavaScript (no framework)
- GitHub REST API for fetching user data
- Chart.js for data visualization
- Modern CSS features (Grid, Flexbox, Variables)
- Responsive design principles

## API Rate Limits

This application uses the GitHub API, which has rate limits for unauthenticated requests:
- 60 requests per hour for unauthenticated users
- The current rate limit status is displayed at the bottom of the page

## Local Development

Since this is a frontend-only application, you can run it locally by simply opening the `index.html` file in your web browser. No server setup required!

## Browser Support

The application is compatible with all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

MIT License - Feel free to use, modify, and distribute the code as you see fit.

## API Setup

This application uses the GitHub API to fetch user statistics and repository information.

### Setting Up GitHub API Token

1. **Create your API configuration file**
   - Copy the `js/config.example.js` file to a new file named `js/config.js`
   - This file is already added to `.gitignore` to prevent accidentally committing your token

2. **Generate a GitHub Personal Access Token**
   - Go to [GitHub Developer Settings](https://github.com/settings/tokens)
   - Click "Generate new token" (classic)
   - Select the following scopes: `public_repo`, `read:user`, `repo:status`
   - Copy the generated token (you'll only see it once!)

3. **Add Your Token to the Configuration File**
   - Open the `js/config.js` file you created
   - Replace `YOUR_GITHUB_PERSONAL_ACCESS_TOKEN` with your actual token

> **Security Note**: Never commit your token to public repositories. The `.gitignore` file is set up to exclude the `config.js` file. 