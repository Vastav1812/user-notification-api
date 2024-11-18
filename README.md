# User Notification API

This project implements a User Notification API using **NestJS**. It allows managing user preferences and sending notifications. The API is fully tested, follows RESTful principles, and includes error handling and input validation.

## Features

- **User Preferences Management:**
  - Create, update, fetch, and delete user preferences.
- **Notification Management:**
  - Send notifications to users.
  - Fetch notification logs.
  - Get aggregate notification stats.
- **Bonus Features:**
  - OpenAPI/Swagger documentation.
  - API Key authentication.
  - Request caching (optional).
  - Notification queue simulation (optional).
  - Performance monitoring setup (optional).

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd user-notification-api
   ```
---
## Install dependencies:

```bash

npm install

```
---
## Set up environment variables:

``` bash
.env.example to .env:
```

```bash
cp .env.example .env
Fill in the required environment variables in the .env file.
```
---
## Running the Application
Start the application in development mode:

```bash

npm run start:dev
```
Access the API locally at http://localhost:3000.

---

# API Endpoints

## **User Preferences**

| Method | Endpoint                     | Description                         |
|--------|-------------------------------|-------------------------------------|
| POST   | `/api/preferences`           | Create a new user preference.      |
| GET    | `/api/preferences/:userId`   | Fetch user preferences by `userId`.|
| PATCH  | `/api/preferences/:userId`   | Update user preferences by `userId`.|
| DELETE | `/api/preferences/:userId`   | Delete user preferences by `userId`.|

## **Notification Management**

| Method | Endpoint                              | Description                           |
|--------|---------------------------------------|---------------------------------------|
| POST   | `/api/notifications/send`            | Send a notification.                 |
| GET    | `/api/notifications/:userId/logs`    | Fetch notification logs for a user.  |
| GET    | `/api/notifications/stats`           | Get aggregate notification stats.    |

## Features Completed

| Feature                  | Description                              | Status   |
|--------------------------|------------------------------------------|----------|
| User Preferences         | Manage user preferences for notifications. | Done     |
| Notifications            | Send, log, and track notifications.      | Done     |
| Swagger Documentation    | Auto-generate API documentation.         | Done     |
| Error Handling           | Comprehensive input validation and error responses. | Done |
| Integration Tests        | Cover edge cases for all major features. | Done     |
| Deployment Guide         | Setup and deployment instructions in README. | Pending |

## Bonus Tasks

| Feature                  | Description                              | Status   |
|--------------------------|------------------------------------------|----------|
| API Key Authentication   | Secure API using API keys.               | Pending  |
| Request Caching          | Improve performance with caching.        | Pending  |
| Notification Queueing    | Simulate asynchronous queueing.          | Pending  |
| Performance Monitoring   | Setup for application performance tracking. | Pending |


