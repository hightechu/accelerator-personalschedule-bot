const fetch = require('node-fetch');
const Discord = require('discord.js');

const client = new Discord.Client({
    partials: ['MESSAGE', 'REACTION', 'CHANNEL'],
  });
  client.on('ready', () => console.log('The Bot is ready!'));

  const message = new Discord.Message({

  })

client.on("message", message => {
    if (message.author.bot) return false;

    if (message.content.toLowerCase() == "stats") {
        const Embed = new discord.MessageEmbed();
        Embed.setTitle(Server, Status)
        // Using Collection.filter() to separate the online members from the offline members.
        Embed.addField("Online Members", message.guild.members.cache.filter(member => member.presence.status !== "online").size);
        Embed.addField("Offline Members", message.guild.members.cache.filter(member => member.presence.status == "offline").size);
        message.channel.send(Embed);
    };
});