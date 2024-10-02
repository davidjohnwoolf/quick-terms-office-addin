import * as React from "react";
import DefinitionListItem from "./DefinitionListItem";
import { useDefinitions } from "../hooks/useDefinitions";
import { makeStyles, tokens } from "@fluentui/react-components";

const useClasses = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: tokens.spacingVerticalXXS,
    padding: tokens.spacingVerticalXXS,
  },
});

interface DefinitionListProps {
  selection?: string;
}

/** Lists definitions either in current paragraph or all shown */
const DefinitionList: React.FC<DefinitionListProps> = ({ selection }) => {
  const entries = useDefinitions(selection);

  const classes = useClasses();

  return (
    <section className={classes.container}>
      {entries.map(({ id, key, value }) => (
        <DefinitionListItem key={id} id={id} term={key} definition={value} />
      ))}
    </section>
  );
};

export default DefinitionList;
