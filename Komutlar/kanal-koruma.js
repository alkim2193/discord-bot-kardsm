const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
 
exports.run = async(client, message, args) => {

let prefix = ayarlar.prefix
  
  if (!message.member.hasPermission('MANAGE_CHANNELS'))
        return message.channel.send("**Bu Komutu Kullanabilmek İçin Kanalları Yönet Yetkisine Sahip Olmalısın**")

  if (!args[0]) {
    const sa = new Discord.MessageEmbed()
    .setDescription(`Bunu mu Arıyorsun? ${prefix}kanal-koruma aç/kapat`)
    .setTimestamp()
    return message.channel.send(sa)
  }
  if (args[0] === 'aç') {
    
    db.set(`kanalk_${message.guild.id}`, "Aktif")
       const sa = new Discord.MessageEmbed()
    .setDescription(`Kanal Koruma Başarıyla Açıldı!`)
    .setTimestamp()
    return message.channel.send(sa)
  }
   if (args[0] === 'kapat') {
    
    db.delete(`kanalk_${message.guild.id}`)
       const sa = new Discord.MessageEmbed()
    .setDescription(`Kanal Koruma Başarıyla Kapatıldı!`)
    .setTimestamp()
    return message.channel.send(sa)
  }
};
exports.conf = {
  aliases: ['channel-guard'],
  permLevel: 0
};
exports.help = {
  name: 'kanal-koruma'
}; 
