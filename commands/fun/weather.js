const weather = require("weather-js");
const Discord = require("discord.js");

exports.info = {
    name: "weather",
    description: "display weather forecast",
    usage: "<city>",
};

exports.run = ({ msg, args }) => {
    weather.find({ search: args.join(" "), degreeType: "C" }, (_, result) => {
        if (!args.length) {
            msg.channel.send("please specify a location");

            return;
        }

        if (!result) {
            msg.channel.send("invalid location");

            return;
        }

        const current = result[0].current;
        const location = result[0].location;

        msg.channel.send(
            new Discord.MessageEmbed()
                .setDescription(`currently ${current.skytext}`)
                .setTitle(
                    `weather forecast for ${current.observationpoint.toLowerCase()}`
                )
                .addField("timezone", `utc${location.timezone}`, true)
                .addField("degree type", "celsius", true)
                .addField("temperature", `${current.temperature}°`, true)
                .addField("wind", current.winddisplay.toLowerCase(), true)
                .addField("feels like", `${current.feelslike}°`, true)
                .addField("humidity", `${current.humidity}%`, true)
        );
    });
};
