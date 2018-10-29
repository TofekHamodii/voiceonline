const Discord = require('discord.js');
const client = new Discord.Client();

client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('506539714258534420');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Ritual Online : ${currentSize} `);
  if (currentSize !== size) channel.setName(`Ritual Online : ${currentSize} `);
});

client.login(process.env.BOT_TOKEN);
