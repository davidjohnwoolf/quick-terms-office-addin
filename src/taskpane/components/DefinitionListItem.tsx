import * as React from "react";
import { Link, MessageBar, MessageBarBody, MessageBarTitle, Body1Stronger } from "@fluentui/react-components";
import { selectParagraphById } from "../utils/selectParagraphById";

interface DefinitionListItemProps {
  uniqueId: string;
  name: string;
  description: string;
}

/** Display a definition list */
const DefinitionListItem: React.FC<DefinitionListItemProps> = ({ uniqueId, name, description }) => {
  const handleDefinitionClick = () => {
    selectParagraphById(uniqueId);
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
            <Body1Stronger>{name}</Body1Stronger>
          </Link>
        </MessageBarTitle>
        {description}
      </MessageBarBody>
    </MessageBar>
  );
};

export default DefinitionListItem;
