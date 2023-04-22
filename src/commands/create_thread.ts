import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export const createChannelCommand = new SlashCommandBuilder()
    .setName('create-channel')
    .setDescription('Create a new text channel')
    .addStringOption(option => option.setName('channel_name')
        .setDescription('Name of the channel')
        .setRequired(true))
    .addStringOption(option => option.setName('channel_topic')
        .setDescription('Topic of the channel')
        .setRequired(false))
    .addRoleOption(option => option.setName('channel_role')
        .setDescription('Role to give access to the channel')
        .setRequired(false))
    .toJSON();

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Pong!");
}
