const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const desteksunucu = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`Esatsan Güncelleme`)
.setDescription(`

**Selam!** 
**__EsatSan__** Botunun Yapımcıları Güncelleme Yapınca Ne Geliyor Diye Düşünenler İçin Bu Komutu Yaptk! Aşağıyı Okuyarak Bulabilirsiniz!

<a:dansss:775034272544718868> Yardım Menüsü Değişti.

<a:tik:775033171649364008> Eğlence Komutları Eklendi.

<a:sapka:775033887381520416> "Oy Ver" Butonu Eklendi.

<a:uzgun_kopek:774955253765898240> Bot Yeni VDS e Bağlandı.

`)
.setImage("https://cdn.discordapp.com/attachments/788419180516081757/790620345370673162/standard_2.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(desteksunucu)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['güncelleme-log'], 
  permLevel: 4
};
  
exports.help = {
  name: "güncelleme-log",
  description: 'Güncellemelerimi Görebilirsiniz.',
  usage: 'güncelleme-log"'
};