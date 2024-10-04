import * as React from "react";
import DefinitionList from "./DefinitionList";
import { useDefinitions } from "../hooks/useDefinitions";
import { useCurrentSelection } from "../hooks/useCurrentSelection";
import { findInSelection } from "../utils/findInSelection";
import { Field, makeStyles, SearchBox, tokens } from "@fluentui/react-components";
import { useDebounce } from "../hooks/useDebounce";
import { Definition } from "../types";

const useStyles = makeStyles({
  header: {
    background: tokens.colorNeutralBackground4Selected,
    display: "flex",
    flexDirection: "row",
    align: "end",
    borderBottom: "1px #ccc solid",
    position: "sticky",
    top: "0",
    overflow: "clip",
  },
  search: {
    boxSizing: "border-box",
    width: "100%",
  },
  selected: {
    boxSizing: "border-box",
    borderLeft: `5px solid ${tokens.colorBrandBackgroundSelected}`,
  },
});

type DefinitionTuple = [Definition[], Definition[]];

/** A component managing the layout of the application */
const App: React.FC = () => {
  const styles = useStyles();

  // the input value and handler
  const [inputText, setInputText] = React.useState<string>("");

  // the text used when filtering definitions
  const searchText = useDebounce(inputText);

  // current paragraph selected in document
  const currentSelection = useCurrentSelection();

  // all definitions in document
  const allDefinitions = useDefinitions();

  // filtered definitions by search text (if any)
  const definitions = searchText
    ? allDefinitions.filter((def) => def.term.toLowerCase().includes(searchText))
    : allDefinitions;

  const terms = allDefinitions.map((def) => def.term);
  // terms from selected in document
  const termsInSelection = findInSelection(terms, currentSelection);

  // divide the definitions by selected / unselected to show selected differently
  const [selectedDefinitions, unSelectedDefinitions] = definitions.reduce(
    ([prevSelected, prevUnSelected]: DefinitionTuple, current) => {
      return termsInSelection.includes(current.term)
        ? [[...prevSelected, current], prevUnSelected]
        : [prevSelected, [...prevUnSelected, current]];
    },
    [[], []] as DefinitionTuple
  );

  return (
    <section>
      <section className={styles.header}>
        <Field className={styles.search}>
          <SearchBox
            value={inputText}
            onInput={(event) => setInputText(event.currentTarget.value)}
            placeholder="search definitions"
            appearance="filled-lighter"
          />
        </Field>
      </section>
      <section className={styles.selected}>
        <DefinitionList definitions={selectedDefinitions} />
      </section>
      <section>
        <DefinitionList definitions={unSelectedDefinitions} />
      </section>
    </section>
  );
};

export default App;
