/* global Word */
import { isDefinition } from "./isDefinition";
import { ValueById } from "../types";

/** Filter definitions from paragraphs and normalize */
export const reduceParagraphsToDefinitions = (paragraphs: Word.Paragraph[]): ValueById => {
  return paragraphs.reduce((prev, { text, uniqueLocalId }) => {
    /** Regex can create issues if not created each time, avoid moving without checking */
    return isDefinition(text) ? { ...prev, [uniqueLocalId]: text } : prev;
  }, {});
};
