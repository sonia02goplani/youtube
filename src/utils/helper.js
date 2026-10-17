export function generateRandomData() {
    const firstNames = ['Marcus', 'Elena', 'Kenji', 'Amara', 'Oliver', 'Sofia', 'Zayn', 'Chloe'];
    const lastNames = ['Vance', 'Chen', 'Rodriguez', 'Patel', 'Kim', 'Gomez', 'Blackwood', 'Sato'];
    
    const templates = [
        "The automated system processed your request and updated the queue status for today.",
        "Hey! Just checking in to see if we are still on for the sync later this afternoon.",
        "Please note that your access keys will expire within 24 hours. Action required.",
        "A new connection request was received from a device near your usual login location.",
        "The latest build deployment succeeded, and all automated test suites passed successfully."
    ];

    const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
    const randomMsg = templates[Math.floor(Math.random() * templates.length)];

    return {
        name: `${randomFirst}`,
        message: randomMsg
    };
}

