// Ping Module
module.exports = {
    // Name of Command
    name: 'goal',
    // Description of Command
    description: ' ',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 50,
    usage: 'my goal here',
    // Arguments TRUE
    args: true,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message(
        message.channel.send(' Thank You, I will help you get closer to accomplishing your goal');
    },
}; 