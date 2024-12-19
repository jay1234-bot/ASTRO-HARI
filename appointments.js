class AppointmentSystem {
    constructor() {
        this.appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        this.setupEventListeners();
    }

    setupEventListeners() {
        const appointmentForm = document.querySelector('.appointment-form form');
        if (appointmentForm) {
            appointmentForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.bookAppointment(e);
            });
        }
    }

    bookAppointment(e) {
        if (!auth.currentUser) {
            alert('कृपया पहले लॉग इन करें');
            return;
        }

        const form = e.target;
        const appointment = {
            name: form.querySelector('input[name="name"]').value,
            email: form.querySelector('input[name="email"]').value,
            phone: form.querySelector('input[name="phone"]').value,
            date: form.querySelector('input[name="date"]').value,
            service: form.querySelector('select[name="service"]').value,
            userId: auth.currentUser.email
        };

        this.appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(this.appointments));
        
        alert('आपकी अपॉइंटमेंट सफलतापूर्वक बुक कर ली गई है!');
        form.reset();
    }
}

const appointmentSystem = new AppointmentSystem(); 