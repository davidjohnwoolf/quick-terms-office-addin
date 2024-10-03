/* global Word */
export type Definition = Pick<Word.Paragraph, "uniqueLocalId" | "text"> & {
  term: string;
  description: string;
};
