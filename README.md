# Care.xyz - Premium Professional Caregiving Platform

A modern, full-stack web application built with **Next.js 16** (App Router) and **Express.js**, connecting families with verified professional caregivers for baby care, elderly care, and specialized nursing services.

---

## 🚀 Project Overview

Care.xyz is a comprehensive caregiving platform that enables users to browse services, book care appointments, and manage their bookings. The application features a premium UI/UX design with authentication, protected routes, and a dynamic service management system.

---

## ✨ Key Features Implemented

### 1. **Landing Page (7+ Sections)**
- ✅ Hero Banner with call-to-action
- ✅ Statistics Section (Happy Families, Ratings, etc.)
- ✅ About Section
- ✅ Features Section (Key Differentiators)
- ✅ Why Choose Us Section
- ✅ How It Works Sections (4-step process)
- ✅ Services Showcase (Top 3 services)
- ✅ Testimonials
- ✅ FAQ Section
- ✅ Newsletter Subscription
- ✅ Call-to-Action (CTA) Section
- ✅ Responsive Navbar with Login/Register links
- ✅ Professional Footer

### 2. **Authentication System**
- ✅ **NextAuth.js** integration for secure authentication
- ✅ Credential-based login (email & password)
- ✅ User registration with password hashing (bcrypt)
- ✅ Session management with JWT tokens
- ✅ Cookie-based authentication
- ✅ Protected routes using middleware
- ✅ Automatic redirect to login for unauthenticated users
- ✅ Callback URL preservation after login


### 3. **Service Details Page** (`/services/[id]`)
- ✅ Publicly accessible
- ✅ Dynamic routing with service ID
- ✅ Full service information display
- ✅ "Add Booking" functionality
- ✅ Redirects to login if not authenticated
- ✅ Integration with booking system

### 4. **Protected: Add Service Page** (`/add-service`)
- ✅ **Protected route** - requires authentication
- ✅ Form to add new services with fields:
  - Service title
  - Description
  - Price
  - Features (comma-separated)
- ✅ Stores data in MongoDB via Express.js API
- ✅ Toast notifications on success/failure
- ✅ Automatic redirect after successful creation
- ✅ Premium form design with icons

### 5. **My Bookings Page** (`/my-bookings`)
- ✅ Protected route
- ✅ Displays user's booking history
- ✅ Shows booking status (pending/confirmed/completed)
- ✅ Booking details (service, date, price, reference)
- ✅ Empty state with "Browse Services" CTA

### 6. **Additional Enhancements**
- ✅ **Toast Notifications** (react-hot-toast) for user feedback
- ✅ Premium UI with Framer Motion animations
- ✅ Glassmorphism effects on navbar scroll
- ✅ Mobile-responsive design
- ✅ Dynamic service fetching from database
- ✅ Error handling across all API calls
- ✅ Loading states for better UX

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 16 (App Router)
- **Language:** JavaScript (React 19)
- **Styling:** Tailwind CSS 4
- **Authentication:** NextAuth.js 4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Notifications:** React Hot Toast

### Backend
- **Framework:** Express.js
- **Database:** MongoDB (with MongoDB Node.js Driver)
- **Authentication:** bcryptjs for password hashing
- **Environment:** dotenv for configuration
- **CORS:** Enabled for cross-origin requests

---

## 📁 Project Structure

```
care/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── login/page.jsx          # Login page
│   │   │   └── register/page.jsx       # Registration page
│   │   ├── api/
│   │   │   └── auth/[...nextauth]/route.js  # NextAuth configuration
│   │   ├── services/
│   │   │   └── [service_id]/page.jsx   # Service details page
│   │   ├── add-service/page.jsx        # Protected: Add service form
│   │   ├── my-bookings/page.jsx        # Protected: User bookings
│   │   ├── about/page.jsx              # About page
│   │   ├── contact/page.jsx            # Contact page
│   │   ├── layout.jsx                  # Root layout
│   │   ├── page.jsx                    # Landing page
│   │   └── globals.css                 # Global styles
│   ├── components/
│   │   ├── Navbar/Navbar.jsx           # Navigation bar
│   │   ├── Footer/Footer.jsx           # Footer
│   │   ├── Banner/Banner.jsx           # Hero section
│   │   ├── Service/Service.jsx         # Services section
│   │   ├── ServiceCard/ServiceCard.jsx # Service card component
│   │   ├── AboutSection/              
│   │   ├── AuthButton/AuthButton.jsx   # Login/Logout button
│   │   ├── AuthProvider/              # NextAuth session provider
│   │   ├── LandingSections/           # Stats, FAQ, Newsletter, etc.
│   │   └── Common/SectionHeader.jsx   
│   └── middleware.js                   # Route protection middleware
├── .env                                # Environment variables
└── package.json

care_backend/
├── index.js                            # Express server
├── .env                                # MongoDB URI
└── package.json
```

