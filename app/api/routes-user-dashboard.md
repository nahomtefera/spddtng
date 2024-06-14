## USER DASHBOARD PAGE

### RECENT MATCHES
**Method:** GET  
**Endpoint:** /api/users/:id/matches/recent  
**Alternative Endpoint:** /api/users/:id/matches?order='desc'&limit=3  

### UPCOMING EVENTS
**Method:** GET  
**Endpoint:** /api/users/:id/events/upcoming  
**Alternative Endpoint:** /api/users/:id/events?dateAfter='today'&limit=3  

### ATTENDED EVENTS
**Method:** GET  
**Endpoint:** /api/users/:id/events/attended  
**Alternative Endpoint:** /api/users/:id/events?dateBefore='today'&limit=3  

## USER PROFILE PAGE

### GET USER DATA
**Method:** GET  
**Endpoint:** /api/users/:id  

### POST USER DATA
**Method:** POST  
**Endpoint:** /api/users/:id  

## ACCOUNT SETTINGS PAGE

### ACCOUNT INFORMATION
**Method:** PUT  
**Endpoint:** /api/users/:id/account  
**Request Body:**  
```json
{
  "email": "john@example.com",
  "phone": "+1 (555) 555-5555",
  "current_password": "current_password_here",
  "new_password": "new_password_here"
}

Example Response:  
{
"message": "Account information updated successfully"
}
```

### NOTIFICATION SETTINGS
**Method:** PUT  
**Endpoint:** /api/users/:id/notifications  
**Request Body:**  
```json
{
    "email_notifications": true,
    "sms_notifications": false,
    "event_notifications": true
}

Example Response:  
{
"message": "Notification settings updated successfully"
}
```

### PRIVACY SETTINGS
**Method:** PUT  
**Endpoint:** /api/users/:id/privacy  
**Request Body:**  
```json
{
    "profile_visibility": "public",
    "search_privacy": true,
    "data_sharing": false
}

Example Response:  
{
    "message": "Privacy settings updated successfully"
}
```

### ACCOUNT ACTIONS

#### DELETE ACCOUNT
**Method:** DELETE  
**Endpoint:** /api/users/:id/delete  
**Example Response:**  
```json
Example Response:  
{
    "message": "Account deleted successfully"
}
```

### SOCIAL MEDIA LINKS

#### UNLINK SOCIAL MEDIA
**Method:** DELETE  
**Endpoint:** /api/users/:id/social/:platform  
**Example Response:**  
```json
Example Response:  
{
    "message": "Social media account unlinked successfully"
}
```


## MATCHES PAGE
```json
Example Response:  
[
    {
      "id": 1,
      "name": 'Emily Wilkins',
      "age": 28,
      "location": 'New York, NY',
      "bio": "Adventurous and outgoing, I love exploring new places and trying new things. Let's connect!",
      "interests": ['Travel', 'Cooking', 'Hiking'],
      "match": 90,
      "image": '/images/users/user2.webp',
    },
    {
      "id": 2,
      "name": 'Michael Johnson',
      "age": 32,
      "location": 'Los Angeles, CA',
      "bio": "I'm a passionate entrepreneur looking to meet someone who shares my drive and ambition.",
      "interests": ['Startups', 'Technology', 'Fitness'],
      "match": 85,
      "image": '/images/users/user4.webp',
    },
    ...
]
```
### GET MATCHES
**Method:** GET  
**Endpoint:** /api/users/:id/matches  

### FILTER MATCHES
**Method:** GET  
**Endpoint:** /api/users/:id/matches?age_min=18&age_max=50&distance_max=50&interests=Travel,Hiking  

### SORT MATCHES
**Method:** GET  
**Endpoint:** /api/users/:id/matches?sort=newest|highest|lowest  

### SEARCH MATCHES
**Method:** GET  
**Endpoint:** /api/users/:id/matches?search=search_term  

### CONTACT MATCH (optional)
**Method:** POST  
**Endpoint:** /api/users/:id/matches/:matchId/contact  
**Request Body:**  


## USER EVENTS

**Example Response:**  
```json
Example Response:  
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
            { 
                "id": "user1", 
                "name": "Jane Doe", 
                "image": "/images/users/user1.webp" 
            },
            ...
        ]
    },
    ...
]
```

### GET UPCOMING EVENTS
**Method:** GET  
**Endpoint:** /api/users/:id/events/upcoming  
**Alternative Endpoint:** /api/users/:id/events?dateAfter='today'&limit=3  

### GET ATTENDED EVENTS
**Method:** GET  
**Endpoint:** /api/users/:id/events/attended  
**Alternative Endpoint:** /api/users/:id/events?dateBefore='today'&limit=3  

### SEARCH EVENTS
**Method:** GET  
**Endpoint:** /api/users/:id/events?search=search_term  

### FILTER EVENTS
**Method:** GET  
**Endpoint:** /api/users/:id/events?age_min=18&age_max=50&distance_max=50&interests=Travel,Hiking  

### GET EVENT DETAILS
**Method:** GET  
**Endpoint:** /api/users/:id/events/:eventId  
