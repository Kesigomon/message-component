import * as discord from 'discord.js'

const client = new discord.Client({intents: 2 ** 15 - 1})

client.on("ready", async ()=>{
    try{
        const channel = client.channels.resolve("704242290062786631") as discord.TextChannel
        const row = new discord.MessageActionRow()
        row.addComponents(
            new discord.MessageSelectMenu()
                .setCustomId('select')
                .addOptions([
                    {
                        label: 'Tintin',
                        description: 'Otintin',
                        value: '739294252118573177',
                    },
                    {
                        label: 'Tifa',
                        description: 'Oppai',
                        value: 'sex',
                    }
                ])
                .setMinValues(1)
                .setMaxValues(1),
        )
        await channel.send({
            content: "This is test",
            components: [
                row
            ]
        })
    }
    finally {
        // await client.destroy()
    }
})

client.on('interactionCreate', async interaction => {
    if (interaction.isSelectMenu()){
        interaction.reply({content: "test", ephemeral: true})
    }
})

async function main(){
    await client.login(process.env.BOT_TOKEN)
}

main()