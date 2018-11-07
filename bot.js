const Discord = require('discord.js');
const client = new Discord.Client();

client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('509827374561624080');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`Universe Online : ${currentSize} `);
  if (currentSize !== size) channel.setName(`Universe Online : ${currentSize} `);
});

var prefix = "^"
client.on("message", async message => {
    if(message.content.startsWith(prefix + "join")) {
        if(message.author.id === "507978288250093568") {
        
      let args = message.content.split(" ").slice(1).join(" ");
        if(!args) {
          return message.channel.send("**يرجــى تحديـد روم صوتــي مـع الآمـر ء .**");
        }
          let room = message.guild.channels.find(a => a.name.includes(args));
            room.join() .then(() => {
              message.channel.send(`**تـم تثبيــت البـوت فـي روم , \`${room.name}\`**`) .then((m) => {
                m.delete(5000);
              });
            });
              
    } else {
      return message.channel.send("**آنــت لست مؤهــل لآستخـدآم هذا الآمــر ء .**");
    }
  }
  });

client.login(process.env.BOT_TOKEN);
