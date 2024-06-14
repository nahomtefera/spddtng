# Admin Dashboard API Endpoints - Events Management

## Event Data Structure

Example Response:
```json
[
  {
    "id": "event1",
    "title": "Speed Dating Event",
    "date": "2023-06-15T19:00:00Z",
    "time": "7:00 PM - 10:00 PM",
    "city": "New York City",
    "address": "123 Main St, New York, NY 10001",
    "ageRange": "25-35",
    "description": "Join us for a fun and exciting speed dating event in the heart of the city...",
    "price": 50,
    "host": "John Doe",
    "capacity": 100,
    "tags": ["Singles", "Networking", "Fun"],
    "dressCode": "Casual",
    "specialInstructions": "Please arrive on time and be ready to mingle.",
    "attendees": [
      { "id": "user1", "name": "Jane Doe", "image": "/images/users/user1.webp" },
      ...
    ]
  },
  ...
]
```

# Event Management Endpoints
## Create Event
### Method: PUT
### Endpoint: /api/admin/events
### Request Body:
```json
    {
    "title": "Speed Dating Event",
    "date": "2023-06-15T19:00:00Z",
    "time": "7:00 PM - 10:00 PM",
    "city": "New York City",
    "address": "123 Main St, New York, NY 10001",
    "ageRange": "25-35",
    "description": "Join us for a fun and exciting speed dating event in the heart of the city...",
    "price": 50,
    "host": "John Doe",
    "capacity": 100,
    "tags": ["Singles", "Networking", "Fun"],
    "dressCode": "Casual",
    "specialInstructions": "Please arrive on time and be ready to mingle."
    }

```
Example response
```json
    {
    "message": "Event created successfully",
    "eventId": "event1"
    }

```

## Update Event
### Method: PUT
### Endpoint: /api/admin/events/:eventId
### Request Body:
```json
    {
        "title": "Speed Dating Event",
        "date": "2023-06-15T19:00:00Z",
        "time": "7:00 PM - 10:00 PM",
        "city": "New York City",
        "address": "123 Main St, New York, NY 10001",
        "ageRange": "25-35",
        "description": "Join us for a fun and exciting speed dating event in the heart of the city...",
        "price": 50,
        "host": "John Doe",
        "capacity": 100,
        "tags": ["Singles", "Networking", "Fun"],
        "dressCode": "Casual",
        "specialInstructions": "Please arrive on time and be ready to mingle."
    }

```
Example response
```json
    {
        "message": "Event updated successfully"
    }

```

## Delete Event
### Method: DELETE
### Endpoint: /api/admin/events/:eventId
Example response

```json
    {
        "message": "Event deleted successfully"
    }
```

## Get All Events
### Method: GET
### Endpoint: /api/admin/events/
Example response

```json
    [
        {
            "id": "event1",
            "title": "Speed Dating Event",
            "date": "2023-06-15T19:00:00Z",
            "time": "7:00 PM - 10:00 PM",
            "city": "New York City",
            "address": "123 Main St, New York, NY 10001",
            "ageRange": "25-35",
            "description": "Join us for a fun and exciting speed dating event in the heart of the city...",
            "price": 50,
            "host": "John Doe",
            "capacity": 100,
            "tags": ["Singles", "Networking", "Fun"],
            "dressCode": "Casual",
            "specialInstructions": "Please arrive on time and be ready to mingle.",
            "attendees": [
            { "id": "user1", "name": "Jane Doe", "image": "/images/users/user1.webp" },
            ...
            ]
        },
        ...
    ]

```


## Get Event Details
### Method: GET
### Endpoint: /api/admin/events/:eventId
Example response

```json
    {
        "id": "event1",
        "title": "Speed Dating Event",
        "date": "2023-06-15T19:00:00Z",
        "time": "7:00 PM - 10:00 PM",
        "city": "New York City",
        "address": "123 Main St, New York, NY 10001",
        "ageRange": "25-35",
        "description": "Join us for a fun and exciting speed dating event in the heart of the city...",
        "price": 50,
        "host": "John Doe",
        "capacity": 100,
        "tags": ["Singles", "Networking", "Fun"],
        "dressCode": "Casual",
        "specialInstructions": "Please arrive on time and be ready to mingle.",
        "attendees": [
        { "id": "user1", "name": "Jane Doe", "image": "/images/users/user1.webp" },
        ...
        ]
    }
```