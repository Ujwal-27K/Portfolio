import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Import routes
import leetcodeRoutes from './routes/leetcode.js';
import contactRoutes from './routes/contact.js';

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(__dirname));

// API routes
app.use('/api', leetcodeRoutes);
app.use('/api', contactRoutes);

// Serve main HTML file for root route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle specific page routes
app.get('/pages/projects.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'projects.html'));
});

app.get('/pages/blogs.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'blogs.html'));
});

app.get('/pages/certificates.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'certificates.html'));
});

// Handle 404 for other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view your portfolio`);
});
