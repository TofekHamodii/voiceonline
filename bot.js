const Discord = require('discord.js');
const client = new Discord.Client();

client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('515164603076968469');
  const currentSize = channel.guild.members.filter(m => m.voiceChannel).size;
  const size = channel.name.match(/\[\s(\d+)\s\]/);
  if (!size) return channel.setName(`` Neptune Voice : ${currentSize} `);
  if (currentSize !== size) channel.setName(` Neptune Voice : ${currentSize} `);
});

var prefix = "^"
client.on("message", async message => {
    if(message.content.startsWith(prefix + "join")) {
        if(message.author.id === "515164603076968469") {
        
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



client.on('message', msg => {

    if (msg.content == '.join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("515164603076968469").join(); //by : iBeAnthonyD
    });

client.login(process.env.BOT_TOKEN);
