const Moment = require('moment')
const Discord = require('discord.js')
let prefix = 'es!'
module.exports = client => {
  
  const aktiviteListesi = [
    ``,
    '📜 | Kurallara Uymayı Unutmayın.',
    '',
    '✨ | Sunucuya Hoşgeldin.',
    '💎 | es!yardım | es!istatistik |',
    '🎊 | Botumuzu Oylamayı Unutmayın!',
    '🔨 | Sorular İçin Destek Sunucumuza Gelmeyi Unutmayın!'
  ]

  client.user.setStatus('dnd')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 5000)
}