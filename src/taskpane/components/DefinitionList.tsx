import * as React from "react";
import DefinitionListItem from "./DefinitionListItem";
import { useDefinitions } from "../hooks/useDefinitions";
import { selectParagraphById } from "../utils/selectParagraphById";

interface DefinitionListProps {
  showAll: boolean;
}

/** Lists definitions either in current paragraph or all shown */
const DefinitionList: React.FC<DefinitionListProps> = ({ showAll }) => {
  const definitions = useDefinitions(showAll);

  return (
    <section>
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
