// Ping Module
module.exports = {
    // Name of Command
    name: 'schedule',
    // Description of Command
    description: 'First step to creating a schedule',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 1,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send("Please enter the taks amount for this block by using !TaskAmount (number).");
    },
};