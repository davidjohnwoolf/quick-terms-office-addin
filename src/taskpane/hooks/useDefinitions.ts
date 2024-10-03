import { useContext } from "react";
import { DefinitionsContext } from "../components/DefinitionsProvider";
import { findInSelection } from "../utils/findInSelection";
import { Definition } from "../types";

/** Returns definitions in paragraph form by name and filtered by selection if needed */
export const useDefinitions = (selection: string): Definition[] => {
  const definitions = useContext(DefinitionsContext);

  // Early return to avoid unneeded work if no selection prop
  if (!selection) return definitions;

  // get a list of terms found in selection
  const termsInSelection = findInSelection(
    definitions.map((def) => def.term),
    selection
  );

  // return definitions found in selection or all if none found
  return termsInSelection.length ? definitions.filter(({ term }) => termsInSelection.includes(term)) : definitions;
};
