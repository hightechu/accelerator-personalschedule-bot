// Ping Module
module.exports = {
    // Name of Command
    name: 'taskamount',
    // Description of Command
    description: 'Adds the amount of task a person has',
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 1,
    // Execute Command - Parameters: message
    execute(message) {
        // Send Message
        message.channel.send("Please enter the duration of the task by typing !TaskTime.");
    },
};