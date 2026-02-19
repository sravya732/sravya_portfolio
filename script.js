// ==================== PARTICLE ANIMATION ==================== 
class ParticleCanvas {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.colors = ['rgba(168, 85, 247, 0.5)', 'rgba(6, 182, 212, 0.5)', 'rgba(132, 204, 22, 0.3)'];
        
        this.resize();
        this.createParticles();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    createParticles() {
        this.particles = [];
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 2 + 1,
                color: this.colors[Math.floor(Math.random() * this.colors.length)]
            });
        }
    }
    
    animate() {
        this.ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x - particle.radius < 0 || particle.x + particle.radius > this.canvas.width) {
                particle.vx *= -1;
            }
            if (particle.y - particle.radius < 0 || particle.y + particle.radius > this.canvas.height) {
                particle.vy *= -1;
            }
            
            particle.x = Math.max(particle.radius, Math.min(this.canvas.width - particle.radius, particle.x));
            particle.y = Math.max(particle.radius, Math.min(this.canvas.height - particle.radius, particle.y));
            
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// ==================== ANIMATED COUNTER ==================== 
function animateCounter() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.getAttribute('data-target'));
                const duration = 2000;
                const start = Date.now();
                
                const updateCount = () => {
                    const elapsed = Date.now() - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const current = Math.floor(target * progress);
                    
                    entry.target.textContent = current;
                    
                    if (progress < 1) {
                        requestAnimationFrame(updateCount);
                    } else {
                        entry.target.textContent = target;
                        entry.target.classList.add('counted');
                    }
                };
                
                updateCount();
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
}

// ==================== SMOOTH SCROLL ==================== 
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ==================== NAVBAR ACTIVE STATE ==================== 
function updateNavbarOnScroll() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        document.querySelectorAll('section[id]').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// ==================== BUTTON INTERACTIONS ==================== 
function setupButtons() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const text = this.textContent.toLowerCase();
            
            if (text.includes('email') || text.includes('touch')) {
                window.location.href = 'mailto:nadipinenisravya@gmail.com';
            } else if (text.includes('resume')) {
                // Create a resume download (you can replace this with your actual resume file)
                const resumeUrl = 'resume.pdf'; // Change this to your resume file path
                const link = document.createElement('a');
                link.href = resumeUrl;
                link.download = 'Sravya_Nadipineni_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            } else if (text.includes('linkedin')) {
                window.open('https://www.linkedin.com/in/sravya-n-33b38a210', '_blank');
            } else if (text.includes('github')) {
                window.open('https://github.com', '_blank');
            }
        });
    });
}

// ==================== INTERSECTION OBSERVER FOR ANIMATIONS ==================== 
function setupIntersectionObserver() {
    const elements = document.querySelectorAll('.animate-fade-in-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.8s ease-out forwards`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    elements.forEach(el => observer.observe(el));
}

// ==================== SKILL TAG HOVER EFFECT ==================== 
function setupSkillTags() {
    const tags = document.querySelectorAll('.skill-tag');
    
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ==================== GLASS CARD HOVER EFFECT ==================== 
function setupGlassCards() {
    const cards = document.querySelectorAll('.glass');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 20px 40px rgba(168, 85, 247, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
}

// ==================== SCROLL REVEAL ANIMATIONS ==================== 
function setupScrollReveal() {
    const cards = document.querySelectorAll('.experience-card, .project-card, .education-card, .skill-category');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeInUp 0.8s ease-out ${index * 0.1}s forwards`;
                entry.target.style.opacity = '0';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
}

// ==================== PARALLAX EFFECT ==================== 
function setupParallax() {
    const heroSection = document.querySelector('.hero');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        if (heroSection) {
            heroSection.style.backgroundPosition = `center ${scrollY * 0.5}px`;
        }
    });
}

// ==================== INITIALIZATION ==================== 
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully!');
    
    // Initialize all features
    new ParticleCanvas();
    animateCounter();
    setupSmoothScroll();
    updateNavbarOnScroll();
    setupButtons();
    setupIntersectionObserver();
    setupSkillTags();
    setupGlassCards();
    setupScrollReveal();
    setupParallax();
    
    // Add some initial animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        const children = heroContent.querySelectorAll('.animate-fade-in-up');
        children.forEach((child, index) => {
            child.style.animationDelay = `${index * 0.1}s`;
        });
    }
});

// ==================== HANDLE WINDOW RESIZE ==================== 
window.addEventListener('resize', () => {
    // Recalculate layouts if needed
    console.log('Window resized');
});
