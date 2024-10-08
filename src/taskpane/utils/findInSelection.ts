/** Determine list of terms used in given selected paragraph (terms are case sensitive) */
export const findInSelection = (terms: string[], selection: string): string[] => {
  // return empty array if selection string is empty
  if (!selection) return [];

  // use a sorted array to ensure largest term is met first
  const termsBySize = [...terms].sort((a, b) => b.length - a.length);
  // find matches in selection, removing match from selection as you go
  return termsBySize.reduce(
    ([prevMatches, prevSelection], currentTerm) => {
      return prevSelection.includes(currentTerm)
        ? [[...prevMatches, currentTerm], prevSelection.replaceAll(currentTerm, "")]
        : [prevMatches, prevSelection];
    },
    [[], selection] as [string[], string]
  )[0] as string[];
};
