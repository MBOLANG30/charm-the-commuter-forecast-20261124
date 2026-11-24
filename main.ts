import { mkdirSync, writeFileSync } from "node:fs";

// Charm the Commuter: one line of weather for a city that does not exist.
// The forecast below is written by this program to /output/entry.txt.
const forecast =
  "Wobbleford: light rain polishes the cobbles, the 8:04 bus is fashionably late, and your umbrella finally earns its keep.";

// The gate allows 1-140 characters: fail loudly instead of writing an
// invalid line if the forecast ever grows past the limit.
if (forecast.length < 1 || forecast.length > 140) {
  throw new Error(`forecast is ${forecast.length} characters, must be 1-140`);
}

// The grader mounts /output; only create it if missing, never remove it.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", forecast, "utf8");
