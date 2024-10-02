import * as React from "react";
import Loading from "./Loading";
import { useLoadDefinitionsEffect } from "../hooks/useLoadDefinitionsEffect";
import { ValueById } from "../types";

/** Should only be changed on load (mount) or when document paragraph for definition is changed */
export const DefinitionsContext = React.createContext<ValueById>({} as ValueById);

const DefinitionsProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, setState] = React.useState<ValueById>(null);

  useLoadDefinitionsEffect(setState);

  if (!state) return <Loading label="Loading definitions..." />;

  return <DefinitionsContext.Provider value={state}>{children}</DefinitionsContext.Provider>;
};

export default DefinitionsProvider;
