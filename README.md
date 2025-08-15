# ChatBuzz

**ChatBuzz** is a real-time chat application built with the MERN stack, enabling seamless messaging between users. It supports authentication, live conversations, and a responsive UI for an engaging chat experience.

---

## 📌 Table of Contents
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Screenshots / Demo](#-screenshots--demo)
- [Installation](#-installation)
- [Usage](#-usage)
- [Folder Structure](#-folder-structure)

---

## ✨ Features
- 🔐 **User Authentication** (Signup, Login, JWT)
- 💬 **Real-Time Messaging** (WebSocket / Socket.IO)
- 📱 **Responsive Design** (Works on desktop & mobile)
- 👥 **One-on-One and Group Chats**
- 🖼 **Media Sharing** (Images, files)
- 📅 **Message Timestamps**
- 🌐 **Online/Offline Status**

---

## 🛠 Technologies Used

| Layer        | Technology |
|--------------|-----------|
| Frontend     | React.js, Redux/Context API |
| Backend      | Node.js, Express |
| Database     | MongoDB, Mongoose |
| Real-time    | Socket.IO |
| UI Library   | Ant Design / Material-UI |
| Auth         | JWT (JSON Web Token) |

---

## 📸 Screenshots / Demo
> Add your screenshots inside an `images` folder and replace the links below.

![Login Page](images/login.png)  
![Chat Interface](images/chat.png)

---

## ⚙ Installation

### Prerequisites
- **Node.js** and **npm** installed
- **MongoDB** installed locally or a MongoDB Atlas cluster

### Setup Guide
```bash
# Clone the repository
git clone https://github.com/vaishnavideshmukhp/ChatBuzz.git
cd ChatBuzz

# Install backend dependencies
npm install

# Install frontend dependencies
cd client
npm install

# Run backend
npm start

# Run frontend (in another terminal)
cd client
npm start

# Or run both with concurrently
npm run dev

## Usage
- Signup or Login to your account
- Search users and start chatting
- Create group chats with friends
- Send text, emojis, and images in real time
