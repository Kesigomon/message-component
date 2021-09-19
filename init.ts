import * as discord from 'discord.js'
import { REST } from '@discordjs/rest'
import {Routes} from 'discord-api-types/v9';
import {SlashCommandBuilder} from '@discordjs/builders'
const token = process.env.BOT_TOKEN
const commands = [
    new SlashCommandBuilder()
        .setName("hello")
        .setDescription("Send Hello world!")
];

// Place your client and guild ids here
const clientId = '704266309214535751';
const guildId = '704235909436145674'
const rest = new REST({ version: '9' }).setToken(token as string);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: commands },
        );
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();