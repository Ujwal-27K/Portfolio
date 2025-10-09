# Ujwal Khairnar - Portfolio Website

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript, featuring a Netflix-inspired dark theme, smooth animations, and dynamic content management.

## 🚀 Features

### ✨ UI/UX Enhancements
- **Netflix-inspired Dark Theme**: Modern, sleek design with red accent colors
- **Smooth Animations**: Enhanced scroll animations, hover effects, and page transitions
- **Scroll Progress Indicator**: Visual progress bar showing scroll position
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Modern Skill Badges**: Interactive skill display with hover animations instead of progress bars

### 🎯 Section Management
- **Featured Projects**: Homepage shows only 3 featured projects with "View All" button
- **Limited Blog Display**: Shows 3 recent blog posts on homepage
- **Recent Certificates**: Displays 3 latest certificates with full page option
- **Separate Experience & Education**: Distinct timeline sections for better organization

### 📱 Navigation & Pages
- **Fixed Navbar**: Smooth scrolling navigation with active section highlighting
- **Dedicated Pages**: Separate pages for all projects, blogs, and certificates
- **Search & Filter**: Advanced filtering options on dedicated pages

### 🔧 Technical Features
- **Modular Backend**: Express.js server with organized route structure
- **Email Integration**: Working contact form with Nodemailer
- **API Integration**: Dynamic LeetCode and GitHub stats fetching
- **Modern JavaScript**: ES6+ modules with clean, organized code structure

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Quick Start

1. **Clone/Download the repository**
   ```bash
   git clone <your-repo-url>
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   # Copy the example environment file
   cp .env.example .env
   
   # Edit .env file with your credentials
   nano .env
   ```

4. **Configure Environment Variables**
   Update the `.env` file with your settings:
   ```env
   # Email configuration for contact form
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   
   # Server configuration
   PORT=3000
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open in browser**
   Navigate to `http://localhost:3000`

### 🔗 URL Structure
- **Homepage**: `http://localhost:3000/`
- **All Projects**: `http://localhost:3000/pages/projects.html`
- **All Blogs**: `http://localhost:3000/pages/blogs.html`
- **All Certificates**: `http://localhost:3000/pages/certificates.html`

## 📧 Email Setup (Gmail)

To enable the contact form:

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Update .env file** with your email and the generated app password

## 📁 Project Structure

### 📂 Organized Folder Structure
All HTML pages (except the main index.html) are now organized in the `pages/` folder for better project structure and maintainability.

```
Portfolio/
├── data/                     # Data files
│   ├── blog.js              # Blog posts data
│   ├── certificates.js      # Certificates data
│   ├── education.js         # Education timeline data
│   ├── experience.js        # Work experience data
│   ├── portfolioData.js     # Main data aggregator
│   ├── projects.js          # Projects data
│   └── skills.js           # Skills and technologies
├── js/                      # JavaScript modules
│   ├── blogs.js            # Blogs page functionality
│   ├── certificates.js     # Certificates page functionality
│   └── projects.js         # Projects page functionality
├── pages/                   # HTML pages (except index)
│   ├── blogs.html          # Dedicated blogs page
│   ├── certificates.html   # Dedicated certificates page
│   └── projects.html       # Dedicated projects page
├── routes/                  # Express.js routes
│   ├── contact.js          # Contact form handling
│   └── leetcode.js         # LeetCode API integration
├── index.html              # Main homepage
├── style.css               # Comprehensive styling
├── app.js                  # Main application logic
├── server.js               # Express.js server
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Customization

### Adding New Projects
Edit `data/projects.js`:
```javascript
{
  id: 8,
  title: "Your Project Name",
  description: "Project description...",
  image: "https://your-image-url.com/image.jpg",
  technologies: ["React", "Node.js", "MongoDB"],
  category: "Web Development",
  demoUrl: "https://your-demo.com",
  codeUrl: "https://github.com/your-repo",
  featured: true,  // Set to true for homepage display
  status: "Completed"
}
```

### Adding Blog Posts
Edit `data/blog.js`:
```javascript
{
  id: 7,
  title: "Your Blog Title",
  excerpt: "Brief description...",
  image: "https://your-blog-image.com/image.jpg",
  category: "Technology",
  tags: ["React", "JavaScript", "Web Dev"],
  url: "https://your-blog-post-url.com"
}
```

### Updating Skills
Edit `data/skills.js` to add new skill categories or items:
```javascript
"New Category": [
  { name: "Skill Name", level: 90, icon: "🚀" }
]
```

### Personal Information
Update personal details in:
- `index.html` - Contact information and social links
- `data/experience.js` - Work experience
- `data/education.js` - Educational background

## 🎯 Features Implemented

- ✅ Navbar smooth scrolling fix
- ✅ Featured projects section (shows 3 projects)
- ✅ Skill badges instead of percentage bars
- ✅ Separate experience and education sections
- ✅ Enhanced achievements section UI
- ✅ Limited blog display (3 posts) with "View All" button
- ✅ Limited certificates display (3 items) with "View All" button
- ✅ Working contact form with email functionality
- ✅ Separate pages for projects, blogs, and certificates
- ✅ Modular backend code organization
- ✅ Enhanced UI/UX with modern animations
- ✅ Scroll progress indicator
- ✅ Responsive design improvements

## 🌐 Deployment

### Local Development
```bash
npm start
```

### Production Deployment
1. Set environment variables on your hosting platform
2. Update API endpoints if necessary
3. Deploy using your preferred method (Vercel, Netlify, Heroku, etc.)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Netflix for UI inspiration
- Font Awesome for icons (if used)
- All the open-source libraries that made this possible

---

**Built with ❤️ by [Ujwal Khairnar](https://github.com/Ujwal-27K)**
