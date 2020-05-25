const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("Server Info")
        .setColor("c8db23")
        .addFields(
            { name: "Server Name", value: message.guild.name },
            { name: "Members", value: message.guild.memberCount },
        )
        .setFooter("Made By Matthyyyy#8821")
        .setTimestamp();



    return message.channel.send(botEmbed);
        };

    module.exports.help = {
        name: "serverinfo"
    }