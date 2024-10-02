import * as React from "react";
import DefinitionList from "./DefinitionList";
import { makeStyles } from "@fluentui/react-components";
import Header from "./Header";
import { useSelectionChangeEffect } from "../hooks/useSelectionChangeEffect";

const useClasses = makeStyles({
  app: {},
});

/** Layout and election state managed here and in the custom effect hook */
const App: React.FC = () => {
  const [currentSelection, setCurrentSelection] = React.useState<string>();
  const [showAll, setShowAll] = React.useState<boolean>(false);

  const classes = useClasses();

  useSelectionChangeEffect(setCurrentSelection);

  return (
    <section className={classes.app}>
      <Header onShowAll={(value) => setShowAll(value)} showAll={showAll} />
      <DefinitionList selection={!showAll && currentSelection} />
    </section>
  );
};

export default App;
