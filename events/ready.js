module.exports = (client) => {
    client.once("ready", () => {
        console.log("client is online");

        client.user.setPresence({
            status: "idle",
            activity: {
                name: "this silly code~",
                type: "WATCHING",
            },
        });
    });
};
