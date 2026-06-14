# 📘 ExamNotes AI

ExamNotes AI is an AI-powered study assistant that helps students generate exam-focused notes, revision points, diagrams, charts, important questions, and downloadable PDFs using Google Gemini AI.

## 🚀 Features

- 🔐 Google Authentication (Firebase)
- 🤖 AI-generated Exam Notes
- ⚡ Quick Revision Mode
- 📊 Auto-generated Charts & Graphs
- 🧩 Mermaid Flow Diagrams
- 📄 PDF Export
- 💳 Credit-based System
- 📚 Notes History
- 🎨 Modern Responsive UI
- ☁️ MongoDB Database Integration

---

## 🛠 Tech Stack

### Frontend
- React.js
- Vite
- Redux Toolkit
- Tailwind CSS
- Framer Motion
- Firebase Authentication
- Axios
- React Markdown
- Recharts
- Mermaid.js

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT Authentication
- Cookie Parser
- Gemini API
- Stripe

---

## 📂 Project Structure

```bash
ExamNotesAI/
│
├── client/
│   ├── src/
│   ├── public/
│   ├── .env
│   └── package.json
│
├── server/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── models/
│   ├── utils/
│   ├── .env
│   └── package.json
│
└── README.md
```

---

## ⚙️ Environment Variables

### Client (`client/.env`)

```env
VITE_FIREBASE_APIKEY=your_firebase_api_key
```

---

### Server (`server/.env`)

```env
PORT=8000

MONGODB_URL=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

STRIPE_SECRET_KEY=your_stripe_secret_key

STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

---

## 🔥 Firebase Setup

1. Create a Firebase Project.
2. Enable Google Authentication.
3. Copy Firebase API Key.
4. Add it to:

```env
VITE_FIREBASE_APIKEY=
```

---

## 🍃 MongoDB Setup

1. Create a MongoDB Atlas Cluster.
2. Create a Database User.
3. Add your IP Address to Network Access.
4. Copy Connection String.
5. Add it to:

```env
MONGODB_URL=
```

---

## 📦 Installation

### Clone Repository

```bash
git clone https://github.com/RheaBiswas/ExamNotesAI.git
cd ExamNotesAI
```

---

### Install Frontend Dependencies

```bash
cd client
npm install
```

---

### Install Backend Dependencies

```bash
cd ../server
npm install
```

---

## ▶️ Run Application

### Start Backend

```bash
cd server
npm run dev
```

Expected Output:

```bash
✅ Server running on port 8000
DB Connected
```

---

### Start Frontend

```bash
cd client
npm run dev
```

Open:

```text
http://localhost:5173
```

---

## 📸 Features Preview

### Authentication
- Google Sign-In using Firebase

### Notes Generation
- Exam-oriented AI Notes
- Important Questions
- Revision Points

### Visualization
- Mermaid Diagrams
- Charts & Graphs

### Export
- PDF Download

---

## 🧪 Future Improvements

- AI Flashcards
- AI Quiz Generator
- Notes Sharing
- Collaborative Study Rooms
- Voice Notes Support
- Multi-language Support

---



---

⭐ If you found this project useful, please consider giving it a star on GitHub.
