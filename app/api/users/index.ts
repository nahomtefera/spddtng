/**
 * USER DASHBOARD PAGE
 *
 * RECENT MATCHES
 * Method: GET
 * /api/users/:id/matches/recent
 * OR /api/users/:id/matches?order='desc'&limit=3
 *
 * UPCOMING EVENTS
 * Method: GET
 * /api/users/:id/events/upcoming
 * OR /api/users/:id/events?dateAfter='today'&limit=3
 *
 * ATTENDED EVENTS
 * Method: GET
 * /api/users/:id/events/attended
 * OR /api/users/:id/events?dateBefore='today'&limit=3
 */

/**
 * USER PROFILE PAGE
 *
 * GET USER DATA
 * Method: GET
 * /api/users/:id
 *
 * POST USER DATA
 * Method: POST
 * /api/users/:id
 */

/**
 * ACCOUNT SETTINGS PAGE
 *
 * ACCOUNT INFORMATION
 * Method: PUT
 * /api/users/:id/account
 *
 * NOTIFICATION SETTINGS
 * Method: PUT
 * /api/users/:id/notifications
 *
 * PRIVACY SETTINGS
 * Method: PUT
 * /api/users/:id/privacy
 *
 * ACCOUNT ACTIONS
 * DEACTIVATE ACCOUNT
 * Method: DELETE
 * /api/users/:id/deactivate
 *
 * DELETE ACCOUNT
 * Method: DELETE
 * /api/users/:id/delete
 *
 * SOCIAL MEDIA LINKS
 * UNLINK SOCIAL MEDIA
 * Method: DELETE
 * /api/users/:id/social/:platform
 */

/**
 * MATCHES PAGE
 *
 * GET MATCHES
 * Method: GET
 * /api/users/:id/matches
 *
 * FILTER MATCHES
 * Method: GET
 * /api/users/:id/matches?age_min=18&age_max=50&distance_max=50&interests=Travel,Hiking
 *
 * SORT MATCHES
 * Method: GET
 * /api/users/:id/matches?sort=newest|highest|lowest
 *
 * SEARCH MATCHES
 * Method: GET
 * /api/users/:id/matches?search=search_term
 *
 * CONTACT MATCH (optional)
 * Method: POST
 * /api/users/:id/matches/:matchId/contact
 * Request Body:
 * {
 *   "message": "Hi Emily, I'd love to connect!"
 * }
 */

/**
 * USER EVENTS
 *
 * GET UPCOMING EVENTS
 * Method: GET
 * /api/users/:id/events/upcoming
 * OR /api/users/:id/events?dateAfter='today'&limit=3
 *
 * GET ATTENDED EVENTS
 * Method: GET
 * /api/users/:id/events/attended
 * OR /api/users/:id/events?dateBefore='today'&limit=3
 *
 * SEARCH EVENTS
 * Method: GET
 * /api/users/:id/events?search=search_term
 *
 * FILTER EVENTS
 * Method: GET
 * /api/users/:id/events?age_min=18&age_max=50&distance_max=50&interests=Travel,Hiking
 *
 * GET EVENT DETAILS
 * Method: GET
 * /api/users/:id/events/:eventId
 */


/!ENDPOINTS EN MAS DETALLE!/ 

/**
 * USER DASHBOARD PAGE
 *
 * RECENT MATCHES
 * Method: GET
 * /api/users/:id/matches/recent
 * OR /api/users/:id/matches?order='desc'&limit=3
 * Example Response:
 * [
 *   {
 *     "id": "user1",
 *     "name": "Jada Doe",
 *     "profile_picture": "/images/users/user2.webp",
 *     "matched_on": "2023-06-01"
 *   },
 *   {
 *     "id": "user2",
 *     "name": "Jane Smith",
 *     "profile_picture": "/images/users/user4.webp",
 *     "matched_on": "2023-05-15"
 *   },
 *   {
 *     "id": "user3",
 *     "name": "Sara Smith",
 *     "profile_picture": "/images/users/user1.webp",
 *     "matched_on": "2023-05-15"
 *   }
 * ]
 *
 * UPCOMING EVENTS
 * Method: GET
 * /api/users/:id/events/upcoming
 * OR /api/users/:id/events?dateAfter='today'&limit=3
 * Example Response:
 * [
 *   {
 *     "id": "event1",
 *     "name": "Speed Dating Event",
 *     "date": "2023-06-15T19:00:00Z",
 *     "picture": "/images/app/restaurant2.webp"
 *   },
 *   {
 *     "id": "event2",
 *     "name": "Cocktail Mixer",
 *     "date": "2023-07-01T20:00:00Z",
 *     "picture": "/images/app/restaurant1.webp"
 *   },
 *   {
 *     "id": "event3",
 *     "name": "Rooftop Mixer",
 *     "date": "2023-07-20T20:00:00Z",
 *     "picture": "/images/app/restaurant3.webp"
 *   }
 * ]
 *
 * ATTENDED EVENTS
 * Method: GET
 * /api/users/:id/events/attended
 * OR /api/users/:id/events?dateBefore='today'&limit=3
 * Example Response:
 * [
 *   {
 *     "id": "event1",
 *     "name": "Speed Dating Event",
 *     "date": "2023-06-15T19:00:00Z",
 *     "picture": "/images/app/restaurant2.webp"
 *   },
 *   {
 *     "id": "event2",
 *     "name": "Cocktail Mixer",
 *     "date": "2023-07-01T20:00:00Z",
 *     "picture": "/images/app/restaurant1.webp"
 *   },
 *   {
 *     "id": "event3",
 *     "name": "Rooftop Mixer",
 *     "date": "2023-07-20T20:00:00Z",
 *     "picture": "/images/app/restaurant3.webp"
 *   }
 * ]
 */

