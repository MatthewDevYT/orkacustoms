const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    var botEmbed = new discord.MessageEmbed()
        .setTitle("User Info")
        .setColor("c8db23")
        .addFields(
            { name: "Name", value: message.member.user.tag },
            { name: "You Joined At", value: message.member.joinedAt },
        )
        .setFooter("Made By Matthyyyy#8821")
        .setTimestamp();



    return message.channel.send(botEmbed);
}


module.exports.help = {
    name: "myinfo"
}