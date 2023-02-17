const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");

//----------------------------------\\
client.on("ready", () => {
    client.user.setActivity(ayarlar.oynuyor);

    console.log(
    `BOT: ${client.user.username}`
    )});

client.on("ready", async () => {
  let botVoiceChannel = client.channels.cache.get(ayarlar.kanalid);
  console.log(`Ses kanalına başarıyla giriş yapıldı!`);
  if (botVoiceChannel)
  botVoiceChannel
      .join()
      .catch(err => console.error(`Ses kanalına bağlanılamadı!`))});
client.login(ayarlar.token);
