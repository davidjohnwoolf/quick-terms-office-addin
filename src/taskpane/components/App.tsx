import * as React from "react";
import DefinitionList from "./DefinitionList";
import { Field, makeStyles, SearchBox, tokens } from "@fluentui/react-components";
import { useDebounce } from "../hooks/useDebounce";
import { useDefinitionResults } from "../hooks/useDefinitionResults";

const useStyles = makeStyles({
  header: {
    background: tokens.colorNeutralBackground4Selected,
    display: "flex",
    flexDirection: "row",
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
    borderLeft: `5px solid ${tokens.colorBrandBackgroundSelected}`,
  },
});

/** A component managing the layout of the application */
const App: React.FC = () => {
  const styles = useStyles();
  // the input value and handler
  const [inputText, setInputText] = React.useState<string>("");
  // the text used when filtering definitions
  const searchText = useDebounce(inputText);

  // selected and unselected definitions accounting for search text if any
  const [selectedDefinitions, unSelectedDefinitions] = useDefinitionResults(searchText);

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
