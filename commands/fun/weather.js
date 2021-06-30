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
            msg.channel.send("Please specify a location");
        }

        if (!result) {
            msg.channel.send("Invalid location");

            return;
        }

        console.log(result);

        var current = result[0].current;
        var location = result[0].location;

        const weatherinfo = new Discord.MessageEmbed()
            .setDescription(`**${current.skytext}**`)
            .setAuthor(`Weather forecast for ${current.observationpoint}`)
            .setThumbnail(current.imageUrl)
            .addField("Timezone", `UTC${location.timezone}`, true)
            .addField("Degree Type", "Celsius", true)
            .addField("Temperature", `${current.temperature}°`, true)
            .addField("Wind", current.winddisplay, true)
            .addField("Feels like", `${current.feelslike}°`, true)
            .addField("Humidity", `${current.humidity}%`, true);

        msg.channel.send(weatherinfo);
    });
};
