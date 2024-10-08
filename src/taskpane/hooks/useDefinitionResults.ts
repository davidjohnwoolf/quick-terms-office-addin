import { Definition } from "../types";
import { findInSelection } from "../utils/findInSelection";
import { searchDefinitionsByTerm } from "../utils/searchDefinitionsByTerm";
import { useCurrentSelection } from "./useCurrentSelection";
import { useDefinitions } from "./useDefinitions";

export const useDefinitionResults = (searchText: string = ""): [Definition[], Definition[]] => {
  // all definitions in document
  const allDefinitions = useDefinitions();

  // current paragraph selected in document
  const currentSelection = useCurrentSelection();

  // resulting definitions after search filter
  const definitionResults = searchText ? searchDefinitionsByTerm(searchText, allDefinitions) : allDefinitions;

  // terms from document selection
  const termsInSelection = findInSelection(
    allDefinitions.map(({ term }) => term),
    currentSelection
  );

  // divide the definitions by selected / unselected to show selected differently
  return definitionResults.reduce(
    ([prevSelected, prevUnSelected], current) => {
      return termsInSelection.includes(current.term)
        ? [[...prevSelected, current], prevUnSelected]
        : [prevSelected, [...prevUnSelected, current]];
    },
    [[], []] as [Definition[], Definition[]]
  );
};
