const discord = require("discord.js");

module.exports.run = async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Access Denied");
 
    if (!args[0]) return message.reply("Enter how many messages you want to delete");
 
    if (Number.isInteger(parseInt(args[0]))) {
 
        var aantal = parseInt(args[0]) + 1;
 
        message.channel.bulkDelete(aantal).then(() => {
 
            if (args[0] == 0) {
 
                message.reply(`You cannot delete 0 messages`).then(msg => msg.delete({timeout: 3000}));
           
            } else if (args[0] == 1) {
           
                message.reply(`1 Message deleted`).then(msg => msg.delete({timeout: 3000}));
           
            } else {
           
                message.reply(`${args[0]} Messages deleted`).then(msg => msg.delete({timeout: 3000}));
           
            }
 
        });
 
    } else {
        return message.reply("Geef een getal op.");
    }

}
module.exports.help = {
    name: "clear"

}