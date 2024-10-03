import * as React from "react";
import DefinitionListItem from "./DefinitionListItem";
import { useDefinitions } from "../hooks/useDefinitions";
import { makeStyles, tokens } from "@fluentui/react-components";
import { selectParagraphById } from "../utils/selectParagraphById";

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
  const classes = useClasses();

  const definitions = useDefinitions(selection);

  return (
    <section className={classes.container}>
      {definitions.map(({ uniqueLocalId, term, description }) => {
        return (
          <DefinitionListItem
            key={uniqueLocalId}
            term={term}
            description={description}
            onClick={() => selectParagraphById(uniqueLocalId)}
          />
        );
      })}
    </section>
  );
};

export default DefinitionList;
