import fs from "fs";
import path from "path";

const imagePath = path.resolve(`${__dirname}/camera-small.png`);
const image = fs.readFileSync(imagePath);
const uintImage = new Uint8Array(image);

export default uintImage;
