/* ==========================================================================
   MEDPULSE SMARTCARE - CORE APPLICATION CONTROLLER
   Router, State Management, Interactivity & Toast Manager
   ========================================================================== */

const App = {
  // Application State
  state: {
    activePage: 'home',
    activeParam: null,
    currentUserRole: 'patient', // 'patient' | 'doctor'
    
    // Search Filters
    searchQuery: '',
    selectedSpecialty: 'All',
    selectedHospital: 'All',
    selectedLocation: 'All',

    // Booking Flow State
    bookingForm: {
      doctorId: 'doc-1',
      step: 1,
      selectedDate: new Date().toISOString().split('T')[0],
      selectedTime: '02:30 PM',
      consultType: 'In-Person Visit',
      patientName: 'Alex Morgan',
      patientPhone: '+1 (555) 234-5678',
      patientEmail: 'alex.morgan@example.com'
    },

    // User Data Stores
    userBookings: [...MOCK_DATA.initialBookings],
    pastBookings: [...MOCK_DATA.pastBookings]
  },

  // Initialize App
  init() {
    console.log('MedPulse SmartCare initialized!');
    this.render();
  },

  // Main Render Pipeline
  render() {
    const root = document.getElementById('app-root');
    const { activePage, currentUserRole, activeParam } = this.state;

    // Render Navigation, Body Page View, and Footer
    let pageContent = '';
    if (activePage === 'home') pageContent = Pages.home();
    else if (activePage === 'search') pageContent = Pages.search();
    else if (activePage === 'booking') pageContent = Pages.booking(activeParam || this.state.bookingForm.doctorId);
    else if (activePage === 'confirmation') pageContent = Pages.confirmation(activeParam);
    else if (activePage === 'patient-dashboard') pageContent = Pages.patientDashboard();
    else if (activePage === 'doctor-dashboard') pageContent = Pages.doctorDashboard();
    else if (activePage === 'auth') pageContent = Pages.auth();

    root.innerHTML = `
      ${Components.renderNavbar(activePage, currentUserRole)}
      <main style="flex:1;">${pageContent}</main>
      ${Components.renderFooter()}
      <div id="toast-root" class="toast-container"></div>
    `;

    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // Router / Page Navigation
  navigateTo(page, param = null) {
    this.state.activePage = page;
    this.state.activeParam = param;
    this.render();
  },

  // Mobile Menu Toggle
  toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    if (navMenu) {
      navMenu.classList.toggle('mobile-open');
    }
  },

  // ------------------------------------------------------------------------
  // SEARCH & FILTER HANDLERS
  // ------------------------------------------------------------------------
  handleSearchInput(e) {
    this.state.searchQuery = e.target.value;
    if (this.state.activePage !== 'search') {
      this.navigateTo('search');
    } else {
      this.render();
    }
  },

  handleFilterChange(filterKey, value) {
    this.state[filterKey] = value;
    if (this.state.activePage !== 'search') {
      this.navigateTo('search');
    } else {
      this.render();
    }
  },

  filterBySpecialty(specialtyName) {
    this.state.selectedSpecialty = specialtyName;
    this.navigateTo('search');
  },

  resetFilters() {
    this.state.searchQuery = '';
    this.state.selectedSpecialty = 'All';
    this.state.selectedHospital = 'All';
    this.state.selectedLocation = 'All';
    this.render();
  },

  // ------------------------------------------------------------------------
  // BOOKING FLOW LOGIC
  // ------------------------------------------------------------------------
  startBooking(doctorId) {
    this.state.bookingForm.doctorId = doctorId;
    this.state.bookingForm.step = 1;
    this.state.bookingForm.selectedTime = '02:30 PM';
    this.navigateTo('booking', doctorId);
  },

  selectBookingDate(dateStr) {
    this.state.bookingForm.selectedDate = dateStr;
    this.render();
  },

  selectBookingTime(timeSlot) {
    this.state.bookingForm.selectedTime = timeSlot;
    this.render();
  },

  updateBookingField(field, value) {
    this.state.bookingForm[field] = value;
  },

  nextBookingStep(stepNum) {
    this.state.bookingForm.step = stepNum;
    this.render();
  },

  submitBooking(doctorId) {
    const doc = MOCK_DATA.doctors.find(d => d.id === doctorId);
    const newBookingId = `MED-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBooking = {
      id: newBookingId,
      doctorId: doc.id,
      doctorName: doc.name,
      specialty: doc.specialty,
      hospital: doc.hospital,
      date: this.state.bookingForm.selectedDate,
      dateDisplay: this.state.bookingForm.selectedDate,
      time: this.state.bookingForm.selectedTime,
      patientName: this.state.bookingForm.patientName || 'Alex Morgan',
      patientPhone: this.state.bookingForm.patientPhone || '+1 (555) 234-5678',
      patientEmail: this.state.bookingForm.patientEmail || 'alex.morgan@example.com',
      consultType: this.state.bookingForm.consultType,
      status: 'Confirmed',
      smsNotificationSent: true,
      emailNotificationSent: true,
      createdAt: new Date().toISOString().split('T')[0]
    };

    // Add to state
    this.state.userBookings.unshift(newBooking);

    // Show simulated toast notification
    this.showToast(`SMS & Email reminder sent to ${newBooking.patientPhone}!`, 'success');
    
    // Navigate to confirmation page
    this.navigateTo('confirmation', newBookingId);
  },

  cancelBooking(bookingId) {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      this.state.userBookings = this.state.userBookings.filter(b => b.id !== bookingId);
      this.showToast(`Appointment ${bookingId} has been cancelled.`, 'info');
      this.render();
    }
  },

  showTicketModal(bookingId) {
    this.navigateTo('confirmation', bookingId);
  },

  simulateReceiptDownload() {
    this.showToast('Generating official PDF medical receipt...', 'info');
    setTimeout(() => {
      this.showToast('Medical receipt downloaded to your device!', 'success');
    }, 1200);
  },

  // ------------------------------------------------------------------------
  // AUTH & ROLE SWITCHING
  // ------------------------------------------------------------------------
  switchRole(role) {
    this.state.currentUserRole = role;
    this.render();
  },

  handleLoginSubmit() {
    const targetPage = this.state.currentUserRole === 'doctor' ? 'doctor-dashboard' : 'patient-dashboard';
    this.showToast(`Logged in successfully as ${this.state.currentUserRole === 'doctor' ? 'Dr. Sarah Jenkins' : 'Alex Morgan'}`, 'success');
    this.navigateTo(targetPage);
  },

  demoLogin(role) {
    this.state.currentUserRole = role;
    const targetPage = role === 'doctor' ? 'doctor-dashboard' : 'patient-dashboard';
    this.showToast(`Quick hackathon login executed as ${role.toUpperCase()}!`, 'success');
    this.navigateTo(targetPage);
  },

  triggerDoctorSMSBroadcast() {
    this.showToast('Batch SMS reminders dispatched to 3 scheduled patients!', 'success');
  },

  // ------------------------------------------------------------------------
  // TOAST NOTIFICATION SYSTEM
  // ------------------------------------------------------------------------
  showToast(message, type = 'info', duration = 4000) {
    const container = document.getElementById('toast-root');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let iconClass = 'fa-info-circle';
    if (type === 'success') iconClass = 'fa-check-circle';
    if (type === 'warning') iconClass = 'fa-exclamation-triangle';

    toast.innerHTML = `
      <div class="toast-icon">
        <i class="fa-solid ${iconClass}"></i>
      </div>
      <div class="toast-content">
        <h5>${type === 'success' ? 'Notification Sent' : 'Notice'}</h5>
        <p>${message}</p>
      </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease-out';
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }
};

// Bootstrap App when DOM ready
document.addEventListener('DOMContentLoaded', () => App.init());
