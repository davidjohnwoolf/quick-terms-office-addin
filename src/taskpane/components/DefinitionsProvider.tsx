import * as React from "react";
import Loading from "./Loading";
import { useLoadDefinitionsEffect } from "../hooks/useLoadDefinitionsEffect";
import { Definition } from "../types";

/** @note the definitions context is readonly, with write access encapsulated by hooks in provider*/
export const DefinitionsContext = React.createContext<Definition[]>([] as Definition[]);

/** Provides a read-only context for document definitions */
const DefinitionsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = React.useState<Definition[]>(null);

  useLoadDefinitionsEffect(setState);

  if (!state) return <Loading label="Loading definitions..." />;

  // no dispatch passed to context, which is intentional
  return <DefinitionsContext.Provider value={state}>{children}</DefinitionsContext.Provider>;
};

export default DefinitionsProvider;
