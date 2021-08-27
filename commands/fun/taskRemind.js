const Discord = require("discord.js");
// Ping Module
module.exports = {
    // Name of Command
    name: 'taskR',
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

        // Setup Reminder
        let startDate = Date().toString();
        console.log(`Starting reminder messages at ${startDate}`);

        // Setup TimeInterval
        let timeInterval = 1;

       
       
        
        const r = ['A simple method to prevent eye strain during long periods of screentime is the 20-20-20 rule.  Every 20 minutes you should look at something 20 feet away from you for a total of 20 seconds.', ' Just a reminder to stay hydrated so that we can stay healthy!', 'remember to do some exercises every once in a while to stay fit.'];
        
        let old = 55;
        // Start Reminder - Every X Minutes
        let interval = setInterval(function () {
            
        let randomize = (Math.floor(Math.random()*(3-1+1)+1))-1;
        
        while (randomize == old){
        randomize = (Math.floor(Math.random()*(3-1+1)+1))-1;

        
        }

        old = randomize;   
        
            // Create Embed
            const embed = new Discord.MessageEmbed()
                .setColor('FFE3DC')
                .setTitle('Reminder!')
                .setDescription(`${message.author}, this is a reminder!`)
                
                .addFields(
                    
                    
                    {name: 'Health!', value: r[randomize]})
                .setTimestamp()
                .setFooter('Powered by PSB Discord Bot');

            // Send Message
            message.author.send(embed);
        }, timeInterval * 60 * 1 * 1000);
    
    },
};