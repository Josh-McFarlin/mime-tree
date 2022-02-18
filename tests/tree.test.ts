import tree from "../src/tree";
import { treeResult } from "./fixtures/tree-result";

describe("mimeTree", () => {
  it("returns correct mime type", () => {
    expect(tree).toEqual(treeResult);
  });
});
