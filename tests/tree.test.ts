import { mimeTree } from "../src/tree";
import { treeResult } from "./fixtures/tree-result";

describe("mimeTree", () => {
  it("returns correct mime type", () => {
    expect(mimeTree).toEqual(treeResult);
  });
});
