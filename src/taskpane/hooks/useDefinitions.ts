import { useContext } from "react";
import { DefinitionsContext } from "../components/DefinitionsProvider";

// This data structure might normally better with the id as key, as the case in the context state
// however is this way on account of the name key, not the id, acting as the id for our purposes
interface DefinitionProperties {
  [name: string]: { uniqueId: string; description: string };
}

/** Returns definitions in paragraph form by name and filtered by selection if needed */
export const useDefinitions = (selection: string): DefinitionProperties => {
  const definitions = useContext(DefinitionsContext);

  /** Parse the definition into term and description by id */
  const propsByName: DefinitionProperties = Object.entries(definitions).reduce(
    (prev, [uniqueId, text]: [string, string]) => {
      /** Extract the definition title @todo account for edge cases regarding the non-curly quotes */
      const [name, description] = text.slice(1).split(`”`);

      return { ...prev, [name]: { uniqueId, description } };
    },
    {}
  );

  // Early return to avoid unneeded work of no selection prop
  if (!selection) return propsByName;

  const selectionIncludes = Object.keys(propsByName).filter((name) => selection.indexOf(name) >= 0);

  // Return the propsByName only for selectionInclude terms (if any)
  return !selectionIncludes.length
    ? propsByName
    : selectionIncludes.reduce((prev, name) => {
        return { ...prev, [name]: propsByName[name] };
      }, {} as DefinitionProperties);
};
