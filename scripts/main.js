<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stella Barbarella | SOC Analyst & Cybersecurity Portfolio</title>
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Професионални услуги за лов на заплахи и киберсигурност от Stella Barbarella. Експертиза в SIEM анализ, detection engineering, MITRE ATT&CK framework и проактивно откриване на заплахи.">
    <meta name="keywords" content="threat hunting, лов на заплахи, киберсигурност, cybersecurity, SOC analyst, SIEM, detection engineering, MITRE ATT&CK, Splunk, KQL, incident response, Stella Barbarella">
    <meta name="author" content="Stella Barbarella">
    <meta name="robots" content="index, follow">
    <meta name="language" content="bg">
    <meta name="revisit-after" content="7 days">
    
    <!-- Open Graph Meta Tags (за Facebook, LinkedIn и др.) -->
    <meta property="og:title" content="Stella Barbarella | SOC Analyst & Cybersecurity Portfolio">
    <meta property="og:description" content="Професионални услуги за лов на заплахи и киберсигурност. Експертиза в SIEM анализ, detection engineering и проактивно откриване на заплахи.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://stellabarbarella.com/index.html">
    <meta property="og:image" content="https://stellabarbarella.com/images/portfolio-preview.jpg">
    <meta property="og:site_name" content="Stella Barbarella - Cybersecurity Portfolio">
    <meta property="og:locale" content="bg_BG">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="Stella Barbarella | SOC Analyst & Cybersecurity Portfolio">
    <meta name="twitter:description" content="Професионални услуги за лов на заплахи и киберсигурност">
    <meta name="twitter:image" content="https://stellabarbarella.com/images/portfolio-preview.jpg">
    <meta name="twitter:site" content="@stellabarbarella">
    
    <!-- Canonical URL -->
    <link rel="canonical" href="https://stellabarbarella.com/index.html">
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    
    <!-- Additional SEO -->
    <link rel="alternate" hreflang="en" href="https://stellabarbarella.com/threat-hunting.html?lang=en">
    <link rel="alternate" hreflang="fr" href="https://stellabarbarella.com/threat-hunting.html?lang=fr">
    <link rel="alternate" hreflang="bg" href="https://stellabarbarella.com/threat-hunting.html?lang=bg">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Stella Barbarella",
      "jobTitle": "SOC Analyst & Cybersecurity Specialist",
      "description": "Професионални услуги за лов на заплахи и киберсигурност",
      "url": "https://stellabarbarella.com",
      "sameAs": [
        "https://www.linkedin.com/in/stella-s-95ba5683/"
      ],
      "knowsAbout": [
        "Threat Hunting",
        "Cybersecurity",
        "SIEM Analysis",
        "Detection Engineering",
        "MITRE ATT&CK",
        "Incident Response"
      ]
    }
    </script>
    
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="stylesheet" href="styles/common.css">
    <link rel="stylesheet" href="styles/external.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            color: #ffffff;
            overflow-x: hidden;
            line-height: 1.6;
        }

        /* Loading Screen */
        .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        }

        .loading-content {
            text-align: center;
            color: #00ffee;
        }

        .loading-spinner {
            width: 60px;
            height: 60px;
            border: 3px solid rgba(0, 255, 238, 0.3);
            border-top: 3px solid #00ffee;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }

        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }

        /* Navigation */
        nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            background: rgba(10, 20, 30, 0.9);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px); /* Safari compatibility */
            z-index: 1000;
            padding: 15px 0;
            transition: all 0.3s ease;
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 20px;
        }

        .logo {
            font-family: 'Orbitron', monospace;
            font-size: 1.8rem;
            font-weight: 900;
            color: #00ffee;
            text-decoration: none;
            text-shadow: 0 0 20px rgba(0, 255, 238, 0.5);
        }

        .nav-links {
            display: flex;
            list-style: none;
            gap: 30px;
        }

        .nav-links a {
            color: #ffffff;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-links a:hover {
            color: #00ffee;
            text-shadow: 0 0 10px rgba(0, 255, 238, 0.5);
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: linear-gradient(45deg, #00ffee, #00ff88);
            transition: width 0.3s ease;
        }

        .nav-links a:hover::after {
            width: 100%;
        }

        /* Language Selector */
        .language-selector {
            display: flex;
            gap: 10px;
            margin-left: 20px;
        }

        .lang-btn {
            background: rgba(0, 255, 238, 0.1);
            border: 1px solid #00ffee;
            color: #00ffee;
            padding: 5px 10px;
            border-radius: 15px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 0.9rem;
        }

        .lang-btn:hover, .lang-btn.active {
            background: rgba(0, 255, 238, 0.3);
            box-shadow: 0 0 10px rgba(0, 255, 238, 0.3);
        }

        /* Mobile Menu */
        .mobile-menu {
            display: none;
            flex-direction: column;
            cursor: pointer;
        }

        .mobile-menu span {
            width: 25px;
            height: 3px;
            background: #00ffee;
            margin: 3px 0;
            transition: 0.3s;
        }

        /* Hero Section */
        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            padding: 80px 20px 0;
        }

        .hero-content {
            max-width: 1200px;
            width: 100%;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: center;
        }

        .hero-text {
            z-index: 2;
        }

        .hero-title {
            font-family: 'Orbitron', monospace;
            font-size: 4rem;
            font-weight: 900;
            color: #00ffee;
            text-shadow: 0 0 30px rgba(0, 255, 238, 0.5);
            margin-bottom: 20px;
            line-height: 1.2;
        }

        .hero-subtitle {
            font-size: 1.5rem;
            color: #00ddcc;
            margin-bottom: 30px;
            font-weight: 600;
        }

        .hero-description {
            font-size: 1.2rem;
            color: #ffffff;
            margin-bottom: 40px;
            line-height: 1.8;
        }

        .hero-buttons {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        .btn {
            padding: 15px 30px;
            border: none;
            border-radius: 30px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            text-align: center;
        }

        .btn-primary {
            background: linear-gradient(45deg, #00ffee, #00ff88);
            color: #000000;
            box-shadow: 0 5px 20px rgba(0, 255, 238, 0.3);
        }

        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 255, 238, 0.5);
        }

        .btn-secondary {
            background: transparent;
            color: #00ffee;
            border: 2px solid #00ffee;
        }

        .btn-secondary:hover {
            background: rgba(0, 255, 238, 0.1);
            transform: translateY(-3px);
        }

        .hero-visual {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .hero-image {
            width: 400px;
            height: 400px;
            border-radius: 50%;
            background: linear-gradient(45deg, #00ffee, #00ff88);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 8rem;
            color: #000000;
            box-shadow: 0 0 50px rgba(0, 255, 238, 0.5);
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
        }

        /* Particles Background - FIXED FULLSCREEN */
        #particles-js {
            position: fixed !important;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            pointer-events: none;
        }

        /* Sections */
        section {
            padding: 100px 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        h2 {
            font-family: 'Orbitron', monospace;
            font-size: 3rem;
            color: #00ffee;
            text-align: center;
            margin-bottom: 60px;
            text-shadow: 0 0 20px rgba(0, 255, 238, 0.3);
        }

        /* About Section */
        .about-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 50px;
            align-items: center;
        }

        .about-image {
            width: 300px;
            height: 300px;
            border-radius: 20px;
            background: linear-gradient(45deg, #00ffee, #00ff88);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 6rem;
            color: #000000;
            box-shadow: 0 20px 40px rgba(0, 255, 238, 0.3);
            margin: 0 auto;
        }

        .about-text {
            font-size: 1.2rem;
            line-height: 1.8;
            color: #ffffff;
        }

        /* Projects Section */
        .projects-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            margin-top: 60px;
        }

        .project-card {
            background: rgba(0, 255, 238, 0.1);
            border: 2px solid #00ffee;
            border-radius: 20px;
            padding: 40px;
            text-align: center;
            transition: all 0.3s ease;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .project-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0, 255, 238, 0.1), transparent);
            transition: left 0.5s ease;
        }

        .project-card:hover::before {
            left: 100%;
        }

        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 255, 238, 0.3);
        }

        .project-icon {
            font-size: 4rem;
            margin-bottom: 20px;
            display: block;
        }

        .project-text {
            font-size: 1.3rem;
            font-weight: 600;
            color: #00ffee;
        }

        /* Skills Section */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 60px;
        }

        .skill-card {
            background: rgba(0, 255, 238, 0.1);
            border: 2px solid #00ffee;
            border-radius: 15px;
            padding: 30px;
            text-align: center;
            transition: all 0.3s ease;
        }

        .skill-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 255, 238, 0.3);
        }

        .skill-icon {
            font-size: 3rem;
            color: #00ffee;
            margin-bottom: 20px;
        }

        .skill-title {
            font-size: 1.5rem;
            color: #00ffee;
            margin-bottom: 15px;
            font-weight: 600;
        }

        .skill-description {
            color: #ffffff;
            line-height: 1.6;
        }

        /* Contact Section */
        .contact-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 50px;
            align-items: start;
        }

        .contact-info {
            background: rgba(0, 255, 238, 0.1);
            border: 2px solid #00ffee;
            border-radius: 20px;
            padding: 40px;
        }

        .contact-item {
            display: flex;
            align-items: center;
            margin-bottom: 30px;
        }

        .contact-icon {
            font-size: 2rem;
            color: #00ffee;
            margin-right: 20px;
            width: 50px;
        }

        .contact-text {
            font-size: 1.2rem;
            color: #ffffff;
        }

        .contact-form {
            background: rgba(0, 255, 238, 0.1);
            border: 2px solid #00ffee;
            border-radius: 20px;
            padding: 40px;
        }

        .form-group {
            margin-bottom: 25px;
        }

        .form-group label {
            display: block;
            margin-bottom: 8px;
            color: #00ffee;
            font-weight: 600;
        }

        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 15px;
            border: 2px solid #00ffee;
            border-radius: 10px;
            background: rgba(0, 0, 0, 0.3);
            color: #ffffff;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: #00ff88;
            box-shadow: 0 0 10px rgba(0, 255, 238, 0.3);
        }

        .form-group textarea {
            resize: vertical;
            min-height: 120px;
        }

        .submit-btn {
            width: 100%;
            padding: 15px;
            background: linear-gradient(45deg, #00ffee, #00ff88);
            color: #000000;
            border: none;
            border-radius: 30px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .submit-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(0, 255, 238, 0.5);
        }

        /* Status Message */
        .status-message {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 20px 30px;
            border-radius: 15px;
            font-weight: 600;
            z-index: 1001;
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
            max-width: 400px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            border: 2px solid;
        }

        .status-message.show {
            opacity: 1;
            transform: translateY(0);
        }

        .status-message.success {
            background: linear-gradient(135deg, #00ff88, #00ffee);
            color: #000000;
            border-color: #00ff88;
        }

        .status-message.error {
            background: linear-gradient(135deg, #ff4444, #ff6666);
            color: #ffffff;
            border-color: #ff4444;
        }

        .status-message.info {
            background: linear-gradient(135deg, #00ffee, #00ddcc);
            color: #000000;
            border-color: #00ffee;
        }

        /* Form Submit Button States */
        .submit-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none !important;
        }

        .submit-btn.loading {
            background: linear-gradient(45deg, #666, #888);
            color: #ffffff;
        }

        /* Chatbot */
        .chatbot-container {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
        }

        .chatbot-toggle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(45deg, #00ffee, #00ff88);
            border: none;
            font-size: 1.5rem;
            color: #000000;
            cursor: pointer;
            box-shadow: 0 5px 20px rgba(0, 255, 238, 0.3);
            transition: all 0.3s ease;
        }

        .chatbot-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 10px 30px rgba(0, 255, 238, 0.5);
        }

        .chatbot-window {
            position: fixed;
            bottom: 90px;
            right: 20px;
            width: 350px;
            height: 500px;
            background: rgba(10, 20, 30, 0.95);
            border: 2px solid #00ffee;
            border-radius: 20px;
            display: none;
            flex-direction: column;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px); /* Safari compatibility */
        }

        .chatbot-window.active {
            display: flex !important;
        }

        .chatbot-toggle.active {
            background: linear-gradient(45deg, #ff6b6b, #ee5a52) !important;
            transform: rotate(45deg) !important;
        }

        .chatbot-header {
            padding: 20px;
            border-bottom: 1px solid #00ffee;
            text-align: center;
        }

        .chatbot-title {
            color: #00ffee;
            font-size: 1.3rem;
            font-weight: 600;
            margin-bottom: 5px;
        }

        .chatbot-subtitle {
            color: #00ddcc;
            font-size: 0.9rem;
        }

        .chatbot-messages {
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .message {
            padding: 12px 16px;
            border-radius: 15px;
            max-width: 85%;
            word-wrap: break-word;
            animation: fadeIn 0.3s ease;
        }

        .message.user {
            background: #00ffee;
            color: #000000;
            align-self: flex-end;
            margin-left: auto;
        }

        .message.bot {
            background: rgba(0, 255, 238, 0.1);
            color: #ffffff;
            border: 1px solid #00ffee;
            align-self: flex-start;
        }

        .chatbot-input-container {
            padding: 15px;
            border-top: 1px solid rgba(0, 255, 238, 0.2);
            background: rgba(15, 25, 35, 0.9);
        }

        .chatbot-form {
            display: flex;
            gap: 10px;
            align-items: center;
        }

        .chatbot-input {
            flex: 1;
            padding: 12px 15px;
            border: 1px solid rgba(0, 255, 238, 0.3);
            border-radius: 25px;
            background: rgba(20, 30, 40, 0.8);
            color: #ffffff;
            font-size: 14px;
            outline: none;
            transition: all 0.3s ease;
        }

        .chatbot-input:focus {
            border-color: #00ffee;
            box-shadow: 0 0 10px rgba(0, 255, 238, 0.3);
        }

        .chatbot-input::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }

        .chatbot-send-btn {
            width: 45px;
            height: 45px;
            border: none;
            border-radius: 50%;
            background: linear-gradient(135deg, #00ffee, #00ccaa);
            color: #0a1420;
            font-size: 16px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 2px 10px rgba(0, 255, 238, 0.3);
        }

        .chatbot-send-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 4px 20px rgba(0, 255, 238, 0.5);
        }

        .chatbot-send-btn:active {
            transform: scale(0.95);
        }

        .chatbot-send-btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }

        /* Chatbot Close Button */
        .chatbot-close {
            position: absolute;
            top: 10px;
            right: 15px;
            width: 30px;
            height: 30px;
            border: none;
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            font-size: 18px;
            cursor: pointer;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }

        .chatbot-close:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
        }

        /* Typing Indicator */
        .typing-indicator {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px;
            background: rgba(0, 255, 238, 0.1);
            border-radius: 15px;
            margin: 10px 0;
        }

        .typing-dots {
            display: flex;
            gap: 3px;
        }

        .typing-dots span {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: #00ffee;
            animation: typing 1.4s infinite;
        }

        .typing-dots span:nth-child(2) {
            animation-delay: 0.2s;
        }

        .typing-dots span:nth-child(3) {
            animation-delay: 0.4s;
        }

        @keyframes typing {
            0%, 60%, 100% {
                transform: translateY(0);
                opacity: 0.4;
            }
            30% {
                transform: translateY(-10px);
                opacity: 1;
            }
        }

        .typing-text {
            color: #00ffee;
            font-size: 12px;
            opacity: 0.8;
        }

        /* Mobile Chatbot Adjustments */
        @media (max-width: 768px) {
            .chatbot-window {
                width: 95%;
                height: 80vh;
                bottom: 80px;
                right: 2.5%;
            }

            .chatbot-input-container {
                padding: 10px;
            }

            .chatbot-input {
                padding: 10px 12px;
                font-size: 16px; /* Prevents zoom on iOS */
            }

            .chatbot-send-btn {
                width: 40px;
                height: 40px;
                font-size: 14px;
            }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }

            .mobile-menu {
                display: flex;
            }

            .hero-content {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .hero-title {
                font-size: 2.5rem;
            }

            .hero-image {
                width: 300px;
                height: 300px;
                font-size: 6rem;
            }

            .about-content {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .contact-container {
                grid-template-columns: 1fr;
            }

            .projects-container {
                grid-template-columns: 1fr;
            }

            .skills-grid {
                grid-template-columns: 1fr;
            }

            .chatbot-window {
                width: 90%;
                right: 5%;
                left: 5%;
                bottom: 90px;
            }
        }

        @media (max-width: 480px) {
            .hero-title {
                font-size: 2rem;
            }

            .hero-buttons {
                flex-direction: column;
                align-items: center;
            }

            .btn {
                width: 100%;
                max-width: 250px;
            }
        }

        /* Contact Links Enhancement */
        .contact-link {
            color: #00ffee !important;
            text-decoration: none !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
            display: inline-block !important;
        }

        .contact-link:hover {
            color: #00ff88 !important;
            text-shadow: 0 0 10px rgba(0, 255, 238, 0.5) !important;
            transform: translateX(5px) !important;
        }

        .contact-link:visited {
            color: #00ffee !important;
        }

        .contact-link:active {
            color: #00ddcc !important;
        }

        /* Ensure all contact links work */
        .contact-text a {
            color: #00ffee !important;
            text-decoration: none !important;
            cursor: pointer !important;
            transition: all 0.3s ease !important;
        }

        .contact-text a:hover {
            color: #00ff88 !important;
            text-shadow: 0 0 10px rgba(0, 255, 238, 0.5) !important;
        }
    </style>
    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
    <script>
        (function() {
            emailjs.init("lAhCz4_o_eDCflnmP"); 
        })();
    </script>
    <meta name="autocomplete" content="off">
    <meta name="format-detection" content="telephone=no">
</head>
<body>
    <!-- Loading Screen -->
    <div id="loading-screen" class="loading-screen">
        <div class="loading-content">
            <div class="loading-spinner"></div>
            <h2>Loading Portfolio...</h2>
        </div>
    </div>

    <!-- Navigation -->
    <nav>
        <div class="nav-container">
            <a href="#home" class="logo" data-translate="name">Stella Barbarella</a>
            <ul class="nav-links">
                <li><a href="#home" data-translate="nav-home">Home</a></li>
                <li><a href="#about" data-translate="nav-about">About</a></li>
                <li><a href="#projects" data-translate="nav-projects">Projects</a></li>
                <li><a href="#skills" data-translate="nav-skills">Skills</a></li>
                <li><a href="#contact" data-translate="nav-contact">Contact</a></li>
            </ul>
            <div class="language-selector">
                <button class="lang-btn active" id="lang-en" onclick="changeLanguage('en')">EN</button>
                <button class="lang-btn" id="lang-fr" onclick="changeLanguage('fr')">FR</button>
                <button class="lang-btn" id="lang-bg" onclick="changeLanguage('bg')">BG</button>
            </div>
            <div class="mobile-menu" id="mobile-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="hero">
        <div id="particles-js"></div>
        <div class="hero-content">
            <div class="hero-text">
                <h1 class="hero-title" data-translate="hero-title">Stella Barbarella</h1>
                <p class="hero-subtitle" data-translate="hero-subtitle">SOC Analyst & Cybersecurity Specialist</p>
                <p class="hero-description" data-translate="hero-description">
                    Professional threat hunting, incident response, and security analysis services
                </p>
                <div class="hero-buttons">
                    <a href="#projects" class="btn btn-primary">View My Work</a>
                    <a href="#contact" class="btn btn-secondary">Get In Touch</a>
                </div>
            </div>
            <div class="hero-visual">
                <div class="hero-image">
                    <i class="fas fa-shield-alt"></i>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about">
        <h2 data-translate="about-title">About Me</h2>
        <div class="about-content">
            <div class="about-image">
                <i class="fas fa-user-shield"></i>
            </div>
            <div class="about-text">
                <p data-translate="about-description">
                    Experienced SOC Analyst specializing in threat detection, incident response, and cybersecurity analysis. 
                    Passionate about proactive threat hunting and building robust security frameworks to protect organizations 
                    from evolving cyber threats.
                </p>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects">
        <h2 data-translate="projects-title">Projects</h2>
        <div class="projects-container">
            <div class="project-card" data-project="threat-map">
            <div class="project-icon">🌍</div>
            <h3 data-translate="project-threat-map">Cyber Threat Map</h3>
            <p data-translate="project-threat-map-desc">Real-time global threat visualization</p>
            <a href="interactive-threat-map.html" class="project-link" data-translate="view-project">View Project</a>
        </div>
        
        <div class="project-card" data-project="phishing-check">
            <div class="project-icon">🛡️</div>
            <h3 data-translate="phishing-checker">Check for Phishing</h3>
            <p data-translate="phishing-checker-desc">Advanced phishing detection tool</p>
            <a href="phishing-check.html" class="project-link" data-translate="view-project">View Project</a>
        </div>
        
        <div class="project-card" data-project="threat-hunting">
            <div class="project-icon">🔍</div>
            <h3 data-translate="threat-hunting">Threat Hunting</h3>
            <p data-translate="threat-hunting-desc">Advanced threat detection dashboard</p>
            <a href="threat-hunting.html" class="project-link" data-translate="view-project">View Project</a>
        </div>

        <div class="project-card" data-project="phishing-response">
            <div class="project-icon">📚</div>
            <h3 data-translate="phishing-response-guide">Phishing Response Guide</h3>
            <p data-translate="phishing-response-desc">Comprehensive incident response guide</p>
            <a href="phishing-response-guide.html" class="project-link" data-translate="view-project">View Project</a>
        </div>
        
        <div class="project-card" data-project="live-threats">
            <div class="project-icon">🌍</div>
            <h3 data-translate="live-threats">Threat Live</h3>
            <p data-translate="live-threats-desc">Real-time threat monitoring</p>
            <a href="live-threats.html" class="project-link" data-translate="view-project">View Project</a>
        </div>
        
        <div class="project-card" data-project="cv">
            <div class="project-icon">📄</div>
            <h3 data-translate="my-cv">My CV</h3>
            <p data-translate="my-cv-desc">Professional resume and background</p>
            <a href="cv.html" class="project-link" data-translate="view-project">View Project</a>
        </div>
        
        <div class="project-card" data-project="mitre-dashboard">
            <div class="project-icon">🎯</div>
            <h3 data-translate="mitre-dashboard">MITRE ATT&CK Dashboard</h3>
            <p data-translate="mitre-dashboard-desc">Real-time threat intelligence analytics</p>
            <a href="mitre-attack-dashboard.html" class="project-link" data-translate="view-project">View Project</a>
        </div>
    </div>
    </section>

    <!-- Skills Section -->
    <section id="skills">
        <h2 data-translate="skills-title">Skills & Expertise</h2>
        <div class="skills-grid">
            <div class="skill-card">
                <div class="skill-icon">🎯</div>
                <h3 class="skill-title" data-translate="skill-threat-hunting">Threat Hunting</h3>
                <p class="skill-description" data-translate="skill-threat-hunting-desc">
                    Advanced threat detection using MITRE ATT&CK framework
                </p>
            </div>
            
            <div class="skill-card">
                <div class="skill-icon">🚨</div>
                <h3 class="skill-title" data-translate="skill-incident-response">Incident Response</h3>
                <p class="skill-description" data-translate="skill-incident-response-desc">
                    Rapid incident containment and forensic analysis
                </p>
            </div>
            
            <div class="skill-card">
                <div class="skill-icon">📊</div>
                <h3 class="skill-title" data-translate="skill-siem">SIEM Analysis</h3>
                <p class="skill-description" data-translate="skill-siem-desc">
                    Expert in Splunk, QRadar, and log analysis
                </p>
            </div>
            
            <div class="skill-card">
                <div class="skill-icon">🔧</div>
                <h3 class="skill-title" data-translate="skill-security-tools">Security Tools</h3>
                <p class="skill-description" data-translate="skill-security-tools-desc">
                    Proficient in various cybersecurity platforms
                </p>
            </div>
        </div>
    </section>


    <!-- Contact Section -->
    <section id="contact">
        <h2 data-translate="contact-title">Contact Me</h2>
        <div class="contact-container">
            <div class="contact-info">
                <div class="contact-item">
                    <i class="fas fa-envelope contact-icon"></i>
                    <div>
                        <h3 data-translate="contact-email-label">Email</h3>
                        <p class="contact-text">
                            <a href="mailto:stiliana.stoyanova@orange.fr?subject=Portfolio Contact&body=Hello Stella," class="contact-link">stiliana.stoyanova@orange.fr</a>
                        </p>
                    </div>
                </div>
                
                <div class="contact-item">
                    <i class="fab fa-linkedin contact-icon"></i>
                    <div>
                        <h3 data-translate="contact-linkedin-label">LinkedIn</h3>
                        <p class="contact-text">
                            <a href="https://www.linkedin.com/in/stella-s-95ba5683/" 
                               target="_blank" 
                               rel="noopener noreferrer"
                               class="contact-link"
                               onclick="window.open(this.href, '_blank'); return false;">
                                <i class="fab fa-linkedin"></i>
                                Stella Barbarella
                            </a>
                        </p>
                    </div>
                </div>
                
                <div class="contact-item">
                    <i class="fas fa-globe contact-icon"></i>
                    <div>
                        <h3 data-translate="contact-website-label">Website</h3>
                        <p class="contact-text">
                            <a href="https://stellabarbarella.com/" class="contact-link">stellabarbarella.com</a>
                        </p>
                    </div>
                </div>
            </div>
            
            <form class="contact-form" id="contact-form">
                <div class="form-group">
                    <label for="name" data-translate="contact-name">Name:</label>
                    <input type="text" id="name" name="name" required autocomplete="off">
                </div>
                
                <div class="form-group">
                    <label for="email" data-translate="contact-email">Email:</label>
                    <input type="email" id="email" name="email" required autocomplete="off">
                </div>
                
                <div class="form-group">
                    <label for="subject" data-translate="contact-subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required autocomplete="off">
                </div>
                
                <div class="form-group">
                    <label for="message" data-translate="contact-message">Message:</label>
                    <textarea id="message" name="message" required autocomplete="off"></textarea>
                </div>
                
                <button type="submit" class="submit-btn" data-translate="contact-send">Send Message</button>
            </form>
        </div>
    </section>
    <!-- Chatbot -->
    <div class="chatbot-container">
        <button type="button" class="chatbot-toggle" id="chatbot-toggle" onclick="toggleChatbot()">🤖</button>
        
        <div class="chatbot-window" id="chatbot-window">
            <div class="chatbot-header">
                <h3 class="chatbot-title" data-translate="chatbot-title">AI Security Assistant</h3>
                <p class="chatbot-subtitle">Powered by AI</p>
                <button type="button" class="chatbot-close" onclick="toggleChatbot()">×</button>
            </div>
            
            <div class="chatbot-messages" id="chatbot-messages">
                <div class="message bot" data-translate="chatbot-welcome">
                    Hi! I'm your AI Security Assistant. Ask me about cybersecurity, SOC analysis, threat hunting, or any security-related questions!
                </div>
                
                <!-- Typing indicator -->
                <div class="typing-indicator" id="typing-indicator"></div>
            </div>
            
            <div class="chatbot-input-container">
                <form class="chatbot-form" id="chatbot-form">
                    <input type="text" 
                           class="chatbot-input" 
                           id="chatbot-input" 
                           data-translate="chatbot-placeholder" 
                           placeholder="Ask me anything about cybersecurity..."
                           autocomplete="off"
                           maxlength="500">
                    <button type="submit" class="chatbot-send-btn" id="chatbot-send-btn">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>

    <!-- Status Message -->
    <div id="status-message" class="status-message"></div>

    <!-- Scripts -->
    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
    <script>
        
        let currentLanguage = 'en';
        let chatbotOpen = false;
        let chatHistory = [];
        
        const translations = {
            en: {
                'name': 'Stella Barbarella',
                'nav-home': 'Home',
                'nav-about': 'About',
                'nav-projects': 'Projects',
                'nav-skills': 'Skills',
                'nav-contact': 'Contact',
                'hero-title': 'Stella Barbarella',
                'hero-subtitle': 'SOC Analyst & Cybersecurity Specialist',
                'hero-description': 'Professional threat hunting, incident response, and security analysis services',
                'about-title': 'About Me',
                'about-description': 'Experienced SOC Analyst specializing in threat detection, incident response, and cybersecurity analysis. Passionate about proactive threat hunting and building robust security frameworks to protect organizations from evolving cyber threats.',
                'projects-title': 'Projects',
                'cyber-threat-map': 'Cyber Threat Map',
                'phishing-checker': 'Check for Phishing',
                'threat-hunting': 'Threat Hunting',
                'phishing-response-guide': 'Phishing Response Guide',
                'live-threats': 'Threat Live',
                'my-cv': 'My CV',
                'skills-title': 'Skills & Expertise',
                'skill-threat-hunting': 'Threat Hunting',
                'skill-threat-hunting-desc': 'Advanced threat detection using MITRE ATT&CK framework',
                'skill-incident-response': 'Incident Response',
                'skill-incident-response-desc': 'Rapid incident containment and forensic analysis',
                'skill-siem': 'SIEM Analysis',
                'skill-siem-desc': 'Expert in Splunk, QRadar, and log analysis',
                'skill-security-tools': 'Security Tools',
                'skill-security-tools-desc': 'Proficient in various cybersecurity platforms',
                'contact-title': 'Contact Me',
                'contact-name': 'Name:',
                'contact-email': 'Email:',
                'contact-subject': 'Subject:',
                'contact-message': 'Message:',
                'contact-send': 'Send Message',
                'contact-email-label': 'Email',
                'contact-linkedin-label': 'LinkedIn',
                'contact-website-label': 'Website',
                'chatbot-title': 'AI Security Assistant',
                'chatbot-welcome': 'Hi! I\'m your AI Security Assistant. Ask me about cybersecurity, SOC analysis, threat hunting, or any security-related questions!',
                'chatbot-typing': 'Typing...',
                'chatbot-placeholder': 'Ask me anything about cybersecurity...',
                'privacy-notice': '📋 Your data is used only for contact and is not stored by us.',
                'form-validation-error': 'Please fill in all fields!',
                'form-sending': 'Sending...',
                'form-success': 'Message sent successfully!',
                'form-error': 'Error sending message!',
                'project-threat-map-desc': 'Real-time global threat visualization',
                'phishing-checker-desc': 'Advanced phishing detection tool',
                'threat-hunting-desc': 'Advanced threat detection dashboard',
                'phishing-response-desc': 'Comprehensive incident response guide',
                'live-threats-desc': 'Real-time threat monitoring',
                'my-cv-desc': 'Professional resume and background',
                'mitre-dashboard-desc': 'Real-time threat intelligence analytics',
                'view-project': 'View Project'
            },
            fr: {
                'name': 'Stella Barbarella',
                'nav-home': 'Accueil',
                'nav-about': 'À propos',
                'nav-projects': 'Projets',
                'nav-skills': 'Compétences',
                'nav-contact': 'Contact',
                'hero-title': 'Stella Barbarella',
                'hero-subtitle': 'Analyste SOC et Spécialiste en Cybersécurité',
                'hero-description': 'Services professionnels de chasse aux menaces, réponse aux incidents et analyse de sécurité',
                'about-title': 'À propos de moi',
                'about-description': 'Analyste SOC expérimentée spécialisée dans la détection des menaces, la réponse aux incidents et l\'analyse de cybersécurité. Passionnée par la chasse proactive aux menaces et la construction de cadres de sécurité robustes.',
                'projects-title': 'Projets',
                'cyber-threat-map': 'Carte des Menaces Cyber',
                'phishing-checker': 'Vérifier le Phishing',
                'threat-hunting': 'Chasse aux Menaces',
                'phishing-response-guide': 'Guide de Réponse au Phishing',
                'live-threats': 'Menaces en Direct',
                'my-cv': 'Mon CV',
                'skills-title': 'Compétences et Expertise',
                'skill-threat-hunting': 'Chasse aux Menaces',
                'skill-threat-hunting-desc': 'Détection avancée des menaces utilisant le framework MITRE ATT&CK',
                'skill-incident-response': 'Réponse aux Incidents',
                'skill-incident-response-desc': 'Confinement rapide des incidents et analyse forensique',
                'skill-siem': 'Analyse SIEM',
                'skill-siem-desc': 'Expert en Splunk, QRadar et analyse de logs',
                'skill-security-tools': 'Outils de Sécurité',
                'skill-security-tools-desc': 'Compétent dans diverses plateformes de cybersécurité',
                'contact-title': 'Me Contacter',
                'contact-name': 'Nom:',
                'contact-email': 'Email:',
                'contact-subject': 'Sujet:',
                'contact-message': 'Message:',
                'contact-send': 'Envoyer le Message',
                'contact-email-label': 'Email',
                'contact-linkedin-label': 'LinkedIn',
                'contact-website-label': 'Site Web',
                'chatbot-title': 'Assistant IA Sécurité',
                'chatbot-welcome': 'Salut! Je suis votre Assistant IA Sécurité. Posez-moi des questions sur la cybersécurité, l\'analyse SOC, la chasse aux menaces ou toute question liée à la sécurité!',
                'chatbot-typing': 'Écrit',
                'chatbot-placeholder': 'Posez-moi une question sur la cybersécurité...',
                'privacy-notice': '📋 Vos données sont utilisées uniquement pour le contact et ne sont pas stockées par nous.',
                'form-validation-error': 'Veuillez remplir tous les champs!',
                'form-sending': 'Envoi en cours...',
                'form-success': 'Message envoyé avec succès!',
                'form-error': 'Erreur lors de l\'envoi du message!',
                'project-threat-map-desc': 'Visualisation des menaces mondiales en temps réel',
                'phishing-checker-desc': 'Outil de détection de phishing avancé',
                'threat-hunting-desc': 'Tableau de bord de détection de менaces',
                'phishing-response-desc': 'Guide complet de réponse aux incidents',
                'live-threats-desc': 'Surveillance des menaces en temps réel',
                'my-cv-desc': 'CV professionnel et background',
                'mitre-dashboard-desc': 'Анализ в реално време на заплахите',
                'view-project': 'Voir le Projet'
            },
            bg: {
    'name': 'Stella Barbarella',
    'nav-home': 'Начало',
    'nav-about': 'За мен',
    'nav-projects': 'Проекти',
    'hero-title': 'Stella Barbarella',
    'hero-subtitle': 'SOC Анализатор и Специалист по Киберсигурност',
    'hero-description': 'Професионални услуги за лов на заплахи, реакция при инциденти и анализ на сигурността',
    'about-title': 'За мен',
    'about-description': 'Опитен SOC анализатор, специализиран в откриване на заплахи, реакция при инциденти и анализ на киберсигурността.',
    'projects-title': 'Проекти',
    'cyber-threat-map': 'Карта на Кибер Заплахи',
    'phishing-checker': 'Проверка за Фишинг',
    'threat-hunting': 'Лов на Заплахи',
    'phishing-response-guide': 'Ръководство за Реакция при Фишинг',
    'live-threats': 'Заплахи на Живо',
    'my-cv': 'Моето CV',
    'skills-title': 'Умения и Експертиза',
    'skill-threat-hunting': 'Лов на Заплахи',
    'skill-threat-hunting-desc': 'Разширено откриване на заплахи използвайки MITRE ATT&CK framework',
    'skill-incident-response': 'Реакция при Инциденти',
    'skill-incident-response-desc': 'Бързо ограничаване на инциденти и форензичен анализ',
    'skill-siem': 'SIEM Анализ',
    'skill-siem-desc': 'Експерт в Splunk, QRadar и анализ на логове',
    'skill-security-tools': 'Инструменти за Сигурност',
    'skill-security-tools-desc': 'Владеене на различни платформи за киберсигурност',
    'contact-title': 'Свържете се с мен',
    'contact-name': 'Име:',
    'contact-email': 'Имейл:',
    'contact-subject': 'Тема:',
    'contact-message': 'Съобщение:',
    'contact-send': 'Изпрати Съобщение',
    'contact-email-label': 'Имейл',
    'contact-linkedin-label': 'LinkedIn',
    'contact-website-label': 'Уебсайт',
    'chatbot-title': 'AI Асистент за Сигурност',
    'chatbot-welcome': 'Здравей! Аз съм вашият AI Асистент за Сигурност.',
    'chatbot-typing': 'Пише',
    'chatbot-placeholder': 'Попитайте ме нещо за киберсигурността...',
    'privacy-notice': '📋 Вашите данни се използват само за контакт и не се съхраняват от нас.',
    'form-validation-error': 'Моля, попълнете всички полета!',
    'form-sending': 'Изпраща...',
    'form-success': 'Съобщението е изпратено успешно!',
    'form-error': 'Грешка при изпращане на съобщението!',
    'project-threat-map-desc': 'Визуализация на глобални заплахи в реално време',
    'phishing-checker-desc': 'Разширен инструмент за откриване на фишинг',
    'threat-hunting-desc': 'Табло за откриване на заплахи',
    'phishing-response-desc': 'Изчерпателно ръководство за реакция при инциденти',
    'live-threats-desc': 'Мониторинг на заплахи в реално време',
    'my-cv-desc': 'Професионално CV и опит',
    'mitre-dashboard-desc': 'Анализ на заплахи в реално време',
    'view-project': 'Виж Проекта'
}
        };

        function changeLanguage(lang) {
            currentLanguage = lang;
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                el.textContent = translations[lang][key] || key;
            });
            updateChatbotResponses();
        }
        const chatbotResponses = {
            en: {
                'hello|hi|hey|greetings': [
                    'Hello! I\'m Stella\'s AI Security Assistant. How can I help you with cybersecurity today?',
                    'Hi there! I\'m here to help with all your cybersecurity questions. What would you like to know?'
                ],
                'default': [
                    'I\'m here to help with cybersecurity questions! Ask me about threat hunting, incident response, or security topics.'
                ]
            },
            fr: {
                'hello|hi|hey|greetings|salut|bonjour': [
                    'Bonjour! Je suis l\'Assistant IA Sécurité de Stella. Comment puis-je vous aider?'
                ],
                'default': [
                    'Je suis ici pour vous aider avec les questions de cybersécurité!'
                ]
            },
            bg: {
    'hello|hi|hey|greetings|здравей|здрасти|добър ден|здравейте|привет|здрасти|хей': [
        'Здравей! Аз съм AI Асистентът за Сигурност на Stella. Как мога да ви помогна с киберсигурността днес?',
        'Здрасти! Тук съм, за да помогна с всички ваши въпроси за киберсигурност. Какво искате да знаете?',
        'Добър ден! Специализиран съм в киберсигурност, SOC анализ и лов на заплахи. Как мога да ви помогна?'
    ],
    'phishing|phish|email|фишинг|имейл|измама|измамни|фалшив|spam|спам': [
        'Фишингът е основна заплаха! Ключови признаци: подозрителни адреси на подателя, спешен език, общи поздрави.',
        'За откриване на фишинг: Проверете автентичността на подателя, търсете правописни грешки.',
        'Фишинг атаките се насочват към човешката психология. Обучете служителите да разпознават тактики.'
    ],
    'siem|splunk|qradar|logs|логове|анализ|системи|мониторинг': [
        'SIEM инструменти като Splunk и QRadar са основни за откриване на заплахи.',
        'Ефективно SIEM управление: правилно събиране на логове, персонализирани корелационни правила.',
        'SIEM добри практики: нормализиране на формати на логове, създаване на значещи табла.'
    ],
    'threat|hunting|mitre|attack|заплаха|лов|атака|заплахи|противник': [
        'Ловът на заплахи използва MITRE ATT&CK рамката за проактивно търсене на заплахи.',
        'Ефективен лов на заплахи: задълбочени знания за мрежово поведение, разбиране на TTP.',
        'MITRE ATT&CK предоставя цялостна матрица на тактики и техники на противника.'
    ],
    'malware|virus|ransomware|зловреден|вирус|ransomware|криптовирус': [
        'Откриването на зловреден софтуер изисква многослойна защита: защита на крайни точки, мрежов мониторинг.',
        'Превенция на ransomware: редовни backup-и, мрежова сегментация, обучение на потребители.',
        'Анализът на зловреден софтуер включва статичен и динамичен анализ.'
    ],
    'stella|barbarella|about|за|кой|коя|who|автор': [
        'Stella Barbarella е опитен SOC анализатор и специалист по киберсигурност.',
        'Stella има експертиза в SIEM платформи, разузнаване на заплахи, дигитална криминалистика.',
        'Можете да се свържете със Stella на stiliana.stoyanova@orange.fr!'
    ],
    'contact|email|linkedin|контакт|имейл|връзка|свързване': [
        'Можете да намерите Stella на stiliana.stoyanova@orange.fr за професионални запитвания.',
        'Свържете се със Stella в LinkedIn: https://www.linkedin.com/in/stella-s-95ba5683/',
        'За възможности за сътрудничество или консултации по киберсигурност, не се колебайте да се свържете.'
    ],
    'help|помощ|какво можеш|какво правиш|функции|умения': [
        'Мога да ви помогна с въпроси за киберсигурност, SOC анализ, лов на заплахи, SIEM системи.',
        'Специализиран съм в: откриване на заплахи, реакция при инциденти, анализ на зловреден софтуер.',
        'Задавайте ми въпроси за: фишинг, SIEM анализ, penetration testing, форензичен анализ!'
    ],
    'what|whats|какво|какво е|обясни|explain|разкажи|кажи': [
        'Какво искате да знаете за киберсигурността? Мога да обясня различни концепции и техники.',
        'Попитайте ме за конкретни теми като фишинг, зловреден софтуер, SIEM анализ или лов на заплахи.',
        'Готов съм да обясня всякакви концепции свързани с киберсигурността и информационната сигурност.'
    ],
    'security|soc|cybersecurity|сигурност|киберсигурност|безопасност': [
        'Киберсигурността е от критично значение в днешния цифров свят. Защитата започва с добра хигиена.',
        'SOC операторите са първата линия на защита срещу кибер заплахи. Те наблюдават, анализират и реагират.',
        'Основни принципи: Defense in Depth, принцип на най-малкия привилегий, редовни актуализации.'
    ],
    'tools|software|platform|инструменти|софтуер|платформа|програми': [
        'Популярни инструменти за киберсигурност: Splunk, QRadar, Wireshark, Metasploit, Nessus.',
        'SIEM платформи: Splunk, QRadar, ArcSight, LogRhythm. EDR решения: CrowdStrike, Carbon Black.',
        'Open-source инструменти: OSSEC, Suricata, Snort, OpenVAS, TheHive, MISP.'
    ],
    'default': [
        'Тук съм, за да помогна с въпроси за киберсигурност! Попитайте ме за лов на заплахи, реакция при инциденти, SIEM анализ.',
        'Мога да помогна с SOC операции, инструменти за сигурност, откриване на заплахи. Какво искате да знаете?',
        'Не се колебайте да попитате за анализ на зловреден софтуер, управление на уязвимости, penetration testing!',
        'Познавам добре рамките за киберсигурност, разузнаване на заплахи, дигитална криминалистика. Как мога да помогна?'
    ]
}
        };

        function getIntelligentResponse(userMessage, language) {
            console.log('🎯 Getting response for:', userMessage, 'in language:', language);
            
            const responses = chatbotResponses[language];
            if (!responses) {
                console.error('❌ No responses for language:', language);
                return 'I\'m here to help with cybersecurity questions!';
            }
            
            const lowerMessage = userMessage.toLowerCase();
            console.log('🔍 Searching in message:', lowerMessage);
            
            // Check for specific topics
            for (const [keywords, responseArray] of Object.entries(responses)) {
                if (keywords !== 'default') {
                    const keywordList = keywords.split('|');
                    console.log('🔑 Checking keywords:', keywordList);
                    
                    for (const keyword of keywordList) {
                        if (lowerMessage.includes(keyword.toLowerCase())) {
                            console.log('✅ Found keyword match:', keyword);
                            const selectedResponse = responseArray[Math.floor(Math.random() * responseArray.length)];
                            console.log('📤 Selected response:', selectedResponse);
                            return selectedResponse;
                        }
                    }
                }
            }
            
            // Default response
            console.log('🔄 Using default response');
            const defaultResponse = responses.default[Math.floor(Math.random() * responses.default.length)];
            console.log('📤 Default response:', defaultResponse);
            return defaultResponse;
        }

        function handleChatbotSubmit(event) {
            event.preventDefault();
            
            const input = document.getElementById('chatbot-input');
            const sendBtn = document.getElementById('chatbot-send-btn');
            const userInput = input.value.trim();
            
            if (!userInput) return;
            
            console.log('🔍 User input:', userInput);
            console.log('🌐 Current language:', currentLanguage);
            console.log('📝 Available responses:', Object.keys(chatbotResponses[currentLanguage] || {}));
            
            // Disable send button temporarily
            sendBtn.disabled = true;
            
            // Add user message to chat
            addMessage(userInput, true);
            input.value = '';
            
            // Show typing indicator
            showTypingIndicator();
            
            // Generate intelligent response
            setTimeout(() => {
                hideTypingIndicator();
                
                const response = getIntelligentResponse(userInput, currentLanguage);
                console.log('💬 Generated response:', response);
                addMessage(response, false);
                
                // Re-enable send button
                sendBtn.disabled = false;
                input.focus();
            }, 1000 + Math.random() * 2000);
        }

        // CHATBOT FUNCTIONS
        function toggleChatbot() {
            const chatbotWindow = document.getElementById('chatbot-window');
            const chatbotToggle = document.getElementById('chatbot-toggle');
            
            chatbotOpen = !chatbotOpen;
            
            if (chatbotOpen) {
                chatbotWindow.classList.add('active');
                chatbotToggle.classList.add('active');
                document.getElementById('chatbot-input').focus();
            } else {
                chatbotWindow.classList.remove('active');
                chatbotToggle.classList.remove('active');
            }
        }

        function addMessage(message, isUser) {
            const messagesContainer = document.getElementById('chatbot-messages');
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
            messageDiv.textContent = message;
            
            messagesContainer.appendChild(messageDiv);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function showTypingIndicator() {
            const typingIndicator = document.getElementById('typing-indicator');
            typingIndicator.innerHTML = `
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <span class="typing-text">Пише...</span>
            `;
            typingIndicator.style.display = 'flex';
        }

        function hideTypingIndicator() {
            const typingIndicator = document.getElementById('typing-indicator');
            typingIndicator.style.display = 'none';
        }

        function changeLanguage(lang) {
            currentLanguage = lang;
            
            // Update active language button
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            document.getElementById(`lang-${lang}`).classList.add('active');
            
            // Update all translatable elements
            document.querySelectorAll('[data-translate]').forEach(element => {
                const key = element.getAttribute('data-translate');
                if (translations[lang] && translations[lang][key]) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = translations[lang][key];
                    } else {
                        element.textContent = translations[lang][key];
                    }
                }
            });
        }

        // ИНИЦИАЛИЗАЦИЯ
        document.addEventListener('DOMContentLoaded', () => {
            // Particles.js initialization
            if (typeof particlesJS !== 'undefined') {
                try {
                    particlesJS.load('particles-js', 'particles.json', function() {
                        console.log('✅ Particles.js loaded successfully!');
                    });
                } catch (error) {
                    console.log('Using fallback particles config');
                    particlesJS('particles-js', {
                        particles: {
                            number: { value: 80, density: { enable: true, value_area: 800 } },
                            color: { value: '#00ffee' },
                            shape: { type: 'circle' },
                            opacity: { value: 0.5, random: true },
                            size: { value: 3, random: true },
                            line_linked: { enable: true, distance: 150, color: '#00ffee', opacity: 0.4, width: 1 },
                            move: { enable: true, speed: 3, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
                        },
                        interactivity: {
                            detect_on: 'canvas',
                            events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                            modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
                        },
                        retina_detect: true
                    });
                }
            }

            // Chatbot form handling
            const chatbotForm = document.getElementById('chatbot-form');
            if (chatbotForm) {
                chatbotForm.addEventListener('submit', handleChatbotSubmit);
            }

            // Chatbot input enter key
            const chatbotInput = document.getElementById('chatbot-input');
            if (chatbotInput) {
                chatbotInput.addEventListener('keypress', function(e) {
                    if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleChatbotSubmit(e);
                    }
                });
            }

            // Initialize with English
            changeLanguage('en');
            
            // Hide loading screen
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                setTimeout(() => {
                    loadingScreen.style.opacity = '0';
                    setTimeout(() => {
                        loadingScreen.style.display = 'none';
                    }, 500);
                }, 1000);
            }
        });

        // CONTACT FORM HANDLING
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
});

function handleFormSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    if (!name || !email || !subject || !message) {
        alert('❌ Моля, попълнете всички полета!');
        return;
    }
    
    const mailtoLink = `mailto:stiliana.stoyanova@orange.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Име: ${name}\nИмейл: ${email}\n\nСъобщение:\n${message}`
    )}`;
    
    // Покажете съобщение и отворете mailto
    alert('✅ Отваряме имейл клиента за изпращане на съобщението!');
    
    setTimeout(() => {
        window.location.href = mailtoLink;
        document.getElementById('contact-form').reset();
    }, 1000);
}

        // Status Message Function
function showStatusMessage(message, type) {
    const statusDiv = document.getElementById('status-message');
    
    if (!statusDiv) {
        console.error('Status message div not found');
        return;
    }
    
    // Clear existing classes
    statusDiv.className = 'status-message';
    statusDiv.textContent = message;
    
    // Add type class
    statusDiv.classList.add(type);
    statusDiv.classList.add('show');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        statusDiv.classList.remove('show');
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    const statusMessage = document.getElementById('status-message-unique');
    if (!statusMessage) {
        console.error('Status message div not found');
        return;
    }
    // Инициализация с английски
    changeLanguage('en');
    
    // Скриване на екрана за зареждане
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }, 1000);
    }
});