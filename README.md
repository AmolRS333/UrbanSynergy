# 🌍 UrbanSynergy – Community Service Coordination Platform

UrbanSynergy is a full-stack web application designed to streamline community service initiatives by connecting volunteers, NGOs, and administrators on a single platform. Built using the MERN stack with Tailwind CSS, this platform simplifies task management, real-time communication, and reporting for civic engagement projects.

---

## 🚀 Features

### 👥 Role-Based Dashboards
- **Admin**: Manage users, verify NGO registrations, publish announcements, and view analytics.
- **NGO**: Create and manage service events, approve volunteer participation, and submit progress reports.
- **Volunteer**: Browse available events, register for tasks, submit work logs, and receive certificates.

### 📆 Event & Task Management
- Create tasks with deadlines, locations, and categories.
- Real-time volunteer registration and updates.
- Track completion status and hours contributed.

### 📧 Notification System
- Auto email alerts for approvals, updates, and reminders.
- Admin receives stock alerts via scheduled cron jobs.

### 📊 Analytics & Reports
- View performance charts using **Chart.js**.
- Generate downloadable reports for tasks, volunteers, and NGOs.
- Insights for monthly impact summaries.

### 🔒 Authentication & Security
- JWT-based login with role segregation.
- Secure password handling with bcrypt.
- Form validations and error handling.

---

## 🧰 Tech Stack

| Layer        | Technology                       |
|--------------|----------------------------------|
| Frontend     | React.js, Tailwind CSS           |
| Backend      | Node.js, Express.js              |
| Database     | MongoDB (compass)                |
| Auth & Security | JWT, bcrypt, express-validator |
| Charts       | Chart.js                         |
| Email        | Nodemailer                       |
| Scheduler    | node-cron                        |
| Deployment   | Render / Vercel / Railway        |

---

## 🗂 Folder Structure

urban-synergy/
│
├── client/                            # React Frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── assets/                    # Images, logos
│   │   ├── components/               # Reusable UI components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── pages/                    # Route pages
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── AdminDashboard.jsx
│   │   │   ├── NgoDashboard.jsx
│   │   │   └── VolunteerDashboard.jsx
│   │   ├── context/                  # Context API for auth, data state
│   │   ├── api/                      # Axios config and API calls
│   │   ├── hooks/                    # Custom hooks
│   │   ├── utils/                    # Utility functions
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── tailwind.config.js
│
├── server/                            # Node.js Backend
│   ├── config/
│   │   ├── db.js                      # MongoDB connection
│   │   └── mail.js                    # Nodemailer config
│   ├── controllers/                  # Request logic
│   │   ├── authController.js
│   │   ├── eventController.js
│   │   └── adminController.js
│   ├── models/                       # Mongoose schemas
│   │   ├── User.js
│   │   ├── Event.js
│   │   └── Report.js
│   ├── routes/                       # API routes
│   │   ├── authRoutes.js
│   │   ├── eventRoutes.js
│   │   └── adminRoutes.js
│   ├── middleware/                   # Auth & error handling
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   ├── utils/                        # Utility functions
│   │   ├── sendEmail.js
│   │   └── cronJobs.js
│   ├── app.js                        # Express setup
│   └── server.js                     # Entry point
│
├── .env                               # Environment variables
├── .gitignore
├── package.json
├── README.md
└── tailwind.config.js



---

## 🔄 Workflow

1. Users register with selected roles.
2. NGOs post volunteer events.
3. Volunteers apply and complete assigned tasks.
4. Admin oversees all users and gets auto-notifications.
5. Chart.js displays performance metrics on dashboards.

---

## 🧪 Future Enhancements

- Real-time chat between NGOs and volunteers.
- Location-based filtering of events using Google Maps API.
- Mobile-first version using React Native.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🤝 Contributing

Feel free to fork the repository and submit pull requests. Contributions are welcome!

