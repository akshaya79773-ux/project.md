/* ==========================================================================
   MEDPULSE SMARTCARE - DYNAMIC COMPONENT RENDERERS
   Reusable UI component builders for hackathon demo modularity
   ========================================================================== */

const Components = {
  // Render Sticky Navigation Bar
  renderNavbar(activePage, currentUserRole) {
    return `
      <header class="navbar">
        <div class="container nav-container">
          <a href="#" onclick="App.navigateTo('home'); return false;" class="brand-logo">
            <div class="logo-icon">
              <i class="fa-solid fa-heart-pulse heartbeat-icon"></i>
            </div>
            <span>Med<span class="text-gradient">Pulse</span></span>
          </a>

          <ul class="nav-menu" id="navMenu">
            <li>
              <a href="#" onclick="App.navigateTo('home'); return false;" class="nav-link ${activePage === 'home' ? 'active' : ''}">
                <i class="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li>
              <a href="#" onclick="App.navigateTo('search'); return false;" class="nav-link ${activePage === 'search' ? 'active' : ''}">
                <i class="fa-solid fa-user-doctor"></i> Find Doctors
              </a>
            </li>
            <li>
              <a href="#" onclick="App.navigateTo('patient-dashboard'); return false;" class="nav-link ${activePage === 'patient-dashboard' ? 'active' : ''}">
                <i class="fa-solid fa-calendar-check"></i> Patient Portal
              </a>
            </li>
            <li>
              <a href="#" onclick="App.navigateTo('doctor-dashboard'); return false;" class="nav-link ${activePage === 'doctor-dashboard' ? 'active' : ''}">
                <i class="fa-solid fa-stethoscope"></i> Doctor Portal
              </a>
            </li>
          </ul>

          <div class="nav-actions">
            <div class="user-badge" onclick="App.navigateTo('auth')" title="Switch Role or Account">
              <div class="user-avatar">
                <i class="fa-solid ${currentUserRole === 'doctor' ? 'fa-user-md' : 'fa-user'}"></i>
              </div>
              <div style="display:flex; flex-direction:column; align-items:flex-start; line-height:1.2;">
                <span style="font-size:0.8rem; font-weight:700;">${currentUserRole === 'doctor' ? 'Dr. Sarah' : 'Alex Morgan'}</span>
                <span style="font-size:0.68rem; color:var(--muted); text-transform:capitalize;">${currentUserRole} Mode</span>
              </div>
            </div>

            <button onclick="App.navigateTo('search')" class="btn btn-primary btn-sm">
              <i class="fa-solid fa-calendar-plus"></i> Book Now
            </button>

            <button class="mobile-toggle" onclick="App.toggleMobileMenu()">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
    `;
  },

  // Render Doctor Card
  renderDoctorCard(doctor) {
    return `
      <div class="doctor-card fade-in">
        <div class="flex-between">
          <div class="doctor-avatar-wrapper">
            <img src="${doctor.photo}" alt="${doctor.name}" class="doctor-avatar" loading="lazy">
            <span class="status-badge-dot" title="Available Today"></span>
          </div>
          <span class="badge badge-accent">
            <i class="fa-solid fa-shield-halved"></i> Verified
          </span>
        </div>

        <div class="doctor-info">
          <h3>${doctor.name} <span style="font-size:0.8rem; color:var(--muted); font-weight:500;">(${doctor.title})</span></h3>
          <div class="doctor-specialty">
            <i class="fa-solid fa-stethoscope"></i> ${doctor.specialty}
          </div>
          <div class="doctor-hospital">
            <i class="fa-solid fa-location-dot"></i> ${doctor.hospital}, ${doctor.location}
          </div>
        </div>

        <div class="doctor-meta-grid">
          <div class="meta-item">
            <div class="meta-label">Rating</div>
            <div class="meta-val" style="color: #f59e0b;">
              <i class="fa-solid fa-star"></i> ${doctor.rating}
            </div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Experience</div>
            <div class="meta-val">${doctor.experience} Yrs</div>
          </div>
          <div class="meta-item">
            <div class="meta-label">Consult Fee</div>
            <div class="meta-val">$${doctor.fee}</div>
          </div>
        </div>

        <div style="font-size:0.8rem; color:var(--accent-hover); font-weight:600; display:flex; align-items:center; gap:0.35rem; background:var(--accent-light); padding:0.4rem 0.75rem; border-radius:var(--radius-sm);">
          <i class="fa-solid fa-clock"></i> Next Slot: ${doctor.nextSlot}
        </div>

        <div class="flex-gap-sm" style="margin-top:0.25rem;">
          <button onclick="App.startBooking('${doctor.id}')" class="btn btn-primary btn-sm btn-full">
            <i class="fa-solid fa-calendar-check"></i> Book Appointment
          </button>
        </div>
      </div>
    `;
  },

  // Render Specialty Pill Card
  renderSpecialtyCard(specialty, isActive) {
    return `
      <div class="specialty-card ${isActive ? 'active' : ''}" onclick="App.filterBySpecialty('${specialty.name}')">
        <div class="specialty-icon">
          <i class="fa-solid ${specialty.icon}"></i>
        </div>
        <h4 style="font-size:0.95rem; margin-bottom:0.2rem;">${specialty.name}</h4>
        <span style="font-size:0.78rem; color:var(--muted); font-weight:600;">${specialty.doctorCount} Doctors</span>
      </div>
    `;
  },

  // Render Patient Dashboard Appointment Card
  renderPatientAppointmentCard(booking) {
    return `
      <div class="appointment-item-card fade-in">
        <div class="flex-gap-md">
          <div style="width:50px; height:50px; border-radius:var(--radius-md); background:var(--primary-light); color:var(--primary); display:flex; align-items:center; justify-content:center; font-size:1.4rem;">
            <i class="fa-solid fa-user-md"></i>
          </div>
          <div>
            <div class="flex-gap-sm" style="margin-bottom:0.2rem;">
              <h4 style="font-size:1.05rem;">${booking.doctorName}</h4>
              <span class="badge badge-primary">${booking.status}</span>
            </div>
            <p style="font-size:0.85rem; color:var(--muted); margin-bottom:0.25rem;">
              <i class="fa-solid fa-stethoscope"></i> ${booking.specialty} • <i class="fa-solid fa-building"></i> ${booking.hospital}
            </p>
            <div class="flex-gap-md" style="font-size:0.82rem; font-weight:600; color:var(--dark-subtle);">
              <span><i class="fa-regular fa-calendar" style="color:var(--primary);"></i> ${booking.dateDisplay || booking.date}</span>
              <span><i class="fa-regular fa-clock" style="color:var(--primary);"></i> ${booking.time}</span>
              <span><i class="fa-solid fa-video" style="color:var(--accent);"></i> ${booking.consultType}</span>
            </div>
          </div>
        </div>

        <div class="flex-gap-sm">
          <button onclick="App.showTicketModal('${booking.id}')" class="btn btn-outline btn-sm">
            <i class="fa-solid fa-qrcode"></i> QR Ticket
          </button>
          <button onclick="App.cancelBooking('${booking.id}')" class="btn btn-soft btn-sm" style="color:var(--danger); background:var(--danger-light);">
            <i class="fa-solid fa-xmark"></i> Cancel
          </button>
        </div>
      </div>
    `;
  },

  // Render Footer
  renderFooter() {
    return `
      <footer class="footer">
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <div class="brand-logo" style="color:white; margin-bottom:1rem;">
                <div class="logo-icon">
                  <i class="fa-solid fa-heart-pulse"></i>
                </div>
                <span>MedPulse</span>
              </div>
              <p>Smart Healthcare Appointment System empowering patients and healthcare providers with instant booking and automated reminders.</p>
              <div class="flex-gap-sm" style="margin-top:1.25rem;">
                <span class="badge badge-accent"><i class="fa-solid fa-shield-virus"></i> HIPAA Compliant</span>
                <span class="badge badge-primary"><i class="fa-solid fa-bolt"></i> Instant Confirmation</span>
              </div>
            </div>

            <div class="footer-col">
              <h4>Quick Links</h4>
              <ul class="footer-links">
                <li><a href="#" onclick="App.navigateTo('home'); return false;">Home</a></li>
                <li><a href="#" onclick="App.navigateTo('search'); return false;">Find Specialists</a></li>
                <li><a href="#" onclick="App.navigateTo('patient-dashboard'); return false;">Patient Portal</a></li>
                <li><a href="#" onclick="App.navigateTo('doctor-dashboard'); return false;">Doctor Schedule</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Specialties</h4>
              <ul class="footer-links">
                <li><a href="#" onclick="App.filterBySpecialty('Cardiology'); return false;">Cardiology</a></li>
                <li><a href="#" onclick="App.filterBySpecialty('Neurology'); return false;">Neurology</a></li>
                <li><a href="#" onclick="App.filterBySpecialty('Pediatrics'); return false;">Pediatrics</a></li>
                <li><a href="#" onclick="App.filterBySpecialty('Orthopedics'); return false;">Orthopedics</a></li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>Emergency Contact</h4>
              <p style="font-size:0.85rem; color:#94a3b8; margin-bottom:0.75rem;">
                <i class="fa-solid fa-phone" style="color:var(--accent);"></i> 24/7 Helpline: <strong>+1 (800) 555-MEDS</strong>
              </p>
              <p style="font-size:0.85rem; color:#94a3b8;">
                <i class="fa-solid fa-envelope" style="color:var(--primary);"></i> support@medpulse.health
              </p>
            </div>
          </div>

          <div class="footer-bottom">
            <p>© 2026 MedPulse SmartCare. Designed for Hackathon Demo.</p>
            <div class="flex-gap-md">
              <a href="#" style="color:#94a3b8; text-decoration:none;">Privacy Policy</a>
              <a href="#" style="color:#94a3b8; text-decoration:none;">Terms of Service</a>
              <a href="#" style="color:#94a3b8; text-decoration:none;">Security</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
};
