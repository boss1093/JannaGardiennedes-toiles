const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("*")

bot.on('ready', function() {
    bot.user.setGame("Accueil les nouvelles 𝓒𝒶𝓉1");
    console.log("connectedç");
});

bot.login("NTg0MDMwMzkxMjE2NzY3MDA4.XPJ4EA.d4_eyHoBiQaXnekASMkG4GsytJ0");
var prefix = (":::");

bot.on("guildMemberAdd", member => {
    member.guild.channel.find("name", "general").send(`Bienvenue jeune 𝓒𝒶𝓉1 ${member}`)
})

bot.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "general").send(`${member} Quitte le rouyaume`)
})

bot.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', 'Membres');
    member.addRole(VILLAGEOIS)
})
