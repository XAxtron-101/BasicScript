import { world, system } from "@minecraft/server";


system.run(() => {
  for (const player of world.getPlayers()) {
    player.addTag("Say")
    if (player.hasTag("Say")) {
      player.runCommand("summon armor_stand ~~~");
      player.removeTag("Say");
    }
  }
});
