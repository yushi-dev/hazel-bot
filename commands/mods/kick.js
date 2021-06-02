exports.info = {
    name: "kick",
    usage: "<mention>",
    permissions: ["KICK_MEMBERS", "VIEW_AUDIT_LOG"],
};

exports.run = async ({ msg }) => {
    let mentioned_user = msg.mentions.members.first();

    if (!mentioned_user) {
        msg.channel.send("please provide a user to kick");

        return;
    }

    if (mentioned_user.id === msg.author.id) {
        msg.channel.send("silly, you can't kick yourself");

        return;
    }

    mentioned_user
        .kick()
        .then(() => {
            msg.channel.send("successfully kicked user");
        })
        .catch(() => {
            msg.channel.send("user is unable to be kicked");
        });
};
