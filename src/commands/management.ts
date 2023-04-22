import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction } from "discord.js";

export const data = new SlashCommandBuilder()
  .setName("trial application")
  .setDescription("Will create channel with the trial application and add the Raider role to the permissions");

export async function execute(interaction: CommandInteraction) {
  return interaction.reply("Pong!");
}
