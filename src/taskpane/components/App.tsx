import * as React from "react";
import DefinitionList from "./DefinitionList";
import Header from "./Header";
import { useSelectionChangeEffect } from "../hooks/useSelectionChangeEffect";

/** Layout and election state managed here and in the custom effect hook */
const App: React.FC = () => {
  const [currentSelection, setCurrentSelection] = React.useState<string>();
  const [showAll, setShowAll] = React.useState<boolean>(false);

  useSelectionChangeEffect(setCurrentSelection);

  return (
    <main>
      <Header onShowAll={(value) => setShowAll(value)} showAll={showAll} />
      <DefinitionList selection={!showAll && currentSelection} />
    </main>
  );
};

export default App;
