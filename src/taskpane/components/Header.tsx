import * as React from "react";
import { Checkbox, makeStyles, SearchBox, tokens } from "@fluentui/react-components";

const useClasses = makeStyles({
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
    alignSelf: "center",
    color: "#888",
  },
});

interface HeaderProps {
  onShowAll: (value: boolean) => void;
  showAll: boolean;
}

/** Header component with search bar */
const Header: React.FC<HeaderProps> = ({ onShowAll, showAll }) => {
  const classes = useClasses();

  return (
    <header className={classes.header}>
      <Checkbox
        aria-label="Show all definitions no matter the document selection"
        onChange={({ currentTarget }) => onShowAll(currentTarget.checked)}
        checked={showAll}
        className={classes.checkbox}
        label="All"
      />
      <SearchBox placeholder="search definitions" appearance="filled-lighter" />
    </header>
  );
};

export default Header;