/**
 * USER PROFILE PAGE
 *
 * [GET] USER DATA
 * Method: GET
 * /api/users/:id
 * Example Response:
 * {
 *   "profile_picture": "/images/users/user3.webp",
 *   "first_name": "Jane",
 *   "last_name": "Smith",
 *   "email": "jane@example.com",
 *   "phone": "+1 (555) 555-5555",
 *   "bio": "Hi there! I'm Jane, a friendly and outgoing person who loves trying new things. In my free time, I enjoy hiking, reading, and exploring new restaurants with friends.",
 *   "interests": "Hiking, Reading, Cooking, Travel",
 *   "occupation": "Software Engineer",
 *   "education": "Bachelor's in Computer Science"
 * }
 *
 * 
 * [POST] USER DATA
 * Method: POST
 * /api/users/:id
 * Example Response:
 * {
 *   !!"profile_picture": "/images/users/user3.webp",!! - Explorar como configurar la subida de images
 *   "first_name": "Jane",
 *   "last_name": "Smith",
 *   "email": "jane@example.com",
 *   "phone": "+1 (555) 555-5555",
 *   "bio": "Hi there! I'm Jane, a friendly and outgoing person who loves trying new things. In my free time, I enjoy hiking, reading, and exploring new restaurants with friends.",
 *   "interests": "Hiking, Reading, Cooking, Travel",
 *   "occupation": "Software Engineer",
 *   "education": "Bachelor's in Computer Science"
 * }
 * 
 */

/**
 * ACCOUNT SETTINGS PAGE
 *
 * !ACCOUNT INFORMATION! - Revisar
 * Method: PUT
 * /api/users/:id/account
 * Request Body:
 * {
 *   "email": "john@example.com",
 *   "phone": "+1 (555) 555-5555",
 *   "current_password": "current_password_here",
 *   "new_password": "new_password_here"
 * }
 * Example Response:
 * {
 *   "message": "Account information updated successfully"
 * }
 *
 * NOTIFICATION SETTINGS
 * Method: PUT
 * /api/users/:id/notifications
 * Request Body:
 * {
 *   "email_notifications": true,
 *   "sms_notifications": false,
 *   "event_notifications": true
 * }
 * Example Response:
 * {
 *   "message": "Notification settings updated successfully"
 * }
 *
 * !PRIVACY SETTINGS! - Prioridad baja
 * Method: PUT
 * /api/users/:id/privacy
 * Request Body:
 * {
 *   "profile_visibility": "public",
 *   "search_privacy": true,
 *   "data_sharing": false
 * }
 * Example Response:
 * {
 *   "message": "Privacy settings updated successfully"
 * }
 *
 * ACCOUNT ACTIONS
 * !DEACTIVATE ACCOUNT! - Prioridad baja
 * Method: DELETE
 * /api/users/:id/deactivate
 * Example Response:
 * {
 *   "message": "Account deactivated successfully"
 * }
 *
 * DELETE ACCOUNT
 * Method: DELETE
 * /api/users/:id/delete
 * Example Response:
 * {
 *   "message": "Account deleted successfully"
 * }
 *
 * SOCIAL MEDIA LINKS
 * UNLINK SOCIAL MEDIA
 * Method: DELETE
 * /api/users/:id/social/:platform
 * Example Response:
 * {
 *   "message": "Social media account unlinked successfully"
 * }
 */

