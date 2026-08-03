# Tariq API Java - Quranic Arabic Headless CMS & Progress API

Modern Spring Boot 3 microservice powering the **Esho Arbi Shikhi** interactive Quranic Arabic learning platform. This backend fulfills both university Java lab requirements and lays a production-grade foundation for a Headless CMS delivering structured pedagogical exercises and tracking real-time student learning progress.

---

## 🏛️ Architecture & Tech Stack

- **Java Version**: Java 17+ (Tested on OpenJDK 21)
- **Framework**: Spring Boot 3.2.5
- **Data Persistence**: Spring Data JPA / Hibernate 6
- **Validation**: Hibernate Validator (Bean Validation 3.0)
- **Databases**: 
  - **H2 Embedded Database** (Default zero-config profile for lab testing & development)
  - **PostgreSQL JDBC Driver** (Included for long-term production deployment)
- **Build Tool**: Maven with portable Maven Wrapper (`mvnw` / `mvnw.cmd`)

---

## 📦 Domain Model Hierarchy

```
[Volume] (e.g., Esho Arbi Shikhi - Vol 1)
  └── [Chapter] (e.g., Chapter 1: Demonstratives & Basic Objects)
        └── [Lesson] (e.g., Lesson 1: هَذَا كِتَابٌ - This is a Book)
              └── [CurriculumChunk] (Structured JSON payload for pedagogical exercises, VOCABULARY, GRAMMAR)

[UserProgress]
  └── Tracks Student ID, Completed Lesson ID, XP Earned, Quiz Scores, and Timestamp.
```

---

## 🚀 How to Start the Service

### 1. Using the Portable Maven Wrapper (No Maven Installation Required!)
On Linux / macOS:
```bash
cd "/home/amir/Documents/firstmate/projects /a_tariq/apps/api-java"
./mvnw spring-boot:run
```

On Windows:
```cmd
cd "projects \a_tariq\apps\api-java"
mvnw.cmd spring-boot:run
```

### 2. Running Unit & Integration Tests
```bash
./mvnw clean test
```

The application starts by default on port `8080` with the **H2 embedded database** active.

---

## 🔌 API Endpoints & Sample Request / Response

### 1. Fetch All Volumes (Table of Contents)
- **Endpoint**: `GET http://localhost:8080/api/v1/curriculum/volumes`
- **Description**: Returns all seeded volumes, chapters, and lesson metadata.
```bash
curl -X GET http://localhost:8080/api/v1/curriculum/volumes | jq .
```

### 2. Fetch Lesson with Pedagogical JSON Payloads (Headless CMS)
- **Endpoint**: `GET http://localhost:8080/api/v1/curriculum/lessons/1`
- **Description**: Returns complete lesson structure with embedded vocabulary cards and quiz exercise payloads in JSON format.
```bash
curl -X GET http://localhost:8080/api/v1/curriculum/lessons/1 | jq .
```

### 3. Record Student Progress & Award XP
- **Endpoint**: `POST http://localhost:8080/api/v1/progress/record`
- **Headers**: `Content-Type: application/json`
- **Description**: Records completion of a lesson, awards XP, and returns updated student totals.
```bash
curl -X POST http://localhost:8080/api/v1/progress/record \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "tariq_student_01",
    "lessonId": 1,
    "xpEarned": 45,
    "score": 95,
    "completed": true
  }'
```
**Sample Response**:
```json
{
  "recordId": 2,
  "userId": "tariq_student_01",
  "lessonId": 1,
  "totalUserXp": 95,
  "message": "Progress recorded successfully for lesson: Lesson 1: This is a Book (Masculine Near Demonstratives)",
  "success": true
}
```

### 4. Get Student Progress Summary
- **Endpoint**: `GET http://localhost:8080/api/v1/progress/user/tariq_student_01`
- **Description**: Retrieves cumulative XP, average score, total lessons completed, and timeline history.

---

## 🗄️ Database Profiles & H2 Console

### H2 Developer Console (Zero-Config)
When running under the default `h2` profile, you can inspect and query the live tables directly through your browser:
- **URL**: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)
- **JDBC URL**: `jdbc:h2:mem:tariqdb`
- **Username**: `sa`
- **Password**: `password`

### Switching to PostgreSQL (Production Mode)
To connect to a long-term production PostgreSQL database, activate the `postgres` Spring profile:
```bash
./mvnw spring-boot:run -Dspring-boot.run.profiles=postgres
```
Configure your credentials via environment variables:
- `DATABASE_URL` (default: `jdbc:postgresql://localhost:5432/tariq_curriculum`)
- `DATABASE_USER` (default: `postgres`)
- `DATABASE_PASSWORD` (default: `postgres`)

---
*Created by Senior Java Backend Architect for Esho Arbi Shikhi platform.*
