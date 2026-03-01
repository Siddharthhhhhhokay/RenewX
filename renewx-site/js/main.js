// Single-Page Scroll Logic & Animations
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for scroll-reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-entrance');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // Interactive Sun Parallax
    const sunSystem = document.getElementById('sunSystem');
    const homeSection = document.getElementById('home');

    const sunCore = document.querySelector('.sun-core');
    const sunCorona = document.querySelector('.sun-corona');

    if (sunSystem && homeSection) {
        homeSection.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            // Calculate offset from center (-1 to 1)
            const offsetX = (clientX - innerWidth / 2) / (innerWidth / 2);
            const offsetY = (clientY - innerHeight / 2) / (innerHeight / 2);

            // Apply subtle translate (max 30px)
            const moveX = offsetX * 30;
            const moveY = offsetY * 30;

            sunSystem.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
        });

        // Reset on mouse leave
        homeSection.addEventListener('mouseleave', () => {
            sunSystem.style.transform = `translate(-50%, -50%)`;
        });
    }

    // --- Scroll-driven Sun Glow Intensifier ---
    if (sunCore && sunCorona && homeSection) {
        // Add smooth CSS transition to the core glow
        sunCore.style.transition = 'box-shadow 0.1s ease-out, transform 0.1s ease-out';
        sunCorona.style.transition = 'transform 0.15s ease-out, opacity 0.15s ease-out';

        window.addEventListener('scroll', () => {
            const heroHeight = homeSection.offsetHeight;
            const scrollY = window.scrollY;

            // Progress: 0 at top, 1 at bottom of hero section
            const progress = Math.min(scrollY / heroHeight, 1);

            // Interpolate glow intensity — MAXIMUM BLAZE
            const glow1 = 120 + progress * 500;   // 120px → 620px
            const glow2 = 300 + progress * 800;   // 300px → 1100px
            const glow3 = 600 + progress * 1400;  // 600px → 2000px
            const glow4 = 1000 + progress * 1500; // 1000px → 2500px (ultra outer haze)
            const opacity1 = 0.7 + progress * 0.3;  // 0.7 → 1.0
            const opacity2 = 0.4 + progress * 0.55; // 0.4 → 0.95
            const opacity3 = 0.15 + progress * 0.5; // 0.15 → 0.65

            // Scale the core more aggressively
            const coreScale = 1 + progress * 0.5; // 1x → 1.5x

            sunCore.style.boxShadow = `
                0 0 ${glow1}px #FEF08A,
                0 0 ${glow2}px #FB923C,
                0 0 ${glow2 * 1.2}px rgba(251, 146, 60, ${opacity1}),
                0 0 ${glow3}px rgba(234, 56, 0, ${opacity2}),
                0 0 ${glow4}px rgba(194, 65, 12, ${opacity3})
            `;
            sunCore.style.transform = `translate(-50%, -50%) scale(${coreScale})`;

            // Expand the corona dramatically
            const coronaScale = 1 + progress * 1.2; // 1x → 2.2x
            sunCorona.style.transform = `translate(-50%, -50%) scale(${coronaScale})`;
            sunCorona.style.opacity = Math.min(0.8 + progress * 0.5, 1);
        }, { passive: true });
    }

    // --- Vision Section Earth Rise on Scroll ---
    const visionEarth = document.getElementById('visionEarth');
    const visionSection = document.getElementById('vision');
    if (visionEarth && visionSection) {
        window.addEventListener('scroll', () => {
            const sectionRect = visionSection.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Progress: 0 when section top hits bottom of viewport, 1 when section bottom hits top
            const progress = Math.min(Math.max(
                1 - (sectionRect.bottom / (sectionRect.height + windowHeight)),
                0), 1);

            // Rise: from fully below (100%) to center (-50%, so half visible above bottom edge)
            const riseY = 100 - progress * 150; // 100% → -50%
            visionEarth.style.transform = `translateX(-50%) translateY(${riseY}%)`;
        }, { passive: true });
    }

    // Help with relative paths for API
    const API_BASE = 'http://localhost:5001/api';

    // Form Redirection & Session Persistence
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = document.getElementById('email')?.value;
            const password = e.target.querySelector('input[type="password"]').value;
            const role = document.getElementById('role').value;

            const submitBtn = e.target.querySelector('button');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Verifying...';
            submitBtn.disabled = true;

            try {
                const response = await fetch(`${API_BASE}/auth/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (data.success) {
                    if (data.user.role !== role) {
                        alert(`Role Mismatch: This account is registered as a ${data.user.role}.`);
                        submitBtn.innerText = originalBtnText;
                        submitBtn.disabled = false;
                        return;
                    }
                    localStorage.setItem('renewx_token', data.token);
                    localStorage.setItem('renewx_currentUser', JSON.stringify(data.user));
                    window.location.href = `${role}.html`;
                } else {
                    alert(data.message || 'Login failed.');
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                }
            } catch (err) {
                console.error('Login error:', err);
                alert('Connection error. Is the backend server running?');
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }

    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const firstName = signupForm.querySelectorAll('input[type="text"]')[0].value;
            const lastName = signupForm.querySelectorAll('input[type="text"]')[1].value;
            const email = signupForm.querySelector('input[type="email"]').value;
            const password = document.getElementById('signupPassword').value;
            const role = document.getElementById('selectedRole').value;

            if (!password) {
                alert('Password is required for registration.');
                return;
            }

            const submitBtn = signupForm.querySelector('button');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Registering User...';
            submitBtn.disabled = true;

            try {
                const response = await fetch(`${API_BASE}/auth/signup`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: `${firstName} ${lastName}`,
                        email,
                        password,
                        role
                    })
                });

                const data = await response.json();

                if (data.success) {
                    alert('Registration successful! You can now log in.');
                    window.location.href = '#login';
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                } else {
                    alert(data.message || 'Registration failed.');
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                }
            } catch (err) {
                console.error('Signup error:', err);
                alert('Could not reach the registration service.');
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }
        });
    }
});
