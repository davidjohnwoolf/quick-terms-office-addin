import * as React from "react";
import DefinitionListItem from "./DefinitionListItem";
import { selectParagraphById } from "../utils/selectParagraphById";
import { Definition } from "../types";

interface DefinitionListProps {
  definitions: Definition[];
}

/** Lists definitions either in current paragraph or all shown */
const DefinitionList: React.FC<DefinitionListProps> = ({ definitions }) => {
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
