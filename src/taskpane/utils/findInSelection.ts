/**
 * Determine list of terms used in given selected paragraph
 * @note case sensitivity is preserved, assumes terms are case sensitive
 */
export const findInSelection = (terms: string[], selection: string): string[] => {
  /** @note sort mutates so spread is used here */
  // use a sorted array to ensure largest term is met first,
  const termsBySize = [...terms].sort((a, b) => b.length - a.length);
  // then exclude each match from selection as you proceed through candidate terms
  return termsBySize.reduce(
    ([prevMatches, prevSelection], currentTerm) => {
      // return prev if no matches found
      if (!prevSelection.includes(currentTerm)) return [prevMatches, prevSelection];

      // if term is included in selection, add to matches array and return with the selection
      // selection after term replaced globally with regex to exclude all occurrences
      return prevSelection.includes(currentTerm)
        ? [[...prevMatches, currentTerm], prevSelection.replaceAll(currentTerm, "")]
        : [prevMatches, prevSelection];
    },

    [[], selection] as [string[], string]
  )[0] as [];
};
