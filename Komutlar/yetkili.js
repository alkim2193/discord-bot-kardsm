const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`EsatSan yetkili Menüsü.`)
.setDescription(`

<a:sessiz:798107101875404820>  **|**  es!ban: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**

<a:sessiz:798107101875404820>  **|**  es!unban :**Belirttiğiniz Kişinin Banını Kaldırırsınız**

<a:sessiz:798107101875404820>  **|**  es!temizle :  **Belirttiğiniz Sayıda Mesajı Siler**

<a:sessiz:798107101875404820>  **|**  es!ping :  **Botun Pingini Ölçüp Atar**

<a:sessiz:798107101875404820>  **|**  es!ban-say :  **Sunucuda Kaç Kişiyi Banladığınızı Gösterir**

<a:sessiz:798107101875404820>  **|**  es!mute :  **Belirtiğiniz Kişiyi Susturur**

<a:sessiz:798107101875404820>  **|**  es!çek : **Belirtiğiniz Kişiyi İstediğiniz Odaya Çeker**

<a:sessiz:798107101875404820>  **|**  es!yavaş-mod : **Belirtiğiniz Sayıda Yavaş Mod Yapar**

<a:sessiz:798107101875404820>  **|**  es!sa-as : **Sa-Ası Açar**

<a:sessiz:798107101875404820>  **|**  es!rol-ver : **Belirttiğiniz Kişiye Rol Verir**

<a:sessiz:798107101875404820>  **|**  es!rol-al : **Belirttiğiniz Kişinin En Yüksek Rolünü Alır**


[Botumuzu Eklemek İçin](https://discord.com/oauth2/authorize?client_id=785056993807302666&scope=bot&permissions=8) | [Destek Sunucusu](https://discord.gg/vkA92SX5kc)

`)
.setImage("https://cdn.discordapp.com/attachments/788419180516081757/790620345370673162/standard_2.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: "yetkili-yardım",
  description: 'Komutlarımızı Burdan Görebilirsiniz.',
  usage: 'yetkili-yardım'
};