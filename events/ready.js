exports.info = {
    once: true,
};

exports.run = (client) => {
    console.log("client is online");

    client.user.setPresence({
        status: "online",
        activity: {
            name: "anime & valo clips",
            type: "WATCHING",
        },
    });
};
