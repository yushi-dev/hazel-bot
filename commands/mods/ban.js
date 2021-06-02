exports.info = {
    name: "ban",
    usage: "<mention>",
    permissions: ["BAN_MEMBERS", "VIEW_AUDIT_LOG"],
};

exports.run = async ({ msg }) => {
    let mentioned_user = msg.mentions.members.first();

    if (!mentioned_user) {
        msg.channel.send("please provide a user to ban");

        return;
    }

    if (mentioned_user.id === msg.author.id) {
        msg.channel.send("silly, you can't ban yourself");

        return;
    }

    mentioned_user
        .ban()
        .then(() => {
            msg.channel.send("successfully banned user");
        })
        .catch(() => {
            msg.channel.send("user is unable to be banned");
        });
};
