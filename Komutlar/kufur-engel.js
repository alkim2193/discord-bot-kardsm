const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(" Yetersiz **yetki!**")

  if (!args[0]){
    message.channel.send('Küfür-engel kapat/aç Yazmalısın')
   
  }
  
  if (args[0] === 'aç'){
    message.channel.send("**Küfür Korumasını Başarıyla Açtım :white_check_mark: **").then(devtr => devtr.delete({ timeout: 3000}));
    

    db.set(`kufur_${message.guild.id}`, "acik")
       
  }
  if (args[0] === 'kapat'){
    message.channel.send('Küfür Engel Başarıyla Kapatıldı').then(devtr => devtr.delete({ timeout: 3000}));
    
    db.set(`kufur_${message.guild.id}`, "kapali")
  }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['küfür'],
  permLevel: 0
}
exports.help = {
  name: "küfür-engel",
  description: "Küfür engel açar yada kapatır.",
  usage: "küfür"
}