// ===================================
// DOM ELEMENTS
// ===================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const loadingScreen = document.getElementById('loadingScreen');
const skillBars = document.querySelectorAll('.skill-progress');
const counters = document.querySelectorAll('.counter');
const contactForm = document.getElementById('contactForm');
const animationCanvas = document.getElementById('animationCanvas');
const particleCanvas = document.getElementById('particleCanvas');

// ===================================
// LOADING SCREEN
// ===================================

window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.style.pointerEvents = 'none';
    }, 2800);
});

// ===================================
// NAVBAR TOGGLE
// ===================================

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===================================
// SMOOTH SCROLL OFFSET
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const elementPosition = targetElement.offsetTop - navHeight;
            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// SCROLL REVEAL ANIMATION
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideIn 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all project cards and other elements
document.querySelectorAll('.project-card, .cert-card, .tool-card, .focus-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

// ===================================
// SKILL BARS ANIMATION
// ===================================

function animateSkillBars() {
    const skillSection = document.querySelector('.skills');
    const skillObserverOptions = {
        threshold: 0.3
    };

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach((bar) => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = progress + '%';
                });
                skillObserver.unobserve(entry.target);
            }
        });
    }, skillObserverOptions);

    skillObserver.observe(skillSection);
}

animateSkillBars();

// ===================================
// COUNTER ANIMATION
// ===================================

function animateCounters() {
    const aboutSection = document.querySelector('.about');
    const counterObserverOptions = {
        threshold: 0.3
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    let count = 0;
                    const increment = target / 60;
                    const updateCounter = () => {
                        count += increment;
                        if (count < target) {
                            counter.textContent = Math.floor(count);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target;
                        }
                    };
                    updateCounter();
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, counterObserverOptions);

    counterObserver.observe(aboutSection);
}

animateCounters();

// ===================================
// CONTACT FORM
// ===================================

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:omkar@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    window.location.href = mailtoLink;
    
    // Reset form
    contactForm.reset();
});

// ===================================
// CANVAS ANIMATIONS - PCB TRACES
// ===================================

function initCanvasAnimation() {
    const canvas = animationCanvas;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationId;
    let time = 0;

    function drawPCBLines() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = `rgba(0, 217, 255, ${0.1 + Math.sin(time * 0.01) * 0.1})`;
        ctx.lineWidth = 1;

        // Draw some subtle animated lines
        const lines = 8;
        for (let i = 0; i < lines; i++) {
            ctx.beginPath();
            const yPos = (canvas.height / lines) * i;
            ctx.moveTo(0, yPos + Math.sin(time * 0.005 + i) * 20);
            ctx.lineTo(canvas.width, yPos + Math.sin(time * 0.005 + i + 2) * 20);
            ctx.stroke();
        }

        time++;
        animationId = requestAnimationFrame(drawPCBLines);
    }

    drawPCBLines();

    // Redraw on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Initialize canvas animation
window.addEventListener('load', initCanvasAnimation);

// ===================================
// PARTICLE ANIMATION
// ===================================

class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.color = Math.random() > 0.5 ? '#00D9FF' : '#3B82F6';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.01;
    }

    draw(ctx) {
        ctx.fillStyle = `rgba(0, 217, 255, ${this.opacity})`;
        if (this.color === '#3B82F6') {
            ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        }
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

let particles = [];

function initParticles() {
    const canvas = particleCanvas;
    if (!canvas) return;

    // Create a hidden canvas for particle effects
    const particleCanvas = document.createElement('canvas');
    particleCanvas.width = window.innerWidth;
    particleCanvas.height = window.innerHeight;
    const pctx = particleCanvas.getContext('2d');

    // Create particles on hero section
    document.addEventListener('mousemove', (e) => {
        if (e.clientY < window.innerHeight * 1.5) {
            for (let i = 0; i < 3; i++) {
                particles.push(new Particle(e.clientX + Math.random() * 20 - 10, e.clientY + Math.random() * 20 - 10));
            }
        }
    });

    // Animate particles periodically
    function animateParticles() {
        particles = particles.filter(p => p.opacity > 0);
        particles.forEach(p => {
            p.update();
        });
    }

    setInterval(animateParticles, 30);
}

window.addEventListener('load', initParticles);

// ===================================
// MAGNETIC BUTTON EFFECT
// ===================================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const distX = (x - centerX) * 0.1;
        const distY = (y - centerY) * 0.1;
        
        this.style.transform = `translate(${distX}px, ${distY}px)`;
    });

    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translate(0, 0)';
    });
});

