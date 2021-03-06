import { mimeTree, offsets } from "./tree";
import { MimeType } from "./types";

const mimeFromBuffer = (buffer: Uint8Array): MimeType => {
  if (!buffer || buffer.byteLength < 3) {
    throw new Error("Buffer is not a valid image!");
  }

  for (const startIndex of offsets) {
    let pos = mimeTree[startIndex];
    for (let i = startIndex; i <= 12; i += 1) {
      const num = buffer[i];
      if (typeof pos !== "object") {
        return pos;
      } else if (Object.prototype.hasOwnProperty.call(pos, num)) {
        pos = pos[num];
      } else {
        break;
      }
    }
  }

  throw new Error("Buffer is not a supported image type!");
};

export default mimeFromBuffer;
export { MimeType, mimeTree };
