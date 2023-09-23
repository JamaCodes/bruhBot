const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bruh')
        .setDescription('Replies with a variable Bruh!')
        .addIntegerOption(option => 
            option.setName('amount')
                .setDescription('How much bruh you want to give')
                .setRequired(true)
                .setMinValue(1)
                .setMaxValue(50)) // Assuming a maximum of 10 u's in bruh
        .addUserOption(option => 
            option.setName('user')
                .setDescription('Mention a user to bruh at')
                .setRequired(false)), // Making it optional

    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const amount = interaction.options.getInteger('amount');
        
        let bruhResponse = 'br' + 'u'.repeat(amount) + 'h';
        await interaction.reply(`${user ? user.toString() : ''} ${bruhResponse}`);
    },
};
