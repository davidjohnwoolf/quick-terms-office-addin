import * as React from "react";
import { Checkbox, makeStyles, SearchBox, tokens } from "@fluentui/react-components";

const useClasses = makeStyles({
  header: {
    background: tokens.colorNeutralBackground4Selected,
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px #ccc solid",
    marginBottom: tokens.spacingVerticalXXS,
  },
  toggle: {
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
        onChange={({ currentTarget }) => onShowAll(currentTarget.checked)}
        checked={showAll}
        className={classes.toggle}
        label="Show All"
      />
      <SearchBox placeholder="search definitions" appearance="filled-lighter" />
    </header>
  );
};

export default Header;
