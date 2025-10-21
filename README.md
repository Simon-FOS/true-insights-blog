# True Insights Blog

A modular, production-ready blog app built with **mexus/nexusjs**, **Express**, **Sequelize**, **express-handlebars**, **Multer**, and **Cloudinary** — designed for clarity, performance, and scalability.

---

## 🧩 Tech Stack
- **Runtime:** Node.js
- **Core Framework:** mexus/nexusjs
- **Server:** Express.js
- **Database:** Sequelize ORM (PostgreSQL or MySQL)
- **Templating Engine:** express-handlebars
- **File Uploads:** Multer
- **Media Storage:** Cloudinary
- **Authentication:** JWT + Sessions
- **Utilities:** dotenv, bcryptjs, nodemailer, cookie-parser

---

## ⚙️ Key Features
- Modular architecture powered by `nathius262/mexusjs`
- RESTful API + SSR using Handlebars
- Scalable database design with Sequelize migrations & seeders
- Role-based authentication and content management
- Multer + Cloudinary integration for image hosting
- Configurable environment setup for production and development
- Clean code structure: routes → controllers → services → repositories

---
## FOLDER STRUCTURE
true-insights-blog/
│
├── modules/
│   ├── auth/
│   ├── posts/
│   ├── users/
│   ├── media/
│   └── comments/
│
├── config/
│   ├── db.js
│   ├── cloudinary.js
│   └── env.js
│
├── middlewares/
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   └── upload.js
│
├── views/
│   ├── layouts/
│   ├── partials/
│   └── pages/
│
├── public/
│   ├── css/
│   ├── js/
│   └── images/
│
├── app.js
├── package.json
└── README.md

## License
MIT License

## 🚀 Quick Start
```bash
git clone https://github.com/<your-username>/true-insights-blog.git
cd true-insights-blog
cp .env.example .env        # configure DB, Cloudinary, JWT_SECRET
npm install
npm run migrate             # run database migrations
npm run dev                 # start development server
