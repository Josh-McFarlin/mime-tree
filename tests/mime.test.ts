import fs from "fs";
import path from "path";
import mimeFromBuffer, { MimeType } from "../src";

const mimeMapped: Record<string, MimeType> = {
  bmp: MimeType.BMP,
  gif: MimeType.GIF,
  jpeg: MimeType.JPEG,
  png: MimeType.PNG,
  tif: MimeType.TIFF,
  webp: MimeType.WEBP,
  avif: MimeType.AVIF,
};

describe("mimeTree", () => {
  it("returns correct mime type", () => {
    const fromTypes = ["bmp", "gif", "jpeg", "png", "tif", "webp", "avif"];

    fromTypes.forEach((from) => {
      const imgPath = path.join(__dirname, "fixtures", `camera.${from}`);
      const image = fs.readFileSync(imgPath);

      const result = mimeFromBuffer(image);

      expect(result).toEqual(mimeMapped[from]);
    });
  });

  it("throws on unsupported mime type", () => {
    expect(() => {
      mimeFromBuffer(new Uint8Array(8));
    }).toThrow("Buffer is not a supported image type!");
  });

  it("throws on invalid file", () => {
    expect(() => {
      mimeFromBuffer(new Uint8Array(2));
    }).toThrow("Buffer is not a valid image!");
  });
});
