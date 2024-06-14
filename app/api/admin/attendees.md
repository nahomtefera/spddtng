
# Admin Dashboard API Endpoints - Attendees Management
## Get All Attendees
### Method: GET
### Endpoint: /api/admin/events/:eventId/attendees
### Example response:
```json
    [
        { 
            "id": "user1", 
            "name": "Jane Doe", 
            "image": "/images/users/user1.webp" 
        },
        { 
            "id": "user2", 
            "name": "Bob Smith", 
            "image": "/images/users/user2.webp" 
        },
        ...
    ]

```

## Add Attendee to Event
### Method: POST
### Endpoint: /api/admin/events/:eventId/attendees
### Request Body:
```json
    {
        "attendeeId": "user1"
    }
```
Example response:
```json
    {
        "message": "Attendee added to event successfully"
    }
```

## Remove Attendee to Event
### Method: DELETE
### Endpoint: /api/admin/events/:eventId/attendees/:attendeeId
### Request Body:
```json
    {
        "attendeeId": "user1"
    }
```
Example response:
```json
    {
        "message": "Attendee removed from event successfully"
    }
```

## Move Attendee to Another Event
### Method: POST
### Endpoint: /api/admin/events/:fromEventId/attendees/:attendeeId/move
### Request Body:
```json
    {
        "toEventId": "event2"
    }
```
Example response:
```json
    {
        "message": "Attendee moved to new event successfully"
    }
```