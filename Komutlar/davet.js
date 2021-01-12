const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const desteksunucu = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`Esatsan Davet.`)
.setDescription(`


Destek Sunucum İçin Bas
Beni Ekle!
 <a:dken:758584734288314368> [Beni Ekle ](https://discord.com/oauth2/authorize?client_id=785056993807302666&scope=bot&permissions=8)
<a:tamr:758584699907604480>  [Destek Sunucusu](https://discord.gg/xSHyNAcd4E)

`)
.setImage("https://cdn.discordapp.com/attachments/788419180516081757/790620345370673162/standard_2.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(desteksunucu)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['desteksunucu','DestekSunucu','Desteksunucu','destekSunucu','support-server','SupportServer','supportserver'], 
  permLevel: 0
};
  
exports.help = {
  name: "linkler",
  description: 'destek-sunucumu Görebilirsiniz.',
  usage: 'destek-sunucu"'
};