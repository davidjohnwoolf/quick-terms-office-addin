import * as React from "react";
import { Checkbox, Field, makeStyles, SearchBox, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  header: {
    background: tokens.colorNeutralBackground4Selected,
    display: "flex",
    flexDirection: "row",
    align: "end",
    borderBottom: "1px #ccc solid",
    position: "sticky",
    top: "0",
  },
  checkbox: {
    color: "#888",
  },
  search: {},
});

interface HeaderProps {
  onShowAll: (value: boolean) => void;
  showAll: boolean;
}

/** Header component with search bar */
const Header: React.FC<HeaderProps> = ({ onShowAll, showAll }) => {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <Field className={styles.checkbox}>
        <Checkbox
          aria-label="Show all definitions no matter the document selection"
          onChange={({ currentTarget }) => onShowAll(currentTarget.checked)}
          checked={showAll}
          label="All"
        />
      </Field>
      <Field className={styles.search}>
        <SearchBox placeholder="search definitions" appearance="filled-lighter" />
      </Field>
    </header>
  );
};

export default Header;
