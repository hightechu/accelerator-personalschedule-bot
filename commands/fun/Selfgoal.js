// Ping Module
module.exports = {
    // Name of Command
    name: 'selfgoal',
    // Description of Command
    description: 'This function is where you will type in "Selfgoal; blah blah blah',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message(
        message.channel.send('please type in your personalized goal (example: want to become a neurosurgeon)');
    },
}; 