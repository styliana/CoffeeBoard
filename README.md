# CoffeeBoard ☕

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

A web application that helps teams and friends organize quick, informal coffee breaks. It allows user registration, logging in, creating new coffee meeting announcements, and joining existing ones.

---

## 📸 Screenshots

| | | |
| :---: | :---: | :---: |
| <img width="250" height="175" alt="image" src="https://github.com/user-attachments/assets/40cadd2b-08aa-474e-96f7-efdda20a17be" /><br>*Login and new account registration screen.* | <img width="200" height="340" alt="image" src="https://github.com/user-attachments/assets/fc1f5284-1c42-4662-ae4c-6df41d64b44c" /><br>*Joining a coffee event* | <img width="500" height="450" alt="image" src="https://github.com/user-attachments/assets/c6cb4df2-811f-429c-b463-3da812d6a896" /><br>*Publishing a coffee event* |

<img width="600" height="500" alt="image" src="https://github.com/user-attachments/assets/9f96ba7f-a0ec-42c4-b474-97e276f4a2b7" />

*Personalized greeting and the dashboard with available coffee meetings.*

---

## 🛠 Tech Stack

### Backend (Spring Boot)
* **Java 21+**: Main programming language.
* **Spring Boot (3.4.2)**: Core application framework.
* **Spring Web**: Provides REST API interface and handles HTTP requests.
* **Spring Data JPA / Hibernate**: Data access layer (ORM), CRUD operations.
* **Spring Security**: Application security (Basic Auth) and secure password hashing using BCrypt.
* **Maven**: Dependency management and project build tool.

### Frontend (Angular)
* **Angular**: Framework for building dynamic SPA (Single Page Application).
* **TypeScript & RxJS**: Frontend logic and asynchronous REST API communication.
* **Bootstrap 5.3**: Responsive UI framework.
* **HTML5 / CSS3**: Structure and custom color palette ("TeamBoard Coffee" theme).

### Database and Infrastructure
* **PostgreSQL 16**: Relational database.
* **Docker & Docker Compose**: Database environment containerization.

---

## ⚙️ Prerequisites

To run this project locally, you need to have the following installed:
* **Java** (version 21 or newer)
* **Node.js** and **npm** (to run the Angular frontend)
* **Docker** (to run the PostgreSQL database)

---

## 🚀 How to Run

### Option 1: Quick Start (PowerShell Script)
The project includes a script that automates the startup of the entire environment.
1. Open a PowerShell terminal in the root directory of the project.
2. Run the following command:
   ```powershell
   .\run-teamboard.ps1

(Note: If Windows blocks the script, run this command instead: powershell -ExecutionPolicy Bypass -File .\run-teamboard.ps1)

### Option 2: Manual Start
Database: Navigate to the demo folder and start the container:

```bash
docker-compose up -d
```
Backend: While still in the demo folder, run the Spring Boot application:

```Bash
.\mvnw spring-boot:run
```
(On Mac/Linux, use ./mvnw). The API will start at http://localhost:8080.

Frontend: Open a new terminal window, navigate to the teamboard-frontend folder, and run Angular:

```Bash
npm install
npm start
The frontend will be available in your browser at http://localhost:4200.
```
## 🔑 Test Data & Login
To test the application after launching it, you can go to http://localhost:4200 and create a new account using the registration form (min. 3 characters for the username, min. 6 for the password).

## 📂 Project Structure
```Plaintext
ztpai/
├── run-teamboard.ps1               # Script to automate project startup
├── demo/                           # BACKEND (Spring Boot)
│   ├── docker-compose.yaml         # PostgreSQL container configuration
│   ├── pom.xml                     # Maven configuration
│   └── src/
│       ├── main/java/pl/edu/pk/demo/
│       │   ├── config/             # CORS and Security configuration
│       │   ├── controller/         # REST API layer
│       │   ├── dto/                # Data Transfer Objects with validation
│       │   ├── entity/             # JPA Models (Ad, User)
│       │   ├── event/              # Event-driven architecture components
│       │   ├── exception/          # Global error handling
│       │   ├── repository/         # Database interfaces
│       │   └── service/            # Business logic
│       └── test/                   # Unit tests (JUnit, Mockito)
│
└── teamboard-frontend/             # FRONTEND (Angular)
    └── src/
        └── app/                    # Components, views, and routing
            └── services/           # Services for API communication (HttpClient)
```