/**
 * MATCHES PAGE
 *
 * GET MATCHES
 * Method: GET
 * /api/users/:id/matches
 * Example Response:
 * [
 *   {
 *     "id": "user1",
 *     "name": "Emily Wilkins",
 *     "age": 28,
 *     "location": "New York, NY",
 *     "bio": "Adventurous and outgoing, I love exploring new places and trying new things. Let's connect!",
 *     "interests": ["Travel", "Cooking", "Hiking"],
 *     "match": 90,
 *     "image": "/images/users/user2.webp"
 *   },
 *   ...
 * ]
 *
 * !FILTER MATCHES! - Prioridad media
 * Method: GET
 * /api/users/:id/matches?age_min=18&age_max=50&distance_max=50&interests=Travel,Hiking
 * Example Response:
 * [
 *   {
 *     "id": "user1",
 *     "name": "Emily Wilkins",
 *     "age": 28,
 *     "location": "New York, NY",
 *     "bio": "Adventurous and outgoing, I love exploring new places and trying new things. Let's connect!",
 *     "interests": ["Travel", "Cooking", "Hiking"],
 *     "match": 90,
 *     "image": "/images/users/user2.webp"
 *   },
 *   ...
 * ]
 *
 * !SORT MATCHES! - Prioridad media
 * Method: GET
 * /api/users/:id/matches?sort=newest|highest|lowest
 * Example Response:
 * [
 *   {
 *     "id": "user1",
 *     "name": "Emily Wilkins",
 *     "age": 28,
 *     "location": "New York, NY",
 *     "bio": "Adventurous and outgoing, I love exploring new places and trying new things. Let's connect!",
 *     "interests": ["Travel", "Cooking", "Hiking"],
 *     "match": 90,
 *     "image": "/images/users/user2.webp"
 *   },
 *   ...
 * ]
 *
 * !SEARCH MATCHES! - Prioridad media
 * Method: GET
 * /api/users/:id/matches?search=search_term
 * Example Response:
 * [
 *   {
 *     "id": "user1",
 *     "name": "Emily Wilkins",
 *     "age": 28,
 *     "location": "New York, NY",
 *     "bio": "Adventurous and outgoing, I love exploring new places and trying new things. Let's connect!",
 *     "interests": ["Travel", "Cooking", "Hiking"],
 *     "match": 90,
 *     "image": "/images/users/user2.webp"
 *   },
 *   ...
 * ]
 *
 * !CONTACT MATCH! - OPCIONAL si decidimos mandar mensajes en la plataforma
 * Method: POST
 * /api/users/:id/matches/:matchId/contact
 * Request Body:
 * {
 *   "message": "Hi Emily, I'd love to connect!"
 * }
 * Example Response:
 * {
 *   "message": "Contact request sent successfully"
 * }
 */


/**
 * USER EVENTS
 *
 * Example Response:
 * [
 *   {
 *     "id": "event1",
 *     "title": "Speed Dating Event",
 *     "date": "2023-06-15T19:00:00Z",
 *     "time": "7:00 PM - 10:00 PM",
 *     "city": "New York City",
 *     "address": "123 Main St, New York, NY 10001",
 *     "ageRange": "25-35",
 *     "description": "Join us for a fun and exciting speed dating event in the heart of the city...",
 *     "price": 50,
 *     "host": "John Doe",
 *     "capacity": 100,
 *     "tags": ["Singles", "Networking", "Fun"],
 *     "dressCode": "Casual",
 *     "specialInstructions": "Please arrive on time and be ready to mingle.",
 *     "attendees": [
 *       { "id": "user1", "name": "Jane Doe", "image": "/images/users/user1.webp" },
 *       ...
 *     ]
 *   },
 *   ...
 * ]
 *
 * GET UPCOMING EVENTS
 * Method: GET
 * /api/users/:id/events/upcoming
 * OR /api/users/:id/events?dateAfter='today'&limit=3
 *
 * GET ATTENDED EVENTS
 * Method: GET
 * /api/users/:id/events/attended
 * OR /api/users/:id/events?dateBefore='today'&limit=3
 *
 * SEARCH EVENTS
 * Method: GET
 * /api/users/:id/events?search=search_term
 *
 * FILTER EVENTS
 * Method: GET
 * /api/users/:id/events?age_min=18&age_max=50&distance_max=50&interests=Travel,Hiking
 *
 * GET EVENT DETAILS
 * Method: GET
 * /api/users/:id/events/:eventId
 */
