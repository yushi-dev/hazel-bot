const randomPuppy = require("random-puppy");
const Discord = require("discord.js");

exports.info = {
    name: "meme",
    aliases: ["meme"],
};

exports.run = ({ msg }) => {
    const arr = ["dankmemes", "meme", "memes"];
    const random = arr[Math.floor(Math.random() * arr.length)];

    const img = await randomPuppy(random);

    msg.channel.send(
        new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(img)
            .setTitle(`Your meme. From r/${random}`)
            .setURL(`https://reddit.com/r/${random}`)
    );
};
