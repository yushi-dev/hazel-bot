export const info = {
    once: true,
};

export function run(client) {
    console.log("client is online");

    client.user.setPresence({
        status: "online",
        activity: {
            name: "anime & valo clips",
            type: "WATCHING",
        },
    });
}
