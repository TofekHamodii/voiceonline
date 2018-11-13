const Discord = require('discord.js');
const client = new Discord.Client();

client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('510202913973469194');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`- Voice Online : ${currentSize} `);
  if (currentSize !== size) channel.setName(`- Voice Online : ${currentSize} `);
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

client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '494939540595671040').setName("W");
client.channels.find('id', '494939540595671040').setName("We");
client.channels.find('id', '494939540595671040').setName("Wel");
client.channels.find('id', '494939540595671040').setName("Welc");
client.channels.find('id', '494939540595671040').setName("Welco");
client.channels.find('id', '494939540595671040').setName("Welcom");
client.channels.find('id', '494939540595671040').setName("Welcome");
client.channels.find('id', '494939540595671040').setName("Welcome T");
client.channels.find('id', '494939540595671040').setName("Welcome To");
client.channels.find('id', '494939540595671040').setName("Welcome To N");
client.channels.find('id', '494939540595671040').setName("Welcome To Ne");
client.channels.find('id', '494939540595671040').setName("Welcome To Nep");
client.channels.find('id', '494939540595671040').setName("Welcome To Nept");
client.channels.find('id', '494939540595671040').setName("Welcome To Neptu");
client.channels.find('id', '494939540595671040').setName("Welcome To Neptun");
client.channels.find('id', '494939540595671040').setName("Welcome To Neptune");

  }, 3000);
});

client.login(process.env.BOT_TOKEN);
