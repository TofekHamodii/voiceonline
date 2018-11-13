const Discord = require('discord.js');
const client = new Discord.Client();

client.on('voiceStateUpdate', (old, now) => {
  const channel = client.channels.get('511965965442088966');
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
      client.channels.find('id', '511965833128575006').setName("W");
      client.channels.find('id', '511965833128575006').setName("We");
      client.channels.find('id', '511965833128575006').setName("Wel");
      client.channels.find('id', '511965833128575006').setName("Welc");
      client.channels.find('id', '511965833128575006').setName("Welco");
      client.channels.find('id', '511965833128575006').setName("Welcom");
      client.channels.find('id', '511965833128575006').setName("Welcome");
      client.channels.find('id', '511965833128575006').setName("Welcome T");
      client.channels.find('id', '511965833128575006').setName("Welcome To");
      client.channels.find('id', '511965833128575006').setName("Welcome To N");
      client.channels.find('id', '511965833128575006').setName("Welcome To Ne");
      client.channels.find('id', '511965833128575006').setName("Welcome To Nep");
      client.channels.find('id', '511965833128575006').setName("Welcome To Nept");
      client.channels.find('id', '511965833128575006').setName("Welcome To Neptu");
      client.channels.find('id', '511965833128575006').setName("Welcome To Neptun");
      client.channels.find('id', '511965833128575006').setName("Welcome To Neptune");
      
        }, 3000);
      });

client.on('message', msg => {

    if (msg.content == '^join') {
        if (msg.member.voiceChannel) {

     if (msg.member.voiceChannel.joinable) {
         msg.member.voiceChannel.join().then(msg.react('white_check_mark'));
     }
    }
}
})
client.on('ready', () => { //code bot not leave room voice //Bot Is Online
    client.channels.get("511987083322327053").join(); //by : iBeAnthonyD
    });

client.login(process.env.BOT_TOKEN);
