import * as React from "react";
import Loading from "./Loading";
import { useDefinitionState } from "../hooks/useDefinitionState";
import { Definition } from "../types";

export const DefinitionsContext = React.createContext<Definition[]>([] as Definition[]);

/** Provides a read-only context for document definitions */
const DefinitionsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const currentDefinitions = useDefinitionState();

  if (!currentDefinitions) return <Loading label="Loading definitions..." />;

  // no dispatch passed to context, which is intentional
  return <DefinitionsContext.Provider value={currentDefinitions}>{children}</DefinitionsContext.Provider>;
};

export default DefinitionsProvider;
