/* ==========================================================================
   MEDPULSE SMARTCARE - PAGE VIEW TEMPLATES & FLOWS
   ========================================================================== */

const Pages = {
  // ------------------------------------------------------------------------
  // 1. HOME / LANDING PAGE
  // ------------------------------------------------------------------------
  home() {
    const featuredDoctors = MOCK_DATA.doctors.slice(0, 3);
    return `
      <div class="fade-in">
        <!-- Hero Section -->
        <section class="hero-section container">
          <div class="hero-grid">
            <div class="hero-content">
              <span class="badge badge-accent" style="margin-bottom: 1rem;">
                <i class="fa-solid fa-sparkles"></i> AI-Powered Healthcare Appointments
              </span>
              <h1>Smart Healthcare <br><span class="text-gradient">at Your Fingertips</span></h1>
              <p>Find top-rated doctors, book instant appointments with zero waiting time, and receive automated SMS & Email reminders straight to your device.</p>
              
              <div class="hero-cta-group">
                <button onclick="App.navigateTo('search')" class="btn btn-primary btn-lg">
                  <i class="fa-solid fa-calendar-check"></i> Book Appointment Now
                </button>
                <button onclick="App.navigateTo('search')" class="btn btn-outline btn-lg">
                  <i class="fa-solid fa-magnifying-glass"></i> Explore Doctors
                </button>
              </div>

              <div class="hero-stats-row">
                <div class="stat-item">
                  <h4>50+</h4>
                  <p>Verified Doctors</p>
                </div>
                <div class="stat-item">
                  <h4>4.9 ★</h4>
                  <p>Patient Rating</p>
                </div>
                <div class="stat-item">
                  <h4>10k+</h4>
                  <p>Bookings Done</p>
                </div>
              </div>
            </div>

            <div class="hero-visual">
              <div class="hero-main-card">
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" alt="Healthcare Doctors Team" class="hero-card-img">
                <div style="padding: 1.25rem;">
                  <div class="flex-between" style="margin-bottom:0.5rem;">
                    <span class="badge badge-primary"><i class="fa-solid fa-hospital"></i> Medical Hub</span>
                    <span class="pulse-dot"></span>
                  </div>
                  <h4 style="font-size:1.1rem; margin-bottom:0.2rem;">Seamless Consultation</h4>
                  <p style="font-size:0.85rem;">Connect with top specialists in-person or via video teleconsultation.</p>
                </div>
              </div>

              <div class="hero-floating-badge floating-top animate-float">
                <div style="width:40px; height:40px; border-radius:50%; background:var(--accent-light); color:var(--accent); display:flex; align-items:center; justify-content:center; font-size:1.2rem;">
                  <i class="fa-solid fa-bell"></i>
                </div>
                <div>
                  <div style="font-weight:700; font-size:0.85rem;">SMS Reminder</div>
                  <div style="font-size:0.75rem; color:var(--accent-hover); font-weight:600;">Sent 1 hour prior 📱</div>
                </div>
              </div>

              <div class="hero-floating-badge floating-bottom animate-float" style="animation-delay: 2s;">
                <div style="width:40px; height:40px; border-radius:50%; background:var(--primary-light); color:var(--primary); display:flex; align-items:center; justify-content:center; font-size:1.2rem;">
                  <i class="fa-solid fa-clock"></i>
                </div>
                <div>
                  <div style="font-weight:700; font-size:0.85rem;">Zero Waiting Time</div>
                  <div style="font-size:0.75rem; color:var(--primary-dark);">Instant confirmation ⏱️</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Features Section -->
        <section class="features-section">
          <div class="container">
            <div class="section-header">
              <span class="tag">Why Choose MedPulse</span>
              <h2>Designed for Modern Healthcare</h2>
              <p>Everything you need for a frictionless doctor booking and health schedule management experience.</p>
            </div>

            <div class="features-grid">
              <div class="feature-box">
                <div class="feature-icon-wrapper">
                  <i class="fa-solid fa-magnifying-glass-location"></i>
                </div>
                <h4 style="margin-bottom:0.5rem;">Smart Specialist Search</h4>
                <p style="font-size:0.88rem;">Filter doctors by medical specialty, hospital affiliation, location, and rating.</p>
              </div>

              <div class="feature-box">
                <div class="feature-icon-wrapper" style="background:var(--accent-light); color:var(--accent);">
                  <i class="fa-solid fa-calendar-days"></i>
                </div>
                <h4 style="margin-bottom:0.5rem;">Live Time Slot Selection</h4>
                <p style="font-size:0.88rem;">Real-time available appointment slots with interactive date selection.</p>
              </div>

              <div class="feature-box">
                <div class="feature-icon-wrapper" style="background:#fef3c7; color:#b45309;">
                  <i class="fa-solid fa-comment-sms"></i>
                </div>
                <h4 style="margin-bottom:0.5rem;">Automated Reminders</h4>
                <p style="font-size:0.88rem;">Simulated SMS, Email, and WhatsApp alerts so you never miss a visit.</p>
              </div>

              <div class="feature-box">
                <div class="feature-icon-wrapper" style="background:#f1f5f9; color:var(--dark);">
                  <i class="fa-solid fa-columns"></i>
                </div>
                <h4 style="margin-bottom:0.5rem;">Dual Portal Access</h4>
                <p style="font-size:0.88rem;">Intuitive dashboards tailored for both Patients and Doctor practice management.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- Specialties Section -->
        <section class="specialties-section container">
          <div class="flex-between" style="margin-bottom: 2rem;">
            <div>
              <span class="tag">Medical Specialties</span>
              <h2>Browse by Specialty</h2>
            </div>
            <button onclick="App.navigateTo('search')" class="btn btn-outline btn-sm">View All Specialties</button>
          </div>

          <div class="specialties-grid">
            ${MOCK_DATA.specialties.map(s => Components.renderSpecialtyCard(s, App.state.selectedSpecialty === s.name)).join('')}
          </div>
        </section>

        <!-- Top Doctors Spotlight -->
        <section class="container" style="padding: 3rem 0 5rem 0;">
          <div class="flex-between" style="margin-bottom: 2rem;">
            <div>
              <span class="tag">Top Rated Practitioners</span>
              <h2>Meet Our Leading Specialists</h2>
            </div>
            <button onclick="App.navigateTo('search')" class="btn btn-primary btn-sm">See All Doctors</button>
          </div>

          <div class="doctors-results-grid">
            ${featuredDoctors.map(d => Components.renderDoctorCard(d)).join('')}
          </div>
        </section>
      </div>
    `;
  },

  // ------------------------------------------------------------------------
  // 2. DOCTOR SEARCH & LISTING PAGE
  // ------------------------------------------------------------------------
  search() {
    const { searchQuery, selectedSpecialty, selectedHospital, selectedLocation } = App.state;
    
    // Filter doctors
    const filteredDoctors = MOCK_DATA.doctors.filter(d => {
      const matchQuery = !searchQuery || 
        d.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        d.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        d.hospital.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchSpecialty = !selectedSpecialty || selectedSpecialty === 'All' || d.specialty === selectedSpecialty;
      const matchHospital = !selectedHospital || selectedHospital === 'All' || d.hospital === selectedHospital;
      const matchLocation = !selectedLocation || selectedLocation === 'All' || d.location === selectedLocation;

      return matchQuery && matchSpecialty && matchHospital && matchLocation;
    });

    return `
      <div class="fade-in">
        <!-- Search Banner -->
        <div class="search-hero">
          <div class="container">
            <span class="badge badge-accent" style="margin-bottom:0.75rem;">Verified Medical Faculty</span>
            <h2>Find & Book Top Doctors</h2>
            <p style="color:#cbd5e1;">Search by doctor name, medical specialty, hospital, or city location.</p>

            <div class="search-bar-card">
              <div class="input-wrapper">
                <i class="fa-solid fa-magnifying-glass input-icon"></i>
                <input type="text" id="searchInput" class="form-input" placeholder="Search doctor, specialty, or condition..." value="${searchQuery}" onkeyup="App.handleSearchInput(event)">
              </div>

              <select class="form-select" onchange="App.handleFilterChange('selectedSpecialty', this.value)">
                <option value="All">All Specialties</option>
                ${MOCK_DATA.specialties.map(s => `<option value="${s.name}" ${selectedSpecialty === s.name ? 'selected' : ''}>${s.name}</option>`).join('')}
              </select>

              <select class="form-select" onchange="App.handleFilterChange('selectedHospital', this.value)">
                <option value="All">All Hospitals</option>
                ${MOCK_DATA.hospitals.map(h => `<option value="${h}" ${selectedHospital === h ? 'selected' : ''}>${h}</option>`).join('')}
              </select>

              <select class="form-select" onchange="App.handleFilterChange('selectedLocation', this.value)">
                <option value="All">All Locations</option>
                ${MOCK_DATA.locations.map(l => `<option value="${l}" ${selectedLocation === l ? 'selected' : ''}>${l}</option>`).join('')}
              </select>

              <button onclick="App.resetFilters()" class="btn btn-soft" title="Reset Filters">
                <i class="fa-solid fa-rotate-left"></i> Reset
              </button>
            </div>
          </div>
        </div>

        <!-- Search Results Container -->
        <div class="container">
          <div class="flex-between" style="margin-bottom: 1.5rem;">
            <div style="font-weight:700; color:var(--dark);">
              Showing <span style="color:var(--primary);">${filteredDoctors.length}</span> Verified Specialists
            </div>
            ${selectedSpecialty && selectedSpecialty !== 'All' ? `
              <span class="badge badge-primary">Filter: ${selectedSpecialty} <i class="fa-solid fa-xmark" onclick="App.handleFilterChange('selectedSpecialty', 'All')" style="cursor:pointer; margin-left:4px;"></i></span>
            ` : ''}
          </div>

          ${filteredDoctors.length > 0 ? `
            <div class="doctors-results-grid">
              ${filteredDoctors.map(d => Components.renderDoctorCard(d)).join('')}
            </div>
          ` : `
            <div class="glass-card" style="text-align:center; padding:4rem 2rem; margin-bottom:4rem;">
              <div style="font-size:3rem; color:var(--muted); margin-bottom:1rem;">
                <i class="fa-solid fa-user-doctor-hair"></i>
              </div>
              <h3>No Doctors Found</h3>
              <p style="margin-bottom:1.5rem;">Try adjusting your search criteria or resetting filters.</p>
              <button onclick="App.resetFilters()" class="btn btn-primary">Reset Filters</button>
            </div>
          `}
        </div>
      </div>
    `;
  },

  // ------------------------------------------------------------------------
  // 3. APPOINTMENT BOOKING WIZARD
  // ------------------------------------------------------------------------
  booking(doctorId) {
    const doctor = MOCK_DATA.doctors.find(d => d.id === doctorId) || MOCK_DATA.doctors[0];
    const bookingState = App.state.bookingForm;

    // Generate next 7 days pills
    const dates = [];
    const today = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    for (let i = 0; i < 7; i++) {
      const d = new Date(today);
      d.setDate(today.getDate() + i);
      const dateStr = d.toISOString().split('T')[0];
      dates.push({
        dateStr,
        dayName: i === 0 ? 'Today' : days[d.getDay()],
        dayNum: d.getDate(),
        monthName: months[d.getMonth()]
      });
    }

    return `
      <div class="fade-in container">
        <div class="booking-container">
          <!-- Wizard Header -->
          <div class="wizard-header">
            <div>
              <span class="badge badge-accent" style="margin-bottom:0.4rem;">Appointment Booking</span>
              <h2 style="color:white; font-size:1.5rem;">${doctor.name}</h2>
              <p style="color:#e0f2fe; font-size:0.85rem;">${doctor.specialty} • ${doctor.hospital}</p>
            </div>
            <div style="text-align:right;">
              <div style="font-size:0.78rem; text-transform:uppercase; color:#bae6fd; font-weight:700;">Consultation Fee</div>
              <div style="font-size:1.6rem; font-weight:800; color:white;">$${doctor.fee}</div>
            </div>
          </div>

          <!-- Wizard Step Indicator Bar -->
          <div class="wizard-steps">
            <div class="wizard-step ${bookingState.step >= 1 ? 'active' : ''} ${bookingState.step > 1 ? 'completed' : ''}">
              <span class="wizard-step-num">1</span> Date & Time Slot
            </div>
            <div class="wizard-step ${bookingState.step >= 2 ? 'active' : ''} ${bookingState.step > 2 ? 'completed' : ''}">
              <span class="wizard-step-num">2</span> Patient Info & Consult
            </div>
            <div class="wizard-step ${bookingState.step >= 3 ? 'active' : ''}">
              <span class="wizard-step-num">3</span> Confirm & Reminders
            </div>
          </div>

          <div class="wizard-content">
            ${bookingState.step === 1 ? `
              <!-- STEP 1: DATE & TIME SELECTOR -->
              <h4 style="margin-bottom:1rem;">1. Select Appointment Date</h4>
              <div class="date-selector-grid">
                ${dates.map(d => `
                  <div class="date-pill ${bookingState.selectedDate === d.dateStr ? 'selected' : ''}" onclick="App.selectBookingDate('${d.dateStr}')">
                    <div class="day-name">${d.dayName}</div>
                    <div class="day-num">${d.dayNum}</div>
                    <div class="month-name">${d.monthName}</div>
                  </div>
                `).join('')}
              </div>

              <h4 style="margin-bottom:1rem;">2. Select Available Time Slot</h4>
              <div class="time-slots-section">
                <h5><i class="fa-solid fa-sun" style="color:#f59e0b;"></i> Morning Slots</h5>
                <div class="slots-grid">
                  ${['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'].map(slot => `
                    <div class="slot-btn ${bookingState.selectedTime === slot ? 'selected' : ''}" onclick="App.selectBookingTime('${slot}')">
                      ${slot}
                    </div>
                  `).join('')}
                </div>

                <h5><i class="fa-solid fa-cloud-sun" style="color:var(--primary);"></i> Afternoon Slots</h5>
                <div class="slots-grid">
                  ${['01:30 PM', '02:00 PM', '02:30 PM', '03:30 PM', '04:00 PM'].map(slot => `
                    <div class="slot-btn ${bookingState.selectedTime === slot ? 'selected' : ''}" onclick="App.selectBookingTime('${slot}')">
                      ${slot}
                    </div>
                  `).join('')}
                </div>
              </div>

              <div class="flex-between" style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid #e2e8f0;">
                <button onclick="App.navigateTo('search')" class="btn btn-soft">Cancel</button>
                <button onclick="App.nextBookingStep(2)" class="btn btn-primary" ${!bookingState.selectedTime ? 'disabled' : ''}>
                  Continue to Patient Info <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            ` : bookingState.step === 2 ? `
              <!-- STEP 2: PATIENT INFORMATION -->
              <h4 style="margin-bottom:1.5rem;">Patient Details & Consultation Type</h4>
              
              <div class="form-group">
                <label class="form-label">Consultation Mode</label>
                <div class="flex-gap-md">
                  <label class="form-checkbox-label glass-card" style="padding:0.75rem 1.25rem; flex:1;">
                    <input type="radio" name="consultType" value="In-Person Visit" ${bookingState.consultType === 'In-Person Visit' ? 'checked' : ''} onchange="App.updateBookingField('consultType', this.value)">
                    <span><i class="fa-solid fa-hospital-user" style="color:var(--primary);"></i> In-Person Visit</span>
                  </label>
                  <label class="form-checkbox-label glass-card" style="padding:0.75rem 1.25rem; flex:1;">
                    <input type="radio" name="consultType" value="Video Teleconsultation" ${bookingState.consultType === 'Video Teleconsultation' ? 'checked' : ''} onchange="App.updateBookingField('consultType', this.value)">
                    <span><i class="fa-solid fa-video" style="color:var(--accent);"></i> Video Teleconsult</span>
                  </label>
                </div>
              </div>

              <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem;">
                <div class="form-group">
                  <label class="form-label">Full Name</label>
                  <input type="text" class="form-input" value="${bookingState.patientName}" onchange="App.updateBookingField('patientName', this.value)" placeholder="Enter patient name">
                </div>
                <div class="form-group">
                  <label class="form-label">Mobile Number (For SMS Reminder)</label>
                  <input type="tel" class="form-input" value="${bookingState.patientPhone}" onchange="App.updateBookingField('patientPhone', this.value)" placeholder="+1 (555) 000-0000">
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Email Address (For Confirmation & QR Ticket)</label>
                <input type="email" class="form-input" value="${bookingState.patientEmail}" onchange="App.updateBookingField('patientEmail', this.value)" placeholder="patient@example.com">
              </div>

              <div class="form-group">
                <label class="form-label">Reason for Visit / Symptoms (Optional)</label>
                <textarea class="form-textarea" rows="3" placeholder="Briefly describe your symptoms or routine checkup requirement..."></textarea>
              </div>

              <div class="flex-between" style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid #e2e8f0;">
                <button onclick="App.nextBookingStep(1)" class="btn btn-soft"><i class="fa-solid fa-arrow-left"></i> Back</button>
                <button onclick="App.nextBookingStep(3)" class="btn btn-primary">
                  Review & Confirm <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            ` : `
              <!-- STEP 3: REVIEW & REMINDERS -->
              <h4 style="margin-bottom:1.5rem;">Review Booking Summary & Reminder Options</h4>

              <div class="glass-card" style="padding:1.5rem; margin-bottom:1.5rem;">
                <div class="flex-between" style="margin-bottom:0.75rem;">
                  <span class="badge badge-accent">Selected Doctor</span>
                  <span style="font-weight:700; color:var(--primary);">$${doctor.fee}</span>
                </div>
                <h3>${doctor.name}</h3>
                <p style="font-size:0.9rem; margin-bottom:1rem;">${doctor.specialty} • ${doctor.hospital}</p>

                <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap:0.75rem; background:var(--light-bg); padding:0.85rem; border-radius:var(--radius-md);">
                  <div>
                    <div style="font-size:0.72rem; color:var(--muted); font-weight:700;">DATE</div>
                    <div style="font-weight:700; font-size:0.9rem;">${bookingState.selectedDate}</div>
                  </div>
                  <div>
                    <div style="font-size:0.72rem; color:var(--muted); font-weight:700;">TIME SLOT</div>
                    <div style="font-weight:700; font-size:0.9rem;">${bookingState.selectedTime}</div>
                  </div>
                  <div>
                    <div style="font-size:0.72rem; color:var(--muted); font-weight:700;">TYPE</div>
                    <div style="font-weight:700; font-size:0.9rem;">${bookingState.consultType}</div>
                  </div>
                </div>
              </div>

              <div class="glass-card" style="padding:1.5rem; margin-bottom:1.5rem; border-left:4px solid var(--accent);">
                <h4 style="font-size:1rem; margin-bottom:0.5rem; display:flex; align-items:center; gap:0.5rem;">
                  <i class="fa-solid fa-bell" style="color:var(--accent);"></i> Automated Reminder Settings (SMS & Email)
                </h4>
                <p style="font-size:0.85rem; margin-bottom:1rem;">Our system automatically dispatches notifications so you never forget your appointment.</p>
                
                <div style="display:flex; flex-direction:column; gap:0.65rem;">
                  <label class="form-checkbox-label">
                    <input type="checkbox" checked class="form-checkbox" disabled>
                    <span>Instant Email Receipt sent to <strong>${bookingState.patientEmail || 'alex.morgan@example.com'}</strong></span>
                  </label>
                  <label class="form-checkbox-label">
                    <input type="checkbox" checked class="form-checkbox" disabled>
                    <span>SMS Alert 2 Hours Prior to <strong>${bookingState.patientPhone || '+1 (555) 234-5678'}</strong></span>
                  </label>
                </div>
              </div>

              <div class="flex-between" style="margin-top:2rem; padding-top:1.5rem; border-top:1px solid #e2e8f0;">
                <button onclick="App.nextBookingStep(2)" class="btn btn-soft"><i class="fa-solid fa-arrow-left"></i> Back</button>
                <button onclick="App.submitBooking('${doctor.id}')" class="btn btn-accent btn-lg">
                  <i class="fa-solid fa-check-circle"></i> Confirm & Book Appointment
                </button>
              </div>
            `}
          </div>
        </div>
      </div>
    `;
  },

  // ------------------------------------------------------------------------
  // 4. APPOINTMENT CONFIRMATION PAGE
  // ------------------------------------------------------------------------
  confirmation(bookingId) {
    const booking = App.state.userBookings.find(b => b.id === bookingId) || App.state.userBookings[0];
    
    return `
      <div class="fade-in container">
        <div class="confirmation-card">
          <div class="confirmation-header">
            <div class="success-check-animated">
              <i class="fa-solid fa-check"></i>
            </div>
            <h2 style="color:white; margin-bottom:0.25rem;">Booking Confirmed!</h2>
            <p style="color:#ecfdf5; font-size:0.9rem;">Your appointment has been successfully scheduled.</p>
          </div>

          <div class="ticket-body">
            <div class="flex-between" style="padding-bottom:1rem; border-bottom:1px dashed #cbd5e1; margin-bottom:1.25rem;">
              <div>
                <span style="font-size:0.75rem; color:var(--muted); font-weight:700; text-transform:uppercase;">BOOKING REFERENCE</span>
                <div style="font-size:1.25rem; font-weight:800; color:var(--primary);">${booking.id}</div>
              </div>
              <span class="badge badge-accent"><i class="fa-solid fa-circle-check"></i> Confirmed</span>
            </div>

            <div style="display:grid; grid-template-columns:1fr 1fr; gap:1.25rem; margin-bottom:1.25rem;">
              <div>
                <span style="font-size:0.75rem; color:var(--muted); font-weight:700;">DOCTOR</span>
                <div style="font-weight:700; color:var(--dark);">${booking.doctorName}</div>
                <div style="font-size:0.82rem; color:var(--muted);">${booking.specialty}</div>
              </div>
              <div>
                <span style="font-size:0.75rem; color:var(--muted); font-weight:700;">LOCATION</span>
                <div style="font-weight:700; color:var(--dark);">${booking.hospital}</div>
              </div>
              <div>
                <span style="font-size:0.75rem; color:var(--muted); font-weight:700;">DATE & TIME</span>
                <div style="font-weight:700; color:var(--dark);">${booking.dateDisplay || booking.date}</div>
                <div style="font-size:0.82rem; color:var(--primary); font-weight:600;">${booking.time}</div>
              </div>
              <div>
                <span style="font-size:0.75rem; color:var(--muted); font-weight:700;">PATIENT</span>
                <div style="font-weight:700; color:var(--dark);">${booking.patientName}</div>
              </div>
            </div>

            <!-- Ticket QR Code Section -->
            <div class="ticket-qr-section">
              <div class="qr-placeholder">
                <i class="fa-solid fa-qrcode"></i>
              </div>
              <div>
                <div style="font-weight:700; font-size:0.9rem; margin-bottom:0.2rem;">Digital Clinic Pass</div>
                <p style="font-size:0.8rem; margin-bottom:0.4rem;">Show this QR code at clinic reception desk for instant check-in.</p>
                <div style="font-size:0.75rem; color:var(--accent-hover); font-weight:600;">
                  <i class="fa-solid fa-comment-sms"></i> SMS Reminder Queued for ${booking.patientPhone}
                </div>
              </div>
            </div>

            <div class="flex-gap-sm" style="margin-top:2rem;">
              <button onclick="App.simulateReceiptDownload()" class="btn btn-outline btn-full btn-sm">
                <i class="fa-solid fa-download"></i> Download Receipt
              </button>
              <button onclick="App.navigateTo('patient-dashboard')" class="btn btn-primary btn-full btn-sm">
                <i class="fa-solid fa-user"></i> View in Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // ------------------------------------------------------------------------
  // 5. PATIENT DASHBOARD PAGE
  // ------------------------------------------------------------------------
  patientDashboard() {
    const { userBookings, pastBookings } = App.state;

    return `
      <div class="fade-in container">
        <div class="dashboard-layout">
          <!-- Sidebar -->
          <div class="dashboard-sidebar">
            <div class="profile-summary">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" alt="Alex Morgan" class="profile-avatar">
              <h3 style="font-size:1.1rem; margin-bottom:0.1rem;">Alex Morgan</h3>
              <p style="font-size:0.8rem; color:var(--muted);">Patient ID: #PAT-9082</p>
              <span class="badge badge-accent" style="margin-top:0.5rem;"><i class="fa-solid fa-shield"></i> Premium Health Pass</span>
            </div>

            <ul class="dash-nav">
              <li>
                <a href="#" class="dash-nav-link active">
                  <i class="fa-solid fa-calendar-check" style="color:var(--primary);"></i> My Appointments
                </a>
              </li>
              <li>
                <a href="#" onclick="App.navigateTo('search'); return false;" class="dash-nav-link">
                  <i class="fa-solid fa-plus-circle" style="color:var(--accent);"></i> Book New Visit
                </a>
              </li>
              <li>
                <a href="#" class="dash-nav-link">
                  <i class="fa-solid fa-bell" style="color:var(--warning);"></i> SMS & Email Reminders
                </a>
              </li>
              <li>
                <a href="#" class="dash-nav-link">
                  <i class="fa-solid fa-file-medical"></i> Prescriptions & History
                </a>
              </li>
            </ul>
          </div>

          <!-- Main Content Area -->
          <div>
            <div class="flex-between" style="margin-bottom:1.5rem;">
              <div>
                <h2>Patient Dashboard</h2>
                <p>Manage your health appointments and reminder notifications.</p>
              </div>
              <button onclick="App.navigateTo('search')" class="btn btn-primary btn-sm">
                <i class="fa-solid fa-plus"></i> New Appointment
              </button>
            </div>

            <!-- Stats Widgets Grid -->
            <div class="stats-cards-grid">
              <div class="stat-widget">
                <div class="stat-icon blue">
                  <i class="fa-solid fa-calendar-days"></i>
                </div>
                <div class="stat-info">
                  <h3>${userBookings.length}</h3>
                  <p>Upcoming Visits</p>
                </div>
              </div>

              <div class="stat-widget">
                <div class="stat-icon green">
                  <i class="fa-solid fa-circle-check"></i>
                </div>
                <div class="stat-info">
                  <h3>${pastBookings.length}</h3>
                  <p>Completed Visits</p>
                </div>
              </div>

              <div class="stat-widget">
                <div class="stat-icon amber">
                  <i class="fa-solid fa-bell"></i>
                </div>
                <div class="stat-info">
                  <h3>${userBookings.length}</h3>
                  <p>Active Reminders</p>
                </div>
              </div>
            </div>

            <!-- Upcoming Appointments Section -->
            <h3 style="margin-bottom:1rem; font-size:1.25rem;">Upcoming Scheduled Appointments</h3>
            ${userBookings.length > 0 ? `
              ${userBookings.map(b => Components.renderPatientAppointmentCard(b)).join('')}
            ` : `
              <div class="glass-card" style="padding:2rem; text-align:center; margin-bottom:2rem;">
                <p>No upcoming appointments scheduled.</p>
                <button onclick="App.navigateTo('search')" class="btn btn-primary btn-sm" style="margin-top:0.75rem;">Book Now</button>
              </div>
            `}

            <!-- Appointment History -->
            <h3 style="margin-top:2.5rem; margin-bottom:1rem; font-size:1.25rem;">Past Consultation History</h3>
            <div class="glass-card" style="padding:1.25rem;">
              ${pastBookings.map(pb => `
                <div style="padding:1rem 0; border-bottom:1px solid #e2e8f0; display:flex; align-items:center; justify-content:space-between;">
                  <div>
                    <h4 style="font-size:1rem; margin-bottom:0.2rem;">${pb.doctorName} (${pb.specialty})</h4>
                    <p style="font-size:0.82rem; color:var(--muted);">${pb.dateDisplay} • ${pb.consultType}</p>
                    <p style="font-size:0.82rem; color:var(--dark-subtle); margin-top:0.25rem;"><em>Note: ${pb.notes}</em></p>
                  </div>
                  <span class="badge badge-dark">Completed</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // ------------------------------------------------------------------------
  // 6. DOCTOR DASHBOARD PAGE
  // ------------------------------------------------------------------------
  doctorDashboard() {
    return `
      <div class="fade-in container">
        <div class="dashboard-layout">
          <!-- Sidebar -->
          <div class="dashboard-sidebar">
            <div class="profile-summary">
              <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80" alt="Dr. Sarah Jenkins" class="profile-avatar">
              <h3 style="font-size:1.1rem; margin-bottom:0.1rem;">Dr. Sarah Jenkins</h3>
              <p style="font-size:0.8rem; color:var(--primary); font-weight:600;">Cardiology Specialist</p>
              <span class="badge badge-primary" style="margin-top:0.5rem;"><i class="fa-solid fa-hospital"></i> Westside Medical</span>
            </div>

            <ul class="dash-nav">
              <li><a href="#" class="dash-nav-link active"><i class="fa-solid fa-list-check" style="color:var(--primary);"></i> Today's Queue</a></li>
              <li><a href="#" class="dash-nav-link"><i class="fa-solid fa-clock" style="color:var(--accent);"></i> Manage Slot Schedule</a></li>
              <li><a href="#" class="dash-nav-link"><i class="fa-solid fa-comment-medical" style="color:var(--warning);"></i> SMS Broadcasts</a></li>
            </ul>
          </div>

          <!-- Main Content -->
          <div>
            <div class="flex-between" style="margin-bottom:1.5rem;">
              <div>
                <h2>Doctor Schedule Portal</h2>
                <p>Manage today's consultations, patient check-ins, and slot availability.</p>
              </div>
              <button onclick="App.triggerDoctorSMSBroadcast()" class="btn btn-accent btn-sm">
                <i class="fa-solid fa-paper-plane"></i> Send SMS Reminders to Today's Patients
              </button>
            </div>

            <!-- Stats Bar -->
            <div class="stats-cards-grid">
              <div class="stat-widget">
                <div class="stat-icon blue"><i class="fa-solid fa-users"></i></div>
                <div class="stat-info">
                  <h3>4</h3>
                  <p>Patients Today</p>
                </div>
              </div>
              <div class="stat-widget">
                <div class="stat-icon green"><i class="fa-solid fa-user-check"></i></div>
                <div class="stat-info">
                  <h3>1</h3>
                  <p>In Consultation</p>
                </div>
              </div>
              <div class="stat-widget">
                <div class="stat-icon amber"><i class="fa-solid fa-clock"></i></div>
                <div class="stat-info">
                  <h3>3</h3>
                  <p>Slots Remaining</p>
                </div>
              </div>
            </div>

            <!-- Patient Queue Table -->
            <h3 style="margin-bottom:1rem; font-size:1.2rem;">Today's Patient Appointments (Jul 24, 2026)</h3>
            <div class="glass-card" style="padding:1.25rem; overflow-x:auto;">
              <table style="width:100%; border-collapse:collapse; text-align:left; font-size:0.9rem;">
                <thead>
                  <tr style="border-bottom:2px solid #e2e8f0; color:var(--muted); font-size:0.8rem; text-transform:uppercase;">
                    <th style="padding:0.75rem;">Time</th>
                    <th style="padding:0.75rem;">Patient Name</th>
                    <th style="padding:0.75rem;">Consult Mode</th>
                    <th style="padding:0.75rem;">Status</th>
                    <th style="padding:0.75rem; text-align:right;">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom:1px solid #f1f5f9;">
                    <td style="padding:0.85rem; font-weight:700; color:var(--primary);">09:00 AM</td>
                    <td style="padding:0.85rem; font-weight:600;">Michael Chang</td>
                    <td style="padding:0.85rem;"><span class="badge badge-dark">In-Person</span></td>
                    <td style="padding:0.85rem;"><span class="badge badge-accent">In Consultation</span></td>
                    <td style="padding:0.85rem; text-align:right;">
                      <button onclick="App.showToast('Visit Completed for Michael Chang', 'success')" class="btn btn-soft btn-sm">Complete</button>
                    </td>
                  </tr>
                  <tr style="border-bottom:1px solid #f1f5f9;">
                    <td style="padding:0.85rem; font-weight:700; color:var(--primary);">10:30 AM</td>
                    <td style="padding:0.85rem; font-weight:600;">Sophia Roberts</td>
                    <td style="padding:0.85rem;"><span class="badge badge-primary">Video Call</span></td>
                    <td style="padding:0.85rem;"><span class="badge badge-warning">Waiting</span></td>
                    <td style="padding:0.85rem; text-align:right;">
                      <button onclick="App.showToast('Calling Sophia Roberts...', 'info')" class="btn btn-primary btn-sm">Start Call</button>
                    </td>
                  </tr>
                  <tr style="border-bottom:1px solid #f1f5f9;">
                    <td style="padding:0.85rem; font-weight:700; color:var(--primary);">02:30 PM</td>
                    <td style="padding:0.85rem; font-weight:600;">Alex Morgan</td>
                    <td style="padding:0.85rem;"><span class="badge badge-dark">In-Person</span></td>
                    <td style="padding:0.85rem;"><span class="badge badge-primary">Confirmed</span></td>
                    <td style="padding:0.85rem; text-align:right;">
                      <button onclick="App.showToast('SMS Reminder Sent to Alex Morgan', 'info')" class="btn btn-outline btn-sm">Send SMS</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  // ------------------------------------------------------------------------
  // 7. LOGIN & REGISTRATION AUTH MODAL / PAGE
  // ------------------------------------------------------------------------
  auth() {
    return `
      <div class="fade-in container" style="max-width:480px; margin:4rem auto;">
        <div class="glass-card" style="padding:2.25rem;">
          <div style="text-align:center; margin-bottom:1.75rem;">
            <div class="logo-icon" style="margin:0 auto 0.75rem auto; width:50px; height:50px; border-radius:var(--radius-md); background:linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%); color:white; display:flex; align-items:center; justify-content:center; font-size:1.5rem;">
              <i class="fa-solid fa-heart-pulse"></i>
            </div>
            <h2>Welcome to MedPulse</h2>
            <p style="font-size:0.9rem;">Patient & Doctor Portal Login</p>
          </div>

          <!-- Role Toggle -->
          <div class="flex-gap-sm" style="margin-bottom:1.5rem; background:#f1f5f9; padding:0.35rem; border-radius:var(--radius-md);">
            <button class="btn btn-sm btn-full ${App.state.currentUserRole === 'patient' ? 'btn-primary' : 'btn-soft'}" onclick="App.switchRole('patient')">
              <i class="fa-solid fa-user"></i> Patient
            </button>
            <button class="btn btn-sm btn-full ${App.state.currentUserRole === 'doctor' ? 'btn-primary' : 'btn-soft'}" onclick="App.switchRole('doctor')">
              <i class="fa-solid fa-user-md"></i> Doctor
            </button>
          </div>

          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-input" placeholder="user@example.com" value="${App.state.currentUserRole === 'doctor' ? 'dr.jenkins@medpulse.health' : 'alex.morgan@example.com'}">
          </div>

          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" value="••••••••">
          </div>

          <button onclick="App.handleLoginSubmit()" class="btn btn-primary btn-full btn-lg" style="margin-top:1rem;">
            Sign In as ${App.state.currentUserRole === 'doctor' ? 'Doctor' : 'Patient'}
          </button>

          <!-- Quick Demo Hackathon Login Button -->
          <div style="margin-top:1.5rem; padding-top:1.25rem; border-top:1px dashed #cbd5e1; text-align:center;">
            <p style="font-size:0.8rem; font-weight:700; color:var(--muted); margin-bottom:0.75rem;">HACKATHON QUICK DEMO LOGIN</p>
            <button onclick="App.demoLogin('${App.state.currentUserRole}')" class="btn btn-accent btn-sm btn-full">
              <i class="fa-solid fa-bolt"></i> Instant 1-Click Demo Entry
            </button>
          </div>
        </div>
      </div>
    `;
  }
};
