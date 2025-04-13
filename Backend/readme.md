# User Registration Endpoint Documentation

## Endpoint: `/User/register`

### Method: `POST`

### Description:
This endpoint is used to register a new user in the system. It accepts user details such as full name, email, and password, hashes the password, and stores the user in the database.

---

### Request Body:
The following fields are required in the request body:

```json
{
  "fullName": {
    "FirstName": "string",
    "LastName": "string"
  },
  "email": "string",
  "password": "string"
}
```

#### Field Descriptions:
- **fullName.FirstName**: The first name of the user (required).
- **fullName.LastName**: The last name of the user (required).
- **email**: The email address of the user (required).
- **password**: The password for the user account (required).

---

### Response:

#### Success (201):
If the user is successfully registered, the server responds with:
```json
{
  "token": "string"
}
```
- **token**: A JWT token for the authenticated user.

#### Error (400):
If any required field is missing or invalid, the server responds with:
```json
{
  "errors": [
    {
      "msg": "Error message",
      "param": "field_name",
      "location": "body"
    }
  ]
}
```

#### Error (500):
If there is an internal server error, the server responds with:
```json
{
  "message": "Internal Server Error"
}
```

---

### Example Request:
```bash
POST /User/register
Content-Type: application/json

{
  "fullName": {
    "FirstName": "Om",
    "LastName": "Rindhe"
  },
  "email": "omRindhe@gmail.com",
  "password": "securepassword123"
}
```

### Example Response (Success):
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Example Response (Error):
```json
{
  "errors": [
    {
      "msg": "Please fill all the fields.",
      "param": "fullName.FirstName",
      "location": "body"
    }
  ]
}
```

---

### Notes:
- Ensure the `password` is strong and secure.
- The `email` must be unique in the database.
- The `token` can be used for subsequent authenticated requests.

---

### Status Codes:
- **201**: User successfully registered.
- **400**: Bad request (missing or invalid fields).
- **500**: Internal server error.



# User Profile and Logout Endpoint Documentation

---

## Endpoint: `/user/userProfile`

### Method: `GET`

### Description:
This endpoint is used to retrieve the authenticated user's profile. The user must be logged in and provide a valid authentication token.

---

### Request Headers:
The following headers are required:

```json
{
  "Authorization": "Bearer <token>"
}
```

---

### Response:

#### Success (200):
If the user is authenticated, the server responds with:
```json
{
  "_id": "string",
  "fullName": {
    "FirstName": "string",
    "LastName": "string"
  },
  "email": "string"
}
```

#### Error (401):
If the token is missing or invalid, the server responds with:
```json
{
  "message": "Authentication token is missing"
}
```

#### Error (404):
If the user is not found, the server responds with:
```json
{
  "message": "User not found"
}
```

---

### Example Request:
```bash
GET /user/userProfile
Authorization: Bearer <token>
```

### Example Response (Success):
```json
{
  "_id": "643f1c2e5e3b2a001c8e4f9a",
  "fullName": {
    "FirstName": "John",
    "LastName": "Doe"
  },
  "email": "john.doe@example.com"
}
```

---

## Endpoint: `/user/logout`

### Method: `GET`

### Description:
This endpoint is used to log out the authenticated user. It clears the authentication token from cookies and blacklists the token to prevent reuse.

---

### Request Headers:
The following headers are required:

```json
{
  "Authorization": "Bearer <token>"
}
```

---

### Response:

#### Success (200):
If the user is successfully logged out, the server responds with:
```json
{
  "message": "logout successfully"
}
```

#### Error (401):
If the token is missing or invalid, the server responds with:
```json
{
  "message": "Authentication token is missing"
}
```

---

### Example Request:
```bash
GET /user/logout
Authorization: Bearer <token>
```

### Example Response (Success):
```json
{
  "message": "logout successfully"
}
```

---

### Notes:
- The `/user/userProfile` endpoint requires the user to be authenticated.
- The `/user/logout` endpoint clears the token and blacklists it for 24 hours to prevent reuse.
- Ensure the `Authorization` header contains a valid JWT token for both endpoints.

---

### Status Codes:
- **200**: Request successful.
- **401**: Unauthorized (missing or invalid token).
- **404**: User not found (for `/user/userProfile`).