---

## 🔧 Setup & Installation

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or Atlas)
- npm or yarn package manager

### 1. Clone the Repository
```bash
git clone https://github.com/rakib-hossain32/Care-Hub.git
cd "Care-Hub"
```

### 2. Backend Setup
```bash
cd Care-Hub-Backend
npm install
```

Create a `.env` file in `Care-Hub-Backend/`:
```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Start the backend server:
```bash
nodemon index.js
```
Server will run on `http://localhost:5000`

### 3. Frontend Setup
```bash
cd Care-Hub
npm install
```

Create a `.env` file in `Care-Hub/`:
```env
NEXTAUTH_SECRET=your_secret_key_here
NEXTAUTH_URL=http://localhost:3000
```

Start the development server:
```bash
npm run dev
```
Application will run on `http://localhost:3000`

---

## 🗺️ Route Summary

| Route | Type | Description |
|-------|------|-------------|
| `/` | Public | Landing page with 7+ sections |
| `/login` | Public | User login page |
| `/register` | Public | User registration page |
| `/services/[id]` | Public | Individual service details |
| `/add-service` | Protected | Form to add new service |
| `/my-bookings` | Protected | User's booking history |
| `/about` | Public | About the platform |
| `/contact` | Public | Contact information |

---

## 🔐 Authentication Flow

1. User registers via `/register` (credentials stored in MongoDB with hashed password)
2. User logs in via `/login` using NextAuth.js
3. Session token stored in cookies
4. Middleware protects `/services/[id]`, `/add-service`, and `/my-bookings`
5. Unauthenticated users redirected to `/login` with callback URL
6. After login, user redirected back to intended page

---

## 📡 API Endpoints

### Backend (Express.js)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Health check |
| POST | `/api/auth/register` | Register new user |
| GET | `/api/auth/user/:email` | Get user by email |
| GET | `/services` | Get all services |
| POST | `/services` | Create new service |
| GET | `/services/:id` | Get service by ID |
| POST | `/bookings` | Create booking |
| GET | `/bookings/:email` | Get user's bookings |

---

## 🎨 Design Highlights

- **Premium Aesthetics:** Modern gradients, glassmorphism, and smooth animations
- **Responsive Design:** Mobile-first approach with Tailwind CSS
- **Micro-interactions:** Hover effects, scale animations, and transitions
- **Accessibility:** Semantic HTML and ARIA labels
- **Performance:** Optimized images and lazy loading

---

## 📝 Features Explanation

### Landing Page Sections
The landing page exceeds the requirement of 7 sections by including:
1. Hero banner with animated elements
2. Statistics showcase (users, ratings, verification)
3. About section explaining the platform
4. Features section (Key Differentiators)
5. "Why Choose Us" with key benefits
6. "How It Works" (4-step process)
7. Top 3 services preview
8. Customer testimonials
9. FAQ accordion
10. Newsletter subscription
11. Comprehensive Call-to-Action (CTA)

### Authentication
- Uses **NextAuth.js** for industry-standard authentication
- Passwords hashed with **bcryptjs** before storage
- JWT tokens for session management
- Middleware automatically protects specified routes

### Service Management
- Services fetched dynamically from MongoDB
- Real-time data updates
- Form validation on service creation
- Toast notifications for user feedback

### Protected Routes
- Middleware checks authentication status
- Redirects with preserved callback URLs
- Seamless user experience after login

---

## 🚀 Deployment Notes

For production deployment:
1. Update `NEXTAUTH_URL` in `.env` to your production domain
2. Use MongoDB Atlas for database
3. Deploy backend to Vercel/Railway/Render
4. Deploy frontend to Vercel
5. Update API URLs in frontend to point to production backend

---

## 👨‍💻 Developer

**Rakib Hossain**  
Full-stack Developer