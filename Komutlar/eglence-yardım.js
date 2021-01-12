const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`EsatSan Eğlence Menüsü.`)
.setDescription(`

<a:dansss:775034272544718868>  **|**  es!8ball :  **Sorduğunuz Soruya Cevap Verir.**

<a:dansss:775034272544718868>  **|**  es!aduket-çek :  **Belirtiğiniz Kişiye Aduket Çeker.**

<a:dansss:775034272544718868>  **|**  es!adam-asmaca :  **Adam Asmaca Oyununu Oynatır.**

<a:dansss:775034272544718868>  **|**  es!ara155 :  **Polisi Arar.**

<a:dansss:775034272544718868>  **|**  es!balık-tut :  **Balık Tutar.**

<a:dansss:775034272544718868>  **|**  es!beşlik :  **Arkadaşınıza Beşlik Atar.**

<a:dansss:775034272544718868>  **|**  es!efkarım :  **Efkarınızı Ölçer.**

<a:dansss:775034272544718868>  **|**  es!ejderha-yazı :  **Ejderhalı Logo Yapar.**

<a:dansss:775034272544718868>  **|**  es!slots :  **Ejderhalı Logo Yapar.**

<a:dansss:775034272544718868>  **|**  es!kral-ol :  **Kral Olursunuz.**


[Botumuzu Eklemek İçin](https://discord.com/oauth2/authorize?client_id=785056993807302666&scope=bot&permissions=8) | [Destek Sunucusu](https://discord.gg/vkA92SX5kc)

`)
.setImage("https://cdn.discordapp.com/attachments/788419180516081757/790620345370673162/standard_2.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['eğlence-yardım'], 
  permLevel: 4
};

exports.help = {
  name: "eğlence-yardım",
  description: 'Kullanıcı Komutlarımızı Burdan Görebilirsiniz.',
  usage:'kullanıcı-yardım'
};