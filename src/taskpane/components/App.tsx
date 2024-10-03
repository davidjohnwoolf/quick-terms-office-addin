import * as React from "react";
import DefinitionList from "./DefinitionList";
import Header from "./Header";

/** A component managing the layout of the application */
const App: React.FC = () => {
  // this state managed here as it pertains to the app outside the header
  const [showAll, setShowAll] = React.useState<boolean>(false);

  return (
    <main>
      <Header onShowAll={(value) => setShowAll(value)} showAll={showAll} />
      <DefinitionList showAll={showAll} />
    </main>
  );
};

export default App;
