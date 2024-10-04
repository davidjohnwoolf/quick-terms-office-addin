import * as React from "react";
import Loading from "./Loading";
import { useDefinitionLoader } from "../hooks/useDefinitionLoader";
import { Definition } from "../types";

export const DefinitionsContext = React.createContext<Definition[]>([] as Definition[]);

/** Provides a read-only context for document definitions */
const DefinitionsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // load definitions from document on mount and on document definition change
  const currentDefinitions = useDefinitionLoader();

  if (currentDefinitions === null) return <Loading label="Loading definitions..." />;

  // no dispatch passed to context, context value is readonly
  return <DefinitionsContext.Provider value={currentDefinitions}>{children}</DefinitionsContext.Provider>;
};

export default DefinitionsProvider;
