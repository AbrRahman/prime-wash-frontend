# 🚗 Prime Wash – Car Wash Booking System  

A modern **MERN-based car wash booking platform** for managing car wash services, slots, and user bookings.  
Built with **React, Redux, Express, MongoDB (Mongoose)**, and **Firebase**, it simplifies the booking process with secure authentication, real-time slot management, payments, and admin/user dashboards.  

---

## 📖 Overview  

**Prime Wash** is a full-featured booking system designed to make car wash reservations seamless for users and easy to manage for admins.  
Users can explore services, filter by price/duration, view detailed service information, and book slots with countdown timers and payment integration. Admins have powerful tools to manage services, slots, users, and bookings.  

The project combines **modern UI/UX** with a **robust backend** for real-world booking functionality.  

---

### 🔗 Demo Links  
- 🔗 **Live Frontend:** [https://prime-wash.vercel.app/](https://prime-wash.vercel.app/)  
- 🔗 **Backend GitHub Repository:** [prime-wash-backend](https://github.com/AbrRahman/prime-wash-backend)  

---

### 👨‍💼 Admin Demo Access  
- **Email:** abrahman2001a@gmail.com  
- **Password:** 123456  

---

## ⚡ Tech Stack  

- **Frontend:** React, Redux Toolkit, React Router, Tailwind CSS, daisyUI  
- **Backend:** Node.js, Express.js, MongoDB with **Mongoose ODM**, JWT Authentication  
- **Auth:** Firebase Google Auth + Custom JWT Email/Password Auth  
- **UI/UX:** Tailwind CSS, Swiper (carousel), Motion (loading animations)  
- **Payments:** AAMARPAY Integration  
- **Utilities:** Zod, React Hook Form, Redux Persist, React Countdown, React Datepicker, Sonner (toast)  
- **Communication:** EmailJS (contact form)  
- **Deployment:** Vercel (Frontend), Render/other (Backend)  

---

## 🚀 Features  

### 👤 User Features  
- 🔑 **Authentication**:  
  - Google login via **Firebase**  
  - Email/Password login with **JWT**  
- 🏷️ Browse services with **search, filter, and sorting**  
- 📅 **Slot booking system** with availability check  
- 🕒 **Countdown timer** for upcoming booked slots  
- 💳 Pay via **AAMARPAY** for secure booking  
- 📂 User Dashboard:  
  - View past & upcoming bookings (countdown on upcoming ones)  
  - Update profile info, profile picture, and password  
- ✉️ Contact page with **EmailJS** integration  
- Responsive, mobile-friendly UI  

### 👨‍💼 Admin Features  
- **Service Management:** Add, update (modal with prefilled form), delete services with images  
- **Slot Management:** Create, update, cancel slots (cannot modify booked slots)  
- **User Management:** View all users, promote to admin, delete users  
- **Booking Management:** View and manage all bookings  
- Access-controlled **Admin Dashboard**  

### 🎨 Public Features  
- Modern home page with hero banner, featured services, and reviews  
- Star-based review system with overlay login prompt  
- Average site rating + latest reviews displayed dynamically  
- Custom 404 error page  

---

## 🛠️ Installation & Setup  

### Prerequisites  
- Node.js (v18+)  
- MongoDB (local or Atlas)  
- Firebase project for Google authentication  
- AAMARPAY account for payments  

### Clone the Repository  
```bash
git clone https://github.com/AbrRahman/prime-wash-frontend.git
cd prime-wash



