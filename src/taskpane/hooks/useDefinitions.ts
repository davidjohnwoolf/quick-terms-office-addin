import { useContext, useState } from "react";
import { DefinitionsContext } from "../components/DefinitionsProvider";
import { findInSelection } from "../utils/findInSelection";
import { Definition } from "../types";
import { useSelectionChangeEffect } from "./useSelectionChangeEffect";

/** Returns definitions in paragraph form by name and filtered by selection if needed */
export const useDefinitions = (showAll: boolean = false): Definition[] => {
  // this state is only used by the document API, should not depend on component events
  const [currentSelection, setCurrentSelection] = useState<string>();
  useSelectionChangeEffect(setCurrentSelection);

  const definitions = useContext(DefinitionsContext);

  // Early return to avoid unneeded work if no selection prop
  if (!currentSelection || showAll) return definitions;

  const terms = definitions.map((def) => def.term);
  // get a list of terms found in selection (memoized to avoid recalculating with same deps)
  const termsInSelection = findInSelection(terms, currentSelection);

  // return definitions found in selection or all if none found
  return termsInSelection.length ? definitions.filter(({ term }) => termsInSelection.includes(term)) : definitions;
};
