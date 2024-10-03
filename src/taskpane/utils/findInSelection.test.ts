import { findInSelection } from "./findInSelection";
import { describe, test, expect } from "@jest/globals";

describe("findInSelection", () => {
  const terms = ["Corporate Status", "Enterprise", "Violation", "Corporate Status Violation"];

  test("should not return any terms from given selection", () => {
    const selection =
      "Without limiting the generality of the foregoing, this Agreement is intended to confer upon Indemnitee [and Appointing Stockholder] indemnification rights to the fullest extent permitted by applicable laws.";
    expect(findInSelection(terms, selection)).toEqual([]);
  });

  test("should not return any terms enforcing case sensitivity", () => {
    const selection = "Without limiting the generality of the foregoing enterprise, this is the end.";
    expect(findInSelection(terms, selection)).toEqual([]);
  });

  test("should return terms from given selections", () => {
    const selectionWithMatches =
      "Notwithstanding any other provision of this agreement, to the extent that Indemnitee is, by reason of his or her Corporate Status, a party to (or participant in) and is an Enterprise";

    expect(findInSelection(terms, selectionWithMatches)).toEqual(["Corporate Status", "Enterprise"]);
  });

  test("should return terms from given selection excluding overlapping", () => {
    const selectionOne =
      "By reason of his or a party to (or participant in), on the merits of this current version of the Corporate Status Violation, as such may be amended from time to time, against all things actually and reasonably incurred by him or her, or on his or her behalf, in connection therewith. Indemnitee shall be deemed to have acted in good faith if Indemnitee action is based on the records or books of account of the Enterprise (as hereinafter defined), including financial statements on information supplied";

    const selectionTwo =
      "By reason of his or a party to (or participant in), on the merits of this current version of the Corporate Status, as such may be amended from time to time, against all things actually and reasonably incurred by him or her, or on his or her behalf, in connection therewith. Indemnitee shall be deemed to have acted in good faith if Indemnitee action is based on the records or books of account of the Enterprise (as hereinafter defined), including financial statements on information supplied Violation";
    expect(findInSelection(terms, selectionOne)).toEqual(["Corporate Status Violation", "Enterprise"]);
    expect(findInSelection(terms, selectionTwo)).toEqual(["Corporate Status", "Enterprise", "Violation"]);
  });
});
