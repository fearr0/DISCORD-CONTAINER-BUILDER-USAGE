const { ContainerBuilder, SectionBuilder, TextDisplayBuilder, SeparatorBuilder, SeparatorSpacingSize, ButtonBuilder, ButtonStyle, MessageFlags } = require("discord.js");

module.exports = {
    name: "test",
    aliases: ["test"],

    async execute(client, message, args) {

        const top = new SectionBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent("Üst Kısım"))
            .setButtonAccessory(
                new ButtonBuilder()
                    .setCustomId("top")
                    .setLabel("Ust")
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true)
            );

        const middle = new SectionBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent("Orta Kısım"))
            .setButtonAccessory(
                new ButtonBuilder()
                    .setCustomId("mid")
                    .setLabel("Orta")
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true)
            );

        const bottom = new SectionBuilder()
            .addTextDisplayComponents(new TextDisplayBuilder().setContent("Alt Kısım"))
            .setButtonAccessory(
                new ButtonBuilder()
                    .setCustomId("bottom")
                    .setLabel("Alt")
                    .setStyle(ButtonStyle.Secondary)
                    .setDisabled(true)
            );

        const container = new ContainerBuilder().setAccentColor(0x9b4dff);
        container.addSectionComponents(top);
        container.addSeparatorComponents(new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small));
        container.addSectionComponents(middle);
        container.addSeparatorComponents(new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small));
        container.addSectionComponents(bottom);
        container.addSeparatorComponents(new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small));
        
        await message.delete().catch(() => { });
        await message.channel.send({ components: [container], flags: MessageFlags.IsComponentsV2 });
    }
};
