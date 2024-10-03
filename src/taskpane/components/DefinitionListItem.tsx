import * as React from "react";
import { Link, MessageBar, MessageBarBody, MessageBarTitle, Body1Stronger } from "@fluentui/react-components";

interface DefinitionListItemProps {
  onClick: () => void;
  term: string;
  description: string;
}

/** Display a definition list item */
const DefinitionListItem: React.FC<DefinitionListItemProps> = ({ term, description, onClick }) => {
  /**
   * @todo MessageBar bar may not be the most semantically correct choice
   * probably best to update when List components are out from FluentUI
   */
  return (
    <MessageBar icon={null}>
      <MessageBarBody>
        <MessageBarTitle>
          <Link onClick={onClick}>
            <Body1Stronger>{term}</Body1Stronger>
          </Link>
        </MessageBarTitle>
        {description}
      </MessageBarBody>
    </MessageBar>
  );
};

export default DefinitionListItem;
