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



# User Notification API

## Error Handling

Our API uses robust error-handling mechanisms to ensure reliable and meaningful responses for all scenarios. Below are the key aspects of error handling implemented in the application:

1. **Centralized Error Filter:**
   All exceptions are caught and processed through a global `HttpExceptionFilter` to provide uniform error responses.

2. **Validation Errors:**
   Invalid inputs are handled using class-validator decorators. Detailed error messages are returned for missing or invalid fields.

   Example Response:
   ```json
   {
     "statusCode": 400,
     "message": ["userId must be a string", "email must be an email"],
     "error": "Bad Request"
   }


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


---
## 404 Errors: If a resource is not found, a NotFoundException is thrown.

## Example Response:

```json

{
  "statusCode": 404,
  "message": "User preference not found",
  "error": "Not Found"
}
```
## Duplicate Resource Handling: Attempting to create a resource that already exists results in a ConflictException.

## Example Response:

```json

{
  "statusCode": 409,
  "message": "Notification with similar content already exists",
  "error": "Conflict"
}
```
## Unhandled Errors: Unhandled exceptions return a generic 500 response.

## Example Response:

```json

{
  "statusCode": 500,
  "message": "Internal server error"
}
```
---
## Testing

The project is equipped with end-to-end tests to verify functionality and ensure reliability. Below is an overview of the testing process:

## Key Features Tested
 - User Preferences:
     - Create, Read, Update, and Delete operations.
 - Notifications:
    - Sending notifications.
    - Fetching logs and statistics.
## Test Framework
- Jest: Used for writing and running test cases.
- Supertest: For making HTTP requests and validating API responses.
## How to Run Tests
- Run the end-to-end tests:
```bash
npm run test:e2e
```

## Example Test Output
```sql

PASS  test/app.e2e-spec.ts
  API Endpoints (e2e)
    User Preferences
      ✓ POST /api/preferences - Create a new user preference
      ✓ GET /api/preferences/:userId - Get user preference by userId
      ✓ PATCH /api/preferences/:userId - Update user preference by userId
      ✓ DELETE /api/preferences/:userId - Delete user preference by userId
    Notification Management
      ✓ POST /api/notifications/send - Send a notification
      ✓ GET /api/notifications/:userId/logs - Get notification logs
      ✓ GET /api/notifications/stats - Get notification stats

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total

```

## Example Requests and Responses

1. Create User Preference
Request:
```
bash

POST /api/preferences
Content-Type: application/json
{
  "userId": "testUser123",
  "email": "test@example.com",
  "preferences": {
    "marketing": true,
    "newsletter": false,
    "updates": true,
    "frequency": "weekly",
    "channels": {
      "email": true,
      "sms": false,
      "push": true
    }
  },
  "timezone": "America/New_York"
}
```

Response:

```json
Copy code
{
  "success": true,
  "message": "User preference created successfully",
  "data": {
    "userId": "testUser123",
    "email": "test@example.com",
    "preferences": {
      "marketing": true,
      "newsletter": false,
      "updates": true,
      "frequency": "weekly",
      "channels": {
        "email": true,
        "sms": false,
        "push": true
      }
    },
    "timezone": "America/New_York"
  },
  "timestamp": "2024-11-17T20:00:00Z"
}
```

2. Send Notification

Request:

```bash

POST /api/notifications/send
Content-Type: application/json
{
  "userId": "testUser123",
  "type": "marketing",
  "channel": "email",
  "content": {
    "subject": "Test Notification",
    "body": "This is a test notification."
  }
}
```

Response:

```json

{
  "success": true,
  "message": "Notification sent successfully",
  "data": {
    "userId": "testUser123",
    "type": "marketing",
    "channel": "email",
    "metadata": {
      "subject": "Test Notification",
      "body": "This is a test notification."
    },
    "status": "sent"
  },
  "timestamp": "2024-11-17T20:01:00Z"
}
```

## 3. Fetch Notification Logs

## ** Request: **

```bash

GET /api/notifications/testUser123/logs
```

## ** Response: **

```json

{
  "success": true,
  "message": "Notification logs fetched successfully",
  "data": [
    {
      "userId": "testUser123",
      "type": "marketing",
      "channel": "email",
      "metadata": {
        "subject": "Test Notification",
        "body": "This is a test notification."
      },
      "status": "sent"
    }
  ],
  "timestamp": "2024-11-17T20:02:00Z"
}

