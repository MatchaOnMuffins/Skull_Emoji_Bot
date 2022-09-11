require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client({
    intents: 3276799
});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
})


client.on('messageCreate', async message => {
    if (message.content === 'ping') {
        await message.reply('Pong!');
    }

    if (message.author.id === process.env.USER_ID) {
        if (message.guild.id === process.env.GUILD_ID) {
            await message.react('💀');
        }
    }

    if (message.content.includes('ily <3') && message.mentions.users.has(client.user.id)) {
        await message.react('💖');
        await message.reply(`ily2 <3`);
    }
})

client.login(process.env.TOKEN).then(() => {
    console.log(`Logged in at ${new Date()}`);
})
