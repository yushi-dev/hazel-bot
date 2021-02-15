const Util = require("../../util/functions");

module.exports = {
    name: "coinflip",
    aliases: ["flip"],
    run({ msg, args }) {
        if (!args.length) {
            msg.channel.send("please select an option");

            return;
        }

        const options = ["heads", "tails"];
        const coin = Util.getRandomArrayElement(options);

        if (!options.includes(args[0])) {
            msg.channel.send(`argument is invalid, it must be listen here: ${options.join(", ")}`);

            return;
        }

        const response = (args[0] == coin) ? "you won!" : "you lose";

        msg.channel.send(response);
    }
};