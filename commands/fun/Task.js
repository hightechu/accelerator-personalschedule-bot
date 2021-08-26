// Ping Module
module.exports = {
    // Name of Command
    name: 'task',
    // Description of Command
    description: 'Assign the task to the corresponding letter and assign the time (minutes).',
    usage: '[l-mm]',
    args:true,
    // Guild - TRUE
    guildOnly: true,
    // Cooldown
    cooldown: 1,
    // Execute Command - Parameters: message
    execute(message, args) {
        console.log(args);
        let amount = args[0].split('-');
        // Send Message
        message.channel.send("Okay, I have added "+ amount[0] + " in the schedule and have assigned it for "+ amount[1] + " minutes.");
    },
};