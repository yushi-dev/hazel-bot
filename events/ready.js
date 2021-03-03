module.exports.info = {
    name: "ready",
    once: true,
};

module.exports.run = (client) => {
    console.log("client is online");

    client.user.setPresence({
        status: "online",
        activity: {
            name: "this silly code~",
            type: "WATCHING",
        },
    });
};
