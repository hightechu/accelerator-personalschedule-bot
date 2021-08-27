const Discord = require("discord.js");
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

        
            // Create Embed
            const embed = new Discord.MessageEmbed()
                .setColor('FFE3DC')
                .setTitle('Reminder!')
                .setDescription(`${message.author}, this is a reminder!`)
                
                .addFields(
                    
                    
                    {name: 'Health!', value:"A simple method to prevent eye strain during long periods of screentime is the 20-20-20 rule.  Every 20 minutes you should look at something 20 feet away from you for a total of 20 seconds."})
                .setTimestamp()
                .setFooter('Powered by PSB Discord Bot');

            // Send Message
            message.author.send(embed);
        }
    
    }
