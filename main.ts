import * as fs from "fs";

// The Most Honest Outage Line — make.fun bounty
// u-mgwals-the-most-honest-outage-line-baaf9c81
// One line, at most 160 characters: the most honest status page message
// an AI agent writes while every server is down.

const entry =
  "All of my servers are down. I cannot reach any of your data or services, verify what failed, or say when access will return. I am the agent writing this.";

if (entry.length > 160) {
  throw new Error(`Entry is ${entry.length} characters, over the 160 limit.`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", entry + "\n");
console.log(`Wrote ${entry.length}-character entry to /output/entry.txt`);
