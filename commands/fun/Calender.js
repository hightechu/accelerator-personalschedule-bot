// Require Discord.js
const Discord = require('discord.js');

// HighTechU Module
module.exports = {
    // Name of Command
    name: 'calendar',
    // Description of Command
    description: 'HighTechU Promotion',
    // Aliases
    aliases: ['htu'],
    // Execute Commnad - Paramenters: message
    execute(message) {
        // Create Embed
        const embed = new Discord.MessageEmbed()
            .setColor('#20C19E')
            .setTitle('Schedule')
            .setAuthor('PSB')
            .setDescription('Your Schedule for the week')
            .addFields(
                { name: 'PSB Discord Bot', value: 'Join us this summer for a discount for Premium Edition' },
                { name: '\u200B', value: '\u200B' },
                { name: 'Monday', value: 'A : 6:30pm - 7:00pm', inline: true },
                { name: 'Tuesday', value: 'No Task Today!', inline: true },
                { name: 'Wednesday', value: 'B : 2pm - 3pm', inline: true },
                { name: 'Thursday', value: 'C : 2pm - 2:45pm, D : 4:45pm - 6pm', inline: true },
                { name: 'Friday', value: 'No Task Today!', inline: true },
                { name: 'Saturday', value: 'E : 11am - 1pm', inline: true },
                { name: 'Sunday', value: 'F : 3pm - 7pm', inline: true },
                { name: 'Task Amount for this week', value: '6', inline: true },
            )
            .setTimestamp()
            .setFooter('Powered by UVic Engineering', 'https://hightechu.ca/wp-content/uploads/2019/09/logo-2-150x150.png');

        // Send Message
        message.channel.send(embed);
    },
};