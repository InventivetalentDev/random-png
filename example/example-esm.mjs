import { randomPNG } from "random-png";
import fs from "fs";

const buffer = randomPNG(64, 64);
fs.writeFileSync('example.esm.png', buffer);