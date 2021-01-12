const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bu Komutu Kullanmak İçin **Yönetici** Yetkisine Sahip Olmalısın!");

if (!args[0]) return message.channel.send('Sa-as yazısını açmak için `sa-as aç veya kapat`')

if (args[0] == 'aç') {
  
db.set(`saas_${message.guild.id}`, 'açık')
  
message.channel.send(`**Sa-As Sistemi Açıldı** (Not : Eğer Bu Komutu Başka Sunucuda Biri Kullanırsa Otomatik Bütün Sunucularda Açılır`).then(devtr => devtr.delete({ timeout: 3000}));
}
  
if (args[0] == 'kapat') {
  
db.set(`saas_${message.guild.id}`, 'kapali')
  
message.channel.send(`**Sa-As Sistemi Kapandı** (Not : Eğer Bu Komutu Başka Sunucuda Biri Kullanırsa Otomatik Bütün Sunucularda Açılır`).then(devtr => devtr.delete({ timeout: 3000}));
}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: 'sa-as'
};