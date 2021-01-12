const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`EsatSan Yardım Menüsü.`)
.setDescription(`


<a:sessiz:798107101875404820>  **|**   \`es!yetkili-yardım\` : **Yetkili Komutlarını Gösterir**

<a:dansss:775034272544718868>  **|**    \`es!eğlence-yardım\` : **Eğlence Komutlarını Gösterir** 


[Botumuzu Eklemek İçin](https://discord.com/oauth2/authorize?client_id=785056993807302666&scope=bot&permissions=8) | [Destek Sunucusu](https://discord.gg/vkA92SX5kc) | [Botumuzu Oylayın! | YAKINDA!](https://cdn.discordapp.com/emojis/774954668686180352.gif?v=1)

`)
.setImage("https://cdn.discordapp.com/attachments/788419180516081757/790620345370673162/standard_2.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yardım','YARDIM','Yardım','help'], 
  permLevel: 4
};
  
exports.help = {
  name: "yardım",
  description: 'Komutlarımızı Burdan Görebilirsiniz.',
  usage: 'yardım'
};