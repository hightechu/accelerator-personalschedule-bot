// Ping Module
module.exports = {
    // Name of Command
    name: 'time space',
    // Description of Command
    description: 'This function is where you will be reminded of your goal and some inspiration.',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message(
        message.channel.send('This function is where you will be reminded of x goal of 1/4 of your time.');
    },
}; 