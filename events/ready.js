module.exports.info = {
    once: true,
};

module.exports.run = (client) => {
    console.log("client is online");

    client.user.setPresence({
        status: "online",
        activity: {
            name: "the clouds...",
            type: "WATCHING",
        },
    });
};
