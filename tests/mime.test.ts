import mimeFromBuffer, { MimeType } from "../src";
import exampleImage from "./fixtures/camera-small";

describe("mimeTree", () => {
  it("returns correct mime type", () => {
    expect(mimeFromBuffer(exampleImage)).toEqual(MimeType.PNG);
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
