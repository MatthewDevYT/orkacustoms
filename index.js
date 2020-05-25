const discord = require("discord.js");
const botConfig = require("./botconfig.json");

// Command handler
const fs = require("fs");

const client = new discord.Client();

// Command handler
client.commands = new discord.Collection();


client.login(process.env.token);

// Command handler
fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    var jsFiles = files.filter(f => f.split(".").pop() === "js");
    if (jsFiles.length <= 0) {
        console.log("No Files Found");
        return;
    }
    jsFiles.forEach((f, i) => {
        var fileGet = require(`./commands/${f}`);
        client.commands.set(fileGet.help.name, fileGet);

    });
});

client.on("ready", async () => {

    console.log(`${client.user.username} Online`);
    client.user.setActivity("Made By Matthy", { type: "STREAMING" });

});

client.on("message", async message => {

    if (message.author.bot) return;

    if (message.channel.type == "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    if (!message.content.startsWith(prefix)) return;

    // Command handler
    var arguments = messageArray.slice(1);

    var commands = client.commands.get(command.slice(prefix.length));

    if (commands) commands.run(client, message, arguments);
});
