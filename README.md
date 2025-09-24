# AgriTech – Real-Time Farm Insights

AgriTech is a scalable farm management system providing real-time insights across multiple agricultural sectors. It includes an Admin Panel and Dashboard to streamline crop and farm tracking with centralized data access.

## 🚀 Features

Real-time farm insights dashboard

Multi-sector farm & crop management

Scalable and centralized platform

Secure data access with SQL Server

## 🛠️ Tech Stack

Frontend: React.js

Backend: C# .NET Core Web API

Database: MS SQL Server

## ⚡ Getting Started
### 1. Clone the repository
```bash
git clone https://github.com/akashweb05/AgriTech.git
cd AgriTech
```

### 2. Setup Backend (.NET Core Web API)

Open gsproductions-backend/gsproductionsAPI.sln in Visual Studio.

Restore NuGet packages.

Configure your database connection in appsettings.json.

Run the backend server.

### 3. Setup Frontend (React.js)
```bash
cd frontend
npm install
npm start
```

### 4. Connect to SQL Server

Ensure your database is running.

Update connection string in appsettings.json (or environment variables) to point to your SQL Server instance.

### 5. Run the Project

Backend: https://localhost:<port>

Frontend: http://localhost:3000

#### Open your browser to see the dashboard and admin panel in action. 🚀

## 🔑 Environment Variables

Create a `.env` file in the root folder based on `.env.example`:

```bash
copy .env.example .env
```

