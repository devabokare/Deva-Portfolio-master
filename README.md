# Personal Portfolio Website

A modern, high-performance, fully responsive personal portfolio built with **React**, **Vite**, and **Framer Motion**.

## 🚀 Features

- **Modern UI & Responsive Design**: Works seamlessly across desktops, tablets, and mobile devices.
- **Interactive Animations**: Micro-interactions, scroll reveals, tilt effects, magnetic buttons, and custom cursor powered by Framer Motion.
- **Dark / Light Mode**: Integrated theme switcher using React Context API.
- **Fast Performance**: Built on Vite with React 19 for instant HMR and optimized builds.
- **Interactive Portfolio & Blog**: Showcases projects with filtering, category tags, interactive details, and blog posts.
- **Resume & Skills**: Structured experience, education, and skill progress bars.
- **Contact Form**: Functional contact form with responsive input fields.

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite
- **Animations**: Framer Motion
- **Icons**: React Icons, Ionicons
- **Routing**: React Router DOM
- **Styling**: Modern CSS with CSS Variables & Glassmorphism

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher recommended) and **npm** installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/devabokare/Deva-Portfolio-master.git
   cd Deva-Portfolio-master
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```text
Deva-Portfolio-master/
├── public/              # Static assets (images, favicon, resume PDF)
├── src/
│   ├── components/      # Reusable UI components (Navbar, Sidebar, TiltCard, etc.)
│   ├── context/         # React Context (ThemeContext)
│   ├── data/            # Portfolio data & content (portfolio.js)
│   ├── hooks/           # Custom React hooks (useTypewriter, etc.)
│   ├── pages/           # Main page views (About, Resume, Portfolio, Blog, Contact)
│   ├── App.jsx          # Root application component
│   ├── main.jsx         # Application entry point
│   └── index.css        # Global design system & utility styles
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Dependencies and scripts
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).

