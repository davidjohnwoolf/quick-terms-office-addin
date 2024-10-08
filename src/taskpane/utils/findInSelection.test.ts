import { findInSelection } from "./findInSelection";
import { describe, test, expect } from "@jest/globals";

describe("findInSelection", () => {
  const terms = ["Corporate Status", "Enterprise", "Violation", "Corporate Status Violation"];

  test("should not return any terms from given selection", () => {
    const selection = "Without limiting the generality of the foregoing, this Agreement is intended to...";
    expect(findInSelection(terms, selection)).toEqual([]);
  });

  test("should not return any terms enforcing case sensitivity", () => {
    const selection = "Without limiting the generality of the foregoing enterprise, this is the end.";
    expect(findInSelection(terms, selection)).toEqual([]);
  });

  test("should return terms from given selection", () => {
    const selectionWithMatches =
      "Notwithstanding the Corporate Status, a party to (or participant in) and is an Enterprise";
    expect(findInSelection(terms, selectionWithMatches)).toEqual(["Corporate Status", "Enterprise"]);
  });

  test("should return terms from selection without returning overlaps", () => {
    const selections = [
      "By reason of his or a party to (or participant in), on the merits of this current version of the Corporate Status Violation, the Enterprise (as hereinafter defined), including financial statements...",
      "The Corporate Status shall be deemed to have acted in good faith if action is based on the records or books of account of the Enterprise and contains no Violations",
    ];
    expect(findInSelection(terms, selections[0])).toEqual(["Corporate Status Violation", "Enterprise"]);
    expect(findInSelection(terms, selections[1])).toEqual(["Corporate Status", "Enterprise", "Violation"]);
  });
});
