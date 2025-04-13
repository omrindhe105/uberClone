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
    "FirstName": "John",
    "LastName": "Doe"
  },
  "email": "john.doe@example.com",
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