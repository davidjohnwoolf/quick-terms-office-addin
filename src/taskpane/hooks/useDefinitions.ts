import { Definition } from "../types";
import { useContext } from "react";
import { DefinitionsContext } from "../components/DefinitionsProvider";

/** Returns definitions in paragraph form by name and filtered by selection if needed */
export const useDefinitions = (): Definition[] => {
  return useContext(DefinitionsContext);
};
