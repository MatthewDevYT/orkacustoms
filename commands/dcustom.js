const discord = require("discord.js");

module.exports.run = async(client, message, args) => {

    // ?scustoms Solo Customs / code / kanaal

    if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Access Denied");

    var seperator = "/";

    if (args[0] == null) {
        var embed = new discord.MessageEmbed()
            .setTitle("Duo Custom Host Info")
            .setColor("#00ea00")
            .setDescription(`Host a game by using the command: \n ?dcustom 'Code' ${seperator} 'Channel'`)
            .setFooter("Made By Matthyyyy#8821");
        return message.reply(embed);
    }

    var argsList = args.join(" ").split(seperator);

    if (argsList[1] === undefined) argsList[2] = "duo-customs"

    var options = {
        code: argsList[0],
        channel: argsList[1].trim()
    }

    var scustomEmbed = new discord.MessageEmbed()
        .setTitle("Duo Custom")
        .setColor("#00ea00")
        .setDescription(`Code: ${options.code} \n Hosted By ${message.author} \n Mode: Duo Arena`)
        .setTimestamp()
        .setFooter("Made By Matthyyyy#8821");

    var channel = message.member.guild.channels.cache.find(channels => channels.name === options.channel);
    if (!channel) return message.reply("Channel Not Found");

    channel.send(scustomEmbed);

}
module.exports.help = {
    name: "dcustom"

}