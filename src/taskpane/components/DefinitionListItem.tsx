import * as React from "react";
import { Link, MessageBar, MessageBarBody, MessageBarTitle, Body1Stronger } from "@fluentui/react-components";
import { selectParagraphById } from "../utils/selectParagraphById";

interface DefinitionListItemProps {
  id: string;
  term: string;
  definition: string;
}

/** Display a definition list */
const DefinitionListItem: React.FC<DefinitionListItemProps> = ({ id, term, definition }) => {
  const handleDefinitionClick = () => {
    selectParagraphById(id);
  };

  /**
   * @todo MessageBar bar may not be the most semantically correct choice
   * probably best to update when List components are out from FluentUI
   */
  return (
    <MessageBar icon={null}>
      <MessageBarBody>
        <MessageBarTitle>
          <Link onClick={handleDefinitionClick}>
            <Body1Stronger>{term}</Body1Stronger>
          </Link>
        </MessageBarTitle>
        {definition}
      </MessageBarBody>
    </MessageBar>
  );
};

export default DefinitionListItem;
