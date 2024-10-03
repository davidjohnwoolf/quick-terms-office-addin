import * as React from "react";
import { Link, MessageBar, MessageBarBody, MessageBarTitle, Body1Stronger } from "@fluentui/react-components";
import { makeStyles, tokens } from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    margin: tokens.spacingVerticalXXS,
  },
});

interface DefinitionListItemProps {
  onClick: () => void;
  term: string;
  description: string;
}

/** Display a definition list item */
const DefinitionListItem: React.FC<DefinitionListItemProps> = ({ term, description, onClick }) => {
  const styles = useStyles();

  /**
   * @todo MessageBar bar may not be the most semantically correct choice
   * probably best to update when List components are out from FluentUI
   */
  return (
    <section className={styles.container}>
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
    </section>
  );
};

export default DefinitionListItem;
