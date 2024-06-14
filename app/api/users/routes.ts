/**
 * Recent Matches
 * Method: GET
 * /api/users/:id/matches/recent
 * OR /api/users/:id/matches?order='desc'&limit=3
 * [
        {
            "id": "user1",
            "name": "Jada Doe",
            "profile_picture": "/images/users/user2.webp",
            "matched_on": "2023-06-01"
        },
        {
            "id": "user2",
            "name": "Jane Smith",
            "profile_picture": "/images/users/user4.webp",
            "matched_on": "2023-05-15"
        },
        {
            "id": "user3",
            "name": "Sara Smith",
            "profile_picture": "/images/users/user1.webp",
            "matched_on": "2023-05-15"
        }
    ]
 * 
 */


/**
 * Upcoming Events
 * Method: GET
 * /api/users/:id/events/upcoming
 * OR /api/users/:id/events?dateAfter='today'&limit=3
 *  [
        {
            "id": "event1",
            "name": "Speed Dating Event",
            "date": "2023-06-15T19:00:00Z",
            "picture": "/images/app/restaurant2.webp"
        },
        {
            "id": "event2",
            "name": "Cocktail Mixer",
            "date": "2023-07-01T20:00:00Z",
            "picture": "/images/app/restaurant1.webp"
        },
        {
            "id": "event3",
            "name": "Rooftop Mixer",
            "date": "2023-07-20T20:00:00Z",
            "picture": "/images/app/restaurant3.webp"
        }
    ]
 * 
 */


/**
 * Attended
 * Method: GET
 * /api/users/:id/events/attended
 * OR /api/users/:id/events?dateBefore='today'&limit=3
 *  [
        {
            "id": "event1",
            "name": "Speed Dating Event",
            "date": "2023-06-15T19:00:00Z",
            "picture": "/images/app/restaurant2.webp"
        },
        {
            "id": "event2",
            "name": "Cocktail Mixer",
            "date": "2023-07-01T20:00:00Z",
            "picture": "/images/app/restaurant1.webp"
        },
        {
            "id": "event3",
            "name": "Rooftop Mixer",
            "date": "2023-07-20T20:00:00Z",
            "picture": "/images/app/restaurant3.webp"
        }
    ]
 * 
 */



