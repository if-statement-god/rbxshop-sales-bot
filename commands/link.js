module.exports = {
    name: 'link',
    description: 'stores useful links',
    execute (message, args)
    {
        const input_linktype = args[0];

        if (message.member.roles.cache.has('732170807446339634'))
        {
            if (input_linktype === "group")
            {
                message.channel.send("https://www.roblox.com/groups/4050917/OFFICIAL-Panders-Community#!/about");
            }
            else if (input_linktype === "paypalqr")
            {
                message.channel.send("https://cdn.discordapp.com/attachments/571908659043631104/730532175132491857/image0.png");
            }
            else if (input_linktype === "cashappqr")
            {
                message.channel.send("https://cdn.discordapp.com/attachments/571908659043631104/728510511708373064/Screenshot_20200703-002028.png");
            }
            else if (input_linktype === "venmoqr")
            {
                message.channel.send("https://cdn.discordapp.com/attachments/571908659043631104/728510581862170664/Screenshot_20200703-002051.png");
            }
            else
            {
                message.reply("Invalid argument! Usage: ```!link [group/paypalqr/venmoqr/cashappqr]```")
            }
            message.delete({timeout: 500})
        }
    }
}