// ===================================
// GLOW EFFECT ON MOUSE MOVE
// ===================================

document.addEventListener('mousemove', (e) => {
    const glowX = e.clientX;
    const glowY = e.clientY;

    document.querySelectorAll('.hero, .contact').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (glowY >= rect.top && glowY <= rect.bottom) {
            section.style.setProperty('--mouse-x', glowX + 'px');
            section.style.setProperty('--mouse-y', glowY + 'px');
        }
    });
});

// ===================================
// SCROLL PROGRESS INDICATOR
// ===================================

function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    // Optional: You can add a visual progress indicator
    // document.querySelector('.scroll-progress').style.width = scrollPercent + '%';
}

window.addEventListener('scroll', updateScrollProgress);

// ===================================
// NAVBAR BACKGROUND ON SCROLL
// ===================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(5, 8, 22, 0.9)';
        navbar.style.borderBottom = '1px solid rgba(0, 217, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(5, 8, 22, 0.7)';
        navbar.style.borderBottom = '1px solid rgba(30, 41, 59, 0.3)';
    }
});

// ===================================
// PARALLAX EFFECT
// ===================================

function initParallax() {
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        const scrollPosition = window.scrollY;

        if (hero) {
            hero.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });
}

window.addEventListener('load', initParallax);

// ===================================
// HOVER EFFECTS FOR CARDS
// ===================================

document.querySelectorAll('.project-card, .focus-card, .cert-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// BACK TO TOP BUTTON
// ===================================

function createBackToTopButton() {
    const button = document.querySelector('a[href="#hero"]');
    
    if (button) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                button.style.opacity = '1';
                button.style.pointerEvents = 'auto';
            } else {
                button.style.opacity = '0.5';
                button.style.pointerEvents = 'none';
            }
        });
    }
}

window.addEventListener('load', createBackToTopButton);

// ===================================
// STAGGER ANIMATIONS FOR ELEMENTS
// ===================================

function staggerAnimations() {
    const elements = document.querySelectorAll('[style*="animation"]');
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
}

window.addEventListener('load', staggerAnimations);

// ===================================
// INTERSECTION OBSERVER FOR LAZY ANIMATIONS
// ===================================

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    animationObserver.observe(section);
});

// ===================================
// SMOOTH SCROLLING FOR ALL BROWSERS
// ===================================

if (!window.CSS || !window.CSS.supports('scroll-behavior', 'smooth')) {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ===================================
// PREVENT LAYOUT SHIFT
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Ensure all images have proper aspect ratios
    document.querySelectorAll('img').forEach(img => {
        if (!img.style.aspectRatio) {
            img.style.aspectRatio = 'auto';
        }
    });
});

// ===================================
// KEYBOARD NAVIGATION
// ===================================

document.addEventListener('keydown', (e) => {
    // Skip to main content with 'S' key
    if (e.key === 's' || e.key === 'S') {
        const mainContent = document.querySelector('main') || document.querySelector('section');
        if (mainContent) {
            mainContent.focus();
        }
    }

    // Close mobile menu with Escape
    if (e.key === 'Escape') {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ===================================
// PERFORMANCE: DEBOUNCE SCROLL
// ===================================

let ticking = false;

function update() {
    updateScrollProgress();
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
    }
}, { passive: true });

// ===================================
// RESIZE HANDLER
// ===================================

let resizeTimer;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (animationCanvas) {
            animationCanvas.width = window.innerWidth;
            animationCanvas.height = window.innerHeight;
        }
    }, 250);
});

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully');
    
    // Add any additional initialization logic here
    initCanvasAnimation();
});

// Handle visibility change to pause animations when tab is not visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Pause animations
        if (animationCanvas) {
            animationCanvas.style.animationPlayState = 'paused';
        }
    } else {
        // Resume animations
        if (animationCanvas) {
            animationCanvas.style.animationPlayState = 'running';
        }
    }
});
