/* ==========================================================================
   MEDPULSE SMARTCARE - MOCK DATA SOURCE
   Comprehensive realistic sample data for demoing the hackathon system
   ========================================================================== */

const MOCK_DATA = {
  specialties: [
    { id: 'cardiology', name: 'Cardiology', icon: 'fa-heart-pulse', doctorCount: 12, description: 'Heart health & cardiovascular care' },
    { id: 'neurology', name: 'Neurology', icon: 'fa-brain', doctorCount: 8, description: 'Brain, nerves & spinal treatments' },
    { id: 'pediatrics', name: 'Pediatrics', icon: 'fa-baby', doctorCount: 15, description: 'Child & infant healthcare specialists' },
    { id: 'orthopedics', name: 'Orthopedics', icon: 'fa-bone', doctorCount: 10, description: 'Bone, joint & muscle care' },
    { id: 'dermatology', name: 'Dermatology', icon: 'fa-allergies', doctorCount: 9, description: 'Skin, hair & nail care' },
    { id: 'dentistry', name: 'Dentistry', icon: 'fa-tooth', doctorCount: 14, description: 'Complete oral & dental hygiene' },
    { id: 'general', name: 'General Physician', icon: 'fa-user-doctor', doctorCount: 22, description: 'Routine checkups & preventive care' },
    { id: 'ophthalmology', name: 'Ophthalmology', icon: 'fa-eye', doctorCount: 7, description: 'Eye exams & vision treatments' }
  ],

  hospitals: [
    'Downtown Health Hub',
    'Westside Medical Center',
    'Metro City Hospital',
    'Northside General Clinic',
    'St. Jude Wellness Institute'
  ],

  locations: [
    'Downtown',
    'Westside District',
    'Central City',
    'North Hills',
    'East Park'
  ],

  doctors: [
    {
      id: 'doc-1',
      name: 'Dr. Sarah Jenkins',
      title: 'MD, FACC',
      specialty: 'Cardiology',
      specialtyId: 'cardiology',
      hospital: 'Westside Medical Center',
      location: 'Downtown',
      experience: 12,
      rating: 4.9,
      reviewsCount: 142,
      fee: 65,
      photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80',
      nextSlot: 'Today, 02:30 PM',
      bio: 'Leading cardiologist specializing in preventive heart disease, echocardiogram analysis, and hypertension management.',
      availableSlots: ['09:00 AM', '10:30 AM', '02:30 PM', '04:00 PM', '05:30 PM']
    },
    {
      id: 'doc-2',
      name: 'Dr. Marcus Vance',
      title: 'MD, DM Neurology',
      specialty: 'Neurology',
      specialtyId: 'neurology',
      hospital: 'Metro City Hospital',
      location: 'Central City',
      experience: 15,
      rating: 4.8,
      reviewsCount: 98,
      fee: 80,
      photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80',
      nextSlot: 'Tomorrow, 11:00 AM',
      bio: 'Specialist in migraine management, peripheral nerve disorders, and cognitive brain wellness therapies.',
      availableSlots: ['11:00 AM', '01:30 PM', '03:00 PM', '05:00 PM']
    },
    {
      id: 'doc-3',
      name: 'Dr. Elena Rostova',
      title: 'MD Pediatrics',
      specialty: 'Pediatrics',
      specialtyId: 'pediatrics',
      hospital: 'Downtown Health Hub',
      location: 'Downtown',
      experience: 9,
      rating: 4.95,
      reviewsCount: 210,
      fee: 50,
      photo: 'https://images.unsplash.com/photo-1594824813566-88855ce78905?auto=format&fit=crop&w=400&q=80',
      nextSlot: 'Today, 04:00 PM',
      bio: 'Compassionate pediatric specialist dedicated to child nutrition, growth milestones, and routine vaccinations.',
      availableSlots: ['09:30 AM', '11:00 AM', '02:00 PM', '04:00 PM']
    },
    {
      id: 'doc-4',
      name: 'Dr. Robert Chen',
      title: 'MS Orthopedics',
      specialty: 'Orthopedics',
      specialtyId: 'orthopedics',
      hospital: 'Northside General Clinic',
      location: 'North Hills',
      experience: 14,
      rating: 4.7,
      reviewsCount: 115,
      fee: 70,
      photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80',
      nextSlot: 'Fri, 25 Jul 10:00 AM',
      bio: 'Expert in sports injury rehabilitation, joint replacement consultation, and arthroscopic procedures.',
      availableSlots: ['10:00 AM', '01:00 PM', '03:30 PM', '06:00 PM']
    },
    {
      id: 'doc-5',
      name: 'Dr. Sophia Martinez',
      title: 'MD Dermatology',
      specialty: 'Dermatology',
      specialtyId: 'dermatology',
      hospital: 'St. Jude Wellness Institute',
      location: 'Westside District',
      experience: 8,
      rating: 4.9,
      reviewsCount: 185,
      fee: 60,
      photo: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=400&q=80',
      nextSlot: 'Tomorrow, 09:30 AM',
      bio: 'Board-certified dermatologist focusing on clinical acne treatments, eczema, skin rejuvenation, and laser therapy.',
      availableSlots: ['09:30 AM', '11:30 AM', '02:30 PM', '04:30 PM']
    },
    {
      id: 'doc-6',
      name: 'Dr. David Kim',
      title: 'DDS Dental Surgeon',
      specialty: 'Dentistry',
      specialtyId: 'dentistry',
      hospital: 'Downtown Health Hub',
      location: 'Downtown',
      experience: 11,
      rating: 4.85,
      reviewsCount: 160,
      fee: 55,
      photo: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80',
      nextSlot: 'Today, 05:30 PM',
      bio: 'Expert cosmetic dentist specializing in pain-free root canals, teeth whitening, clear aligners, and dental implants.',
      availableSlots: ['10:00 AM', '01:30 PM', '03:30 PM', '05:30 PM']
    }
  ],

  initialBookings: [
    {
      id: 'MED-8942',
      doctorId: 'doc-1',
      doctorName: 'Dr. Sarah Jenkins',
      specialty: 'Cardiology',
      hospital: 'Westside Medical Center',
      date: '2026-07-24',
      dateDisplay: 'Friday, Jul 24',
      time: '02:30 PM',
      patientName: 'Alex Morgan',
      patientPhone: '+1 (555) 234-5678',
      patientEmail: 'alex.morgan@example.com',
      consultType: 'In-Person Visit',
      status: 'Confirmed',
      smsNotificationSent: true,
      emailNotificationSent: true,
      createdAt: '2026-07-22'
    },
    {
      id: 'MED-8943',
      doctorId: 'doc-3',
      doctorName: 'Dr. Elena Rostova',
      specialty: 'Pediatrics',
      hospital: 'Downtown Health Hub',
      date: '2026-07-28',
      dateDisplay: 'Tuesday, Jul 28',
      time: '11:00 AM',
      patientName: 'Alex Morgan',
      patientPhone: '+1 (555) 234-5678',
      patientEmail: 'alex.morgan@example.com',
      consultType: 'Video Teleconsultation',
      status: 'Confirmed',
      smsNotificationSent: true,
      emailNotificationSent: true,
      createdAt: '2026-07-21'
    }
  ],

  pastBookings: [
    {
      id: 'MED-7812',
      doctorName: 'Dr. David Kim',
      specialty: 'Dentistry',
      dateDisplay: '15 June 2026',
      time: '10:00 AM',
      consultType: 'In-Person Visit',
      status: 'Completed',
      notes: 'Routine dental clean-up completed. Recommended fluoride rinse.'
    },
    {
      id: 'MED-6540',
      doctorName: 'Dr. Marcus Vance',
      specialty: 'Neurology',
      dateDisplay: '02 May 2026',
      time: '03:00 PM',
      consultType: 'Video Teleconsultation',
      status: 'Completed',
      notes: 'Migraine follow-up check. Vitamin D & magnesium supplements prescribed.'
    }
  ]
};
