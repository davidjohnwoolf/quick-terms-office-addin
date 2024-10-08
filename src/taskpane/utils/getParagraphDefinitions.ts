/* global Word */

import { Definition } from "../types";
import { isDefinition } from "./isDefinition";

/** Gets definitions from an array of paragraphs */
export const getParagraphDefinitions = (paragraphItems: Word.Paragraph[]): Definition[] => {
  return paragraphItems.reduce((prev, { text, uniqueLocalId }) => {
    if (!isDefinition(text)) return prev;

    // extract the term and description from the paragraph text
    // note: Word paragraph text excludes spaces before and after
    const [term, description] = text.slice(1).split(`”`) as [string, string];

    return [...prev, { text, uniqueLocalId, term, description }];
  }, [] as Definition[]);
};
