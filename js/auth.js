class Auth {
    constructor() {
        this.users = JSON.parse(localStorage.getItem('users')) || [];
        this.currentUser = null;
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('loginForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin(e);
        });

        document.getElementById('signupForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSignup(e);
        });
    }

    handleLogin(e) {
        const form = e.target;
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        const user = this.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.currentUser = user;
            alert('सफलतापूर्वक लॉग इन किया गया!');
            bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
            this.updateUIForLoggedInUser();
        } else {
            alert('अमान्य ईमेल या पासवर्ड');
        }
    }

    handleSignup(e) {
        const form = e.target;
        const name = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;

        if (this.users.some(u => u.email === email)) {
            alert('यह ईमेल पहले से पंजीकृत है');
            return;
        }

        const newUser = { name, email, password };
        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));
        
        alert('सफलतापूर्वक पंजीकृत किया गया!');
        bootstrap.Modal.getInstance(document.getElementById('signupModal')).hide();
    }

    updateUIForLoggedInUser() {
        // Update UI elements for logged-in user
        const navbarNav = document.getElementById('navbarNav');
        const authButtons = navbarNav.querySelectorAll('.nav-item:last-child, .nav-item:nth-last-child(2)');
        authButtons.forEach(button => button.style.display = 'none');
        
        const userElement = document.createElement('li');
        userElement.className = 'nav-item';
        userElement.innerHTML = `
            <span class="nav-link">स्वागत है, ${this.currentUser.name}</span>
        `;
        navbarNav.appendChild(userElement);
    }
}

const auth = new Auth(